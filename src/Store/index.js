import Vue from 'vue';
import Vuex from 'vuex';
import firebase from "firebase";
import router from "@/Router/index";

Vue.use(Vuex);
Vue.use(firebase);

export default new Vuex.Store({
  state: {
    settlements: [],
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
    addSettlement: (state, newSettlement) => {
      state.settlements.push(newSettlement);
    },
    addPlayer: (state, newPlayer) =>
    {
      state.players.push(newPlayer);
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
    addPlayer: ({comit}, player) =>
    {
      
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