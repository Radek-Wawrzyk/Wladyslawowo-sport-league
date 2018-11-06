import firebase from 'firebase'
import players from './Players'
import events from './Events'

export default {
  state: {
    settlements: [],
  },
  players,
  events,
  getters: {
    settlement: state => {
      return id => state.settlements.filter(settlement => {
        return settlement.id === id;
      });
    },
    topSettlements: state =>
    {
      let playersOfSettlement;
      let allEvents = events.getters.events(events.state);
      var result = state.settlements.map(function(settlement) // for each settlement
      {
        playersOfSettlement = players.getters.players(players.state).filter(x => x.settlement === settlement.name); //players from that settlement

        //get from every event a players from playersOfSettlement and sum points per each
        let sum = 0;
        for(let i = 0;i < allEvents.length;i++) //per each event
        {
          if(allEvents[i].players !== undefined) //if event has some records about players
          {
            for(let p = 0;p < allEvents[i].players.length;p++) // per each player that took part in that event
            {
              for(let s = 0;s < playersOfSettlement.length;s++) // per each player in the explored settlement
              {
                if(allEvents[i].players[p].name == playersOfSettlement[s].name) // check if the player from Event is present in the settlement
                {
                  sum += parseInt(allEvents[i].players[p].points);
                  break;
                }
              }
            }
          }
        }

        return{
          id: settlement.id,
          name: settlement.name,
          points: sum,
          imageUrl: settlement.imageUrl
        }
      });

      result = result.sort((a,b) =>
      {
        if(a.points > b.points)
        {
          return -1;
        }else if(b.points > a.points)
        {
          return 1;
        }
        return 0;
      });

      return result.slice(0,5);
    },
    briefSettlementById: state => id =>
    {
      let playersOfSettlement;
      let allEvents = events.getters.events(events.state);
      var settlement = state.settlements.filter(s => s.id === id);
  
      let [s] = settlement;

      if(s === undefined)
        s = {};

      playersOfSettlement = players.getters.players(players.state).filter(x => x.settlement === s.name); //players from that settlement

    
      //get from every event a players from playersOfSettlement and sum points per each
      let sum = 0;
      for(let i = 0;i < allEvents.length;i++) //per each event
      {
        if(allEvents[i].players !== undefined) //if event has some records about players
        {
          for(let p = 0;p < allEvents[i].players.length;p++) // per each player that took part in that event
          {
            for(let s = 0;s < playersOfSettlement.length;s++) // per each player in the explored settlement
            {
              if(allEvents[i].players[p].name == playersOfSettlement[s].name) // check if the player from Event is present in the settlement
              {
                sum += parseInt(allEvents[i].players[p].points);
                break;
              }
            }
          }
        }
      }

      return{
        id: s.id,
        name: s.name,
        description: s.description,
        points: sum,
        imageUrl: s.imageUrl,
        playerCount: playersOfSettlement.length
      }
    },
    settlements: state => {

      let playersOfSettlement;
      let allEvents = events.getters.events(events.state);
      var result = state.settlements.map(function(settlement) // for each settlement
      {
        playersOfSettlement = players.getters.players(players.state).filter(x => x.settlement === settlement.name); //players from that settlement

        //get from every event a players from playersOfSettlement and sum points per each
        let sum = 0;
        for(let i = 0;i < allEvents.length;i++) //per each event
        {
          if(allEvents[i].players !== undefined) //if event has some records about players
          {
            for(let p = 0;p < allEvents[i].players.length;p++) // per each player that took part in that event
            {
              for(let s = 0;s < playersOfSettlement.length;s++) // per each player in the explored settlement
              {
                if(allEvents[i].players[p].name == playersOfSettlement[s].name) // check if the player from Event is present in the settlement
                {
                  sum += parseInt(allEvents[i].players[p].points);
                  break;
                }
              }
            }
          }
        }

        return{
          id: settlement.id,
          name: settlement.name,
          points: sum,
          imageUrl: settlement.imageUrl
        }
      });

      result = result.sort((a,b) =>
      {
        if(a.points > b.points)
        {
          return -1;
        }else if(b.points > a.points)
        {
          return 1;
        }
        return 0;
      });

      return result;
    },
    rankSettlement: state => id =>
    {
      let playersOfSettlement;
      let allEvents = events.getters.events(events.state);
      var result = state.settlements.map(function(settlement) // for each settlement
      {
        playersOfSettlement = players.getters.players(players.state).filter(x => x.settlement === settlement.name); //players from that settlement

        //get from every event a players from playersOfSettlement and sum points per each
        let sum = 0;
        for(let i = 0;i < allEvents.length;i++) //per each event
        {
          if(allEvents[i].players !== undefined) //if event has some records about players
          {
            for(let p = 0;p < allEvents[i].players.length;p++) // per each player that took part in that event
            {
              for(let s = 0;s < playersOfSettlement.length;s++) // per each player in the explored settlement
              {
                if(allEvents[i].players[p].name == playersOfSettlement[s].name) // check if the player from Event is present in the settlement
                {
                  sum += parseInt(allEvents[i].players[p].points);
                  break;
                }
              }
            }
          }
        }

        return{
          id: settlement.id,
          name: settlement.name,
          points: sum,
          imageUrl: settlement.imageUrl
        }
      });

      result = result.sort((a,b) =>
      {
        if(a.points > b.points)
        {
          return -1;
        }else if(b.points > a.points)
        {
          return 1;
        }
        return 0;
      });

      let tIndex = 0;
      for(let j = 0;j < result.length;j++)
      {
        if(result[j].id === id)
        {
          tIndex = j;
          break;
        }
      }

      let First;
      let Second;
      let Third;

      if(tIndex == 0)
      {
        First = tIndex;
        Second = tIndex + 1;
        Third = Second + 1;
      }
      else if(tIndex = 1)
      {
        First = tIndex - 1;
        Second = tIndex;
        Third = tIndex + 1;
      }
      else
      {
        First = tIndex - 2;
        Second = tIndex - 1;
        Third = tIndex;
      }

      return{
        first:
        {
          pos: First + 1,
          data: result[First]
        },
        second:
        {
          pos: Second + 1,
          data: result[Second]
        },
        third:
        {
          pos: Third + 1,
          data: result[Third]
        }
      };
    }
  },
  mutations: {
    settlements: (state, settlements) => {
      state.settlements = settlements;
    },
    addSettlement: (state, newSettlement) => {
      state.settlements.push(newSettlement);
    },
    updateSettlement: (state, settlement) => {
      state.settlements[state.settlements.indexOf(settlement)] = settlement;
    },
    removeSettlement: (state, settlement) => {
      state.settlements.splice(state.settlements.indexOf(settlement), 1);
    }
  },
  actions: {
    settlements: ({commit}) => {
      firebase.database().ref('settlements').once('value')
        .then(data => {
          let settlements = [];
          const object = data.val();

          for (let key in object) {
            settlements.push({
              id: key,
              name: object[key].name,
              description: object[key].description,
              imageUrl: object[key].imageUrl
            })
          }
          commit('settlements', settlements);
        })
        .catch(error => {
          console.log(error);
        });
    },
    addSettlement: ({commit}, settlement) => {

      const newSettlement = {
        name: settlement.name,
        description: settlement.description,
        extension: settlement.img === undefined ? "" : settlement.img.name.slice(settlement.img.name.lastIndexOf('.'))
      };

      let imageUrl;
      let key;
      let uploadImg = settlement.img;

      firebase.database().ref("settlements").push(newSettlement)
        .then(data => {
          key = data.key;
          return key;
        })
        .then(key => {
          if(uploadImg !== undefined)
          {
            const storageRef = firebase.storage().ref();
            uploadImg = storageRef.child(`settlements/${key}${newSettlement.extension}`).put(uploadImg);
          }
          else
          {
            firebase.database().ref('settlements').child(key).update({key: key});
              commit('addSettlement', {
                ...newSettlement,
                id: key,
              });
          }
        })
        .then(() => {
          if(uploadImg !== undefined)
          {
            uploadImg.on('state_changed', snapshot => {
            }, error => {
              console.log(error)
            }, () => {
              uploadImg.snapshot.ref.getDownloadURL().then(downloadURL => {
                imageUrl = downloadURL;
                firebase.database().ref('settlements').child(key).update({imageUrl: imageUrl});
                commit('addSettlement', {
                  ...newSettlement,
                  imageUrl: imageUrl,
                  id: key,
                });
              })
            })
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    updateSettlement: ({commit}, settlement) => {
      let editedImage = settlement.img !== undefined;
      let file, extension, uploadImg, imageRef, imageUrl, storageRef;

      if(settlement.imageUrl === undefined)
        settlement.imageUrl = null;

      if (editedImage) {
        file = settlement.img.name;
        extension = file.slice(file.lastIndexOf('.'));
        uploadImg = settlement.img;
        storageRef = firebase.storage().ref();

        settlement.extension = extension;
      }
      firebase.database().ref('settlements').child(settlement.id).update(settlement).then(key => {
        if (editedImage)
          {
            uploadImg = storageRef.child(`settlements/${settlement.id}${settlement.extension}`).put(uploadImg)
          }
      }).then(() => {
        if (editedImage) {
          uploadImg.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            imageUrl = downloadURL;
            firebase.database().ref('settlements').child(settlement.id).update({imageUrl: imageUrl});
            settlement.imageUrl = imageUrl;
          })
        }
        commit('updateSettlement', settlement);
      })
    },
    removeSettlement: ({commit}, settlement) => {
      firebase.database().ref('settlements').child(settlement.id).remove().then(key => {
        if(settlement.extension !== undefined)
        {
          const storageRef = firebase.storage().ref();
          const imageRef = storageRef.child(`settlements/${settlement.id}${settlement.extension}`);
          imageRef.delete();
        }
      }).then(() => {
        commit('removeSettlement', settlement);
      })
    },
  }
}