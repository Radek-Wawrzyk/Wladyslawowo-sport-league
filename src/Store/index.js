import Vue from 'vue';
import Vuex from 'vuex';
import firebase from "firebase";
import router from "@/Router/index";

Vue.use(Vuex);
Vue.use(firebase);

export default new Vuex.Store({
  state: {
    settlements: [],
    events: [],
    players: [],
    menuStatus: false,
    user: null,
    signInError: null
  },
  getters: {
    menu: state => {
      return state.menuStatus;
    },
    players: state => 
    {
      return state.players;
    },
    settlements: state => {
      return state.settlements;
    },
    events: state => {
      return state.events;
    },
    user: state => {
      return state.user;
    },
    signInError: state => {
      return state.signInError;
    }
  },
  mutations: {
    settlements: (state, settlements) => {
      state.settlements = settlements;
    },
    players: (state, players) =>
    {
      state.players = players;
    },
    events: (state,events) =>
    {
      state.events = events;
    },
    addSettlement: (state, newSettlement) => {
      state.settlements.push(newSettlement);
    },
    addPlayer: (state, newPlayer) =>
    {
      state.players.push(newPlayer);
    },
    addEvent: (state,newEvent) =>
    {
      state.events.push(newEvent);
    },
    singIn: (state, user) => {
      state.user = user;
      router.push("/panel");
    },
    logout: state => {
      state.user = null;
    },
    signInError: (state, error) => {
      state.signInError = error;
    },
    clearErrors: state => {
      state.signInError = null;
    },
    closeModal: () => {
      router.go(-1);
    },
    toggleMenu: state => {
      state.menuStatus =! state.menuStatus;
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
    players: ({commit}) => 
    {
      firebase.database().ref('players').once('value')
        .then(data => {
          let players = [];
          const object = data.val();

          for (let key in object) {
            players.push({
              id: key,
              name: object[key].name,
              settlement: object[key].settlement,
              imageUrl: object[key].imageUrl
            })
          }
          commit('players', players);
        })
        .catch(error => {
          console.log(error);
        });
    },
    events: ({commit}) =>
    {
      firebase.database().ref('events').once('value')
        .then(data => {
          let events = [];
          const object = data.val();

          for (let key in object) {
            events.push({
              id: key,
              name: object[key].name,
              description: object[key].settlement,
              imageUrl: object[key].imageUrl,
              date: object[key].date
            })
          }
          commit('events', events);
        })
        .catch(error => {
          console.log(error);
        });
    },
    addSettlement: ({commit}, settlement) => {
      const newSettlement = {
        name: settlement.name,
        description: settlement.description,
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
          const file = uploadImg.name;
          const extension = file.slice(file.lastIndexOf('.'));
          const storageRef = firebase.storage().ref();
          uploadImg = storageRef.child(`settlements/${key}.${extension}`).put(uploadImg);
        })
        .then(() => {
          uploadImg.on('state_changed', snapshot => {
          }, error => {
            console.log(error)
          }, () => {
            uploadImg.snapshot.ref.getDownloadURL().then(function (downloadURL) {
              imageUrl = downloadURL;
              firebase.database().ref('settlements').child(key).update({imageUrl: imageUrl});
              commit('addSettlement', {
                ...newSettlement,
                imageUrl: imageUrl,
                id: key
              });
            })
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    addPlayer: ({commit}, player) =>
    {
      const newPlayer = {
        name: player.name,
        settlement: player.settlement,
      };

      let imageUrl;
      let key;
      let uploadImg = player.img;

      firebase.database().ref("players").push(newPlayer)
        .then(data => {
          key = data.key;
          return key;
        })
        .then(key => {
          const file = uploadImg.name;
          const extension = file.slice(file.lastIndexOf('.'));
          const storageRef = firebase.storage().ref();
          uploadImg = storageRef.child(`players/${key}.${extension}`).put(uploadImg);
        })
        .then(() => {
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
                id: key
              });
            })
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    addEvent: ({commit}, event) =>
    {
      const newEvent = {
        name: event.name,
        description: event.description,
        date: event.date
      };

      let imageUrl;
      let key;
      let uploadImg = event.img;

      firebase.database().ref("events").push(newEvent)
        .then(data => {
          key = data.key;
          return key;
        })
        .then(key => {
          const file = uploadImg.name;
          const extension = file.slice(file.lastIndexOf('.'));
          const storageRef = firebase.storage().ref();
          uploadImg = storageRef.child(`events/${key}.${extension}`).put(uploadImg);
        })
        .then(() => {
          uploadImg.on('state_changed', snapshot => {
          }, error => {
            console.log(error)
          }, () => {
            uploadImg.snapshot.ref.getDownloadURL().then(function (downloadURL) {
              imageUrl = downloadURL;
              firebase.database().ref('events').child(key).update({imageUrl: imageUrl});
              commit('addEvent', {
                ...newEvent,
                imageUrl: imageUrl,
                id: key
              });
            })
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    signIn: ({commit}, user) => {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(user => {
          const newUser = {
            id: user.user.uid,
            email: user.user.email
          };
          commit("singIn", newUser);
          commit("clearErrors");
        })
        .catch(error => {
          console.log(error);
          commit("signInError", error);
        })
    },
    autoSignIn: ({commit}, user) => {
      const newUser = {
        id: user.uid,
        email: user.email
      };
      commit('singIn', newUser);
      commit("clearErrors");
    },
    logout: ({commit}) => {
      firebase.auth().signOut();
      commit('logout');
      router.push("/sign-in");
    },
    closeModal: ({commit}) => {
      commit('closeModal');
    },
    toggleMenu: event => {
      event.commit("toggleMenu");
    }
  }
});