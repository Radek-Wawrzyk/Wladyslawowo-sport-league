import Vue from 'vue';
import Vuex from 'vuex';
import firebase from "firebase";

Vue.use(Vuex);
Vue.use(firebase);

export default new Vuex.Store({
  state: {
    settlements: [],
    menuStatus: false
  },
  getters: {
    menu: state => {
      return state.menuStatus;
    },
    settlements: state => {
      return state.settlements;
    }
  },
  mutations: {
    settlements: (state, settlements) => {
      state.settlements = settlements;
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
          console.log(settlements);
        })
        .catch(error => {
          console.log(error);
        });
    },
    toggleMenu: event => {
      event.commit("toggleMenu");
    }
  }
});