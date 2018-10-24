import router from '@/Router/index';
import players from './Players'
import events from './Events'
import news from './News'
import settlements from './Settlements'


export default {
  state: {
    menuStatus: false,
  },
  players,
  events,
  news,
  settlements,
  getters: {
    menu: state => {
      return state.menuStatus;
    },
    search: state => phrase =>
    {
      phrase = phrase.toLowerCase();

      let playerMatches = players.getters.players(players.state).filter(p => p.name.toLowerCase().includes(phrase));
      let eventMatches = events.getters.events(events.state).filter(e => e.name.toLowerCase().includes(phrase));
      let newsMatches = news.getters.news(news.state).filter(n => n.name.toLowerCase().includes(phrase));
      let settlementsMatches = settlements.getters.settlements(settlements.state).filter(s => s.name.toLowerCase().includes(phrase));
      return{
        players: playerMatches,
        events: eventMatches,
        news: newsMatches,
        settlements: settlementsMatches
      };
    }
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