import router from '@/Router/index';

export default {
  state: {
    menuStatus: false,
  },
  getters: {
    menu: state => {
      return state.menuStatus;
    },
  },
  mutations: {
    closeModal: () => {
      router.go(-1);
    },
    toggleMenu: state => {
      state.menuStatus = !state.menuStatus;
    }
  },
  actions: {
    closeModal: ({commit}) => {
      commit('closeModal');
    },
    toggleMenu: event => {
      event.commit("toggleMenu");
    }
  }
}