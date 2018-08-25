import Vue from 'vue';
import Vuex from 'vuex';
import firebase from "firebase";
import router from "@/Router/index";

Vue.use(Vuex);
Vue.use(firebase);

export default new Vuex.Store({
  state: {
    settlements: [],
    menuStatus: false,
    user: null,
    signInError: null
  },
  getters: {
    menu: state => {
      return state.menuStatus;
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
              logo: object[key].logo
            })
          }
          commit('settlements', settlements);
        })
        .catch(error => {
          console.log(error);
        });
    },
    signIn: ({commit}, user) => {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(user => {
          const newUser = {
            id: user.user.uid,
            email: user.user.email
          };
          commit("singIn", newUser);
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
    },
    logout: ({commit}) => {
      firebase.auth().signOut();
      commit('logout');
      router.push("/sign-in");
    },
    toggleMenu: event => {
      event.commit("toggleMenu");
    }
  }
});