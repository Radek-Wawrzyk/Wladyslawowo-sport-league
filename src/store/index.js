import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuStatus: false
  },
  getters: {
    menu: state => {
      return state.menuStatus;
    }
  },
  mutations: {
    toggleMenu: state => {
      state.menuStatus =! state.menuStatus;
    }
  },
  actions: {
    toggleMenu: event => {
      event.commit("toggleMenu");
    }
  }
})
