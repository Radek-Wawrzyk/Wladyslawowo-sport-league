import firebase from 'firebase'
import players from './Players'
import events from './Events'
import Vue from "vue";

export default {
  state: {
    settlements: [],
  },
  players,
  events,
  getters: {
    settlement: state => id => {
      return state.settlements.filter(settlement => {
        return settlement.id === id;
      });
    },
    topSettlements: state => {
      const allEvents = events.getters.events(events.state);
      let playersOfSettlement;

      let result = state.settlements.map(settlement => {
        let sum = 0;
        playersOfSettlement = players.getters.players(players.state).filter(player => player.settlement === settlement.name);

        if (allEvents) {
          allEvents.forEach(event => {
            if (event.players) {
              event.players.forEach(item => {
                playersOfSettlement.forEach(settlement => {
                  if (item.name === settlement.name) {
                    sum += parseInt(item.points);
                  }
                })
              });
            }
          });
        }

        return {
          id: settlement.id,
          name: settlement.name,
          points: sum,
          imageUrl: settlement.imageUrl
        }
      });

      result = result.sort((a, b) => {
        if (a.points > b.points) {
          return -1;
        } else if (b.points > a.points) {
          return 1;
        }
        return 0;
      });

      return result.slice(0,5);
    },
    playerSettlements: () => id => {
      const playersCollection = players.getters.players(players.state).filter(player => player.settlementId === id);
      const allEvents = events.getters.events(events.state);
      let result = [];

      playersCollection.forEach(player => {
        let sum = 0;

        if (allEvents) {
          allEvents.forEach(event => {
            if (event.players) {
              event.players.forEach(item => {
                if (item.name === player.name) {
                  sum += parseInt(item.points);
                }
              });
            }
          });
        }

        result.push({
          player: player,
          points: sum
        });
      });

      return result;
    },
    briefSettlementById: state => id => {
      const allEvents = events.getters.events(events.state);
      const settlement = state.settlements.filter(settlement => settlement.id === id);
      let playersOfSettlement;
      let sum = 0;

      let [searchSettlement] = settlement;

      if (searchSettlement === undefined) {
        searchSettlement = {};
      }

      playersOfSettlement = players.getters.players(players.state).filter(player => player.settlement === searchSettlement.name);

      if (allEvents) {
        allEvents.forEach(event => {
          if (event.players) {
            event.players.forEach(player => {
              playersOfSettlement.forEach(item => {
                if (player.name === item.name) {
                  sum += parseInt(player.points);
                }
              })
            });
          }
        });
      }

      return {
        id: searchSettlement.id,
        name: searchSettlement.name,
        description: searchSettlement.description,
        points: sum,
        imageUrl: searchSettlement.imageUrl,
        playerCount: playersOfSettlement.length
      }
    },
    settlements: state => {
      const allEvents = events.getters.events(events.state);
      let playersOfSettlement;

      let result = state.settlements.map(settlement => {
        playersOfSettlement = players.getters.players(players.state).filter(player => player.settlement === settlement.name);
        let sum = 0;

        if (allEvents) {
          allEvents.forEach(event => {
            if (event.players) {
              event.players.forEach(item => {
                playersOfSettlement.forEach(player => {
                  if (item.name === player.name) {{
                    sum += parseInt(item.points);
                  }}
                });
              });
            }
          });
        }

        return {
          id: settlement.id,
          name: settlement.name,
          points: sum,
          imageUrl: settlement.imageUrl
        }
      });

      result = result.sort((a, b) => {
        if (a.points > b.points) {
          return -1;
        } else if (b.points > a.points) {
          return 1;
        }
        return 0;
      });

      return result;
    },
  },
  mutations: {
    settlements: (state, settlements) => {
      state.settlements = settlements;
    },
    addSettlement: (state, newSettlement) => {
      state.settlements.push(newSettlement);
    },
    updateSettlement: (state, settlement) => {
      let result = state.settlements.find(item => item.id === settlement.id);
      let index = (state.settlements.indexOf(result));

      Vue.set(state.settlements, index, settlement);
    },
    removeSettlement: (state, settlement) => {
      state.settlements.splice(state.settlements.indexOf(settlement), 1);
    }
  },
  actions: {
    settlements: async ({commit}) => {
      const data = await firebase.database().ref('settlements').once('value');
      let settlements = [];
      const dataValue = data.val();

      Object.keys(dataValue).forEach(itemKey => {
        settlements.push({
          id: itemKey,
          name: dataValue[itemKey].name,
          description: dataValue[itemKey].description,
          imageUrl: dataValue[itemKey].imageUrl
        })
      });

      commit('settlements', settlements);
    },
    addSettlement: async ({commit}, settlement) => {
      const newSettlement = {
        name: settlement.name,
        description: settlement.description,
        extension: settlement.img === undefined ? "" : settlement.img.name.slice(settlement.img.name.lastIndexOf('.'))
      };

      let imageUrl;
      let key;
      let uploadImg = settlement.img;

      const data = await firebase.database().ref("settlements").push(newSettlement);
      key = data.key;

      if (uploadImg) {
        const storageRef = firebase.storage().ref();
        uploadImg = storageRef.child(`settlements/${key}${newSettlement.extension}`).put(uploadImg);


        uploadImg.on('state_changed', snapshot => {}, error => console.log(error), async () => {
          let downloadURL = await uploadImg.snapshot.ref.getDownloadURL();
          imageUrl = downloadURL;
          firebase.database().ref('settlements').child(key).update({imageUrl: imageUrl});

          console.log(imageUrl);

          commit('addSettlement', {
            ...newSettlement,
            imageUrl: imageUrl,
            id: key,
          });
        });
      } else {
        await firebase.database().ref('settlements').child(key).update({key: key});

        commit('addSettlement', {
          ...newSettlement,
          id: key,
        });
      }
    },
    updateSettlement: async ({commit}, settlement) => {
      let editedImage = settlement.img !== undefined;
      let file, extension, uploadImg, imageUrl, storageRef;

      if (settlement.imageUrl === undefined) {
        settlement.imageUrl = null;
      }

      await firebase.database().ref('settlements').child(settlement.id).update(settlement);

      if (editedImage) {
        file = settlement.img.name;
        extension = file.slice(file.lastIndexOf('.'));
        uploadImg = settlement.img;
        storageRef = firebase.storage().ref();
        settlement.extension = extension;

        uploadImg = storageRef.child(`settlements/${settlement.id}${settlement.extension}`).put(uploadImg);
        let downloadURL =  await uploadImg.snapshot.ref.getDownloadURL();

        if (downloadURL === undefined) {
          downloadURL = null;
        }

        imageUrl = downloadURL;
        console.log(imageUrl);
        await firebase.database().ref('settlements').child(settlement.id).update({imageUrl: imageUrl});
        settlement.imageUrl = imageUrl;
      }

      commit('updateSettlement', settlement);
    },
    removeSettlement: async ({commit}, settlement) => {
      await firebase.database().ref('settlements').child(settlement.id).remove();

      if (settlement.extension) {
        const storageRef = firebase.storage().ref();
        const imageRef = storageRef.child(`settlements/${settlement.id}${settlement.extension}`);
        imageRef.delete();
      }

      commit('removeSettlement', settlement);
    },
  }
}