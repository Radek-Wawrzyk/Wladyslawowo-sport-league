import firebase from 'firebase'

export default {
  state: {
    players: [],
  },
  getters: {
    player: state => {
      return id => state.players.filter(player =>{
        return player.id === id;
      });
    },
    players: state => {
      return state.players;
    },
  },
  mutations: {
    players: (state, players) => {
      state.players = players;
    },
    addPlayer: (state, newPlayer) => {
      state.players.push(newPlayer);
    },
    updatePlayer: (state, player) => {
      state.players[state.players.indexOf(player)] = player;
    },
    removePlayer: (state, player) => {
      state.players.splice(state.players.indexOf(player), 1);
    },
  },
  actions: {
    players: ({commit}) => {
      firebase.database().ref('players').once('value')
          .then(data => {
            let players = [];
            const object = data.val();

            for (let key in object) {
              players.push({
                id: key,
                name: object[key].name,
                settlement: object[key].settlement,
                extension: object[key].extension,
                imageUrl: object[key].imageUrl
              })
            }
            commit('players', players);
          })
          .catch(error => {
            console.log(error);
          });
    },
    addPlayer: ({commit}, player) => {
      let imageUrl;
      let key;
      let uploadImg = player.img;

      const newPlayer = {
        name: player.name,
        settlement: player.settlement,
        extension: player.img === undefined ? "" : player.img.name.slice(player.img.name.lastIndexOf('.'))
      };

      firebase.database().ref("players").push(newPlayer)
        .then(data => {
          key = data.key;
          return key;
        })
        .then(key => {
          if(uploadImg !== undefined)
          {
            const storageRef = firebase.storage().ref();
            uploadImg = storageRef.child(`players/${key}${newPlayer.extension}`).put(uploadImg);
          }
          else
          {
            firebase.database().ref('players').child(key).update({key: key});
              commit('addPlayer', {
                ...newPlayer,
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
              uploadImg.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                imageUrl = downloadURL;
                firebase.database().ref('players').child(key).update({imageUrl: imageUrl});
                commit('addPlayer', {
                  ...newPlayer,
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
    updatePlayer: ({commit}, player) => {
      let editedImage = player.img !== undefined;
      let file, extension, uploadImg, imageRef, imageUrl, storageRef;

      if (editedImage) {
        file = player.img.name;
        extension = file.slice(file.lastIndexOf('.'));
        uploadImg = player.img;
        storageRef = firebase.storage().ref();

        player.extension = extension;
      }

      firebase.database().ref('players').child(player.id).update(player).then(key => {
        if (editedImage) {
          uploadImg = storageRef.child(`players/${player.id}${player.extension}`).put(uploadImg)
        }
      }).then(() => {
        if (editedImage) {
          uploadImg.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            imageUrl = downloadURL;
            firebase.database().ref('players').child(player.id).update({imageUrl: imageUrl});
            player.imageUrl = imageUrl;
          })
        }
        commit('updatePlayer', player);
      })
    },
    removePlayer: ({commit}, player) => {
      firebase.database().ref('players').child(player.id).remove().then(key => {
        if(player.extension !== undefined)
        {
          const storageRef = firebase.storage().ref();
          const imageRef = storageRef.child(`players/${player.id}${player.extension}`);
          imageRef.delete();
        }
      }).then(() => {
        commit('removePlayer', player);
      })
    },
  }
}