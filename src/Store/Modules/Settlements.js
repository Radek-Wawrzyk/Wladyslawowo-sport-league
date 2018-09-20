import firebase from 'firebase'

export default {
  state: {
    settlements: [],
  },
  getters: {
    settlement: state => {
      return id => state.settlements.filter(settlement =>{
        return settlement.id === id;
      });
    },
    briefSettlements: state =>
    {
      var result = state.settlements.map(function(settlement)
      {
        return{
          id: settlement.id,
          name: settlement.name,
          points: settlement.points,
          imageUrl: settlement.imageUrl
        }
      });
      return result;
    },
    briefSettlementById: state =>
    {
      return id => state.settlements.filter(settlement => {
        return settlement.id === id;
      });
    },
    settlements: state => {
      return state.settlements;
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

      if (editedImage) {
        file = settlement.img.name;
        extension = file.slice(file.lastIndexOf('.'));
        uploadImg = settlement.img;
        storageRef = firebase.storage().ref();

        settlement.extension = extension;
        console.log('extension changed to ' + extension);
      }

      firebase.database().ref('settlements').child(settlement.id).update(settlement).then(key => {
        if (editedImage)
          uploadImg = storageRef.child(`settlements/${settlement.id}${settlement.extension}`).put(uploadImg)
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