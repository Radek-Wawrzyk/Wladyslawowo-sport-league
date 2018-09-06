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
    news: [],
    menuStatus: false,
    user: null,
    signInError: null
  },
  getters: {
    menu: state => {
      return state.menuStatus;
    },
    players: state => {
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
    news: state => {
      return state.news;
    },
    signInError: state => {
      return state.signInError;
    }
  },
  mutations: {
    settlements: (state, settlements) => {
      state.settlements = settlements;
    },
    players: (state, players) => {
      state.players = players;
    },
    events: (state, events) => {
      state.events = events;
    },
    news: (state, news) => {
      state.news = news
    },
    addSettlement: (state, newSettlement) => {
      state.settlements.push(newSettlement);
    },
    removeSettlement: (state, settlement) =>
    {
      state.settlements.splice(state.settlements.indexOf(settlement),1);
    },
    addPlayer: (state, newPlayer) => {
      state.players.push(newPlayer);
    },
    removePlayer: (state, player) => 
    {
      state.players.splice(state.players.indexOf(player),1);
    },
    addEvent: (state, newEvent) => {
      state.events.push(newEvent);
    },
    removeEvent: (state, event) =>{
      state.events.splice(state.events.indexOf(event),1);
    },
    addNews: (state, newNews) => {
      state.news.push(newNews);
    },
    removeNews: (state, news) =>
    {
      state.news.splice(state.news.indexOf(news),1);
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
      state.menuStatus = !state.menuStatus;
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
                imageUrl: object[key].imageUrl
              })
            }
            commit('players', players);
          })
          .catch(error => {
            console.log(error);
          });
    },
    events: ({commit}) => {
      firebase.database().ref('events').once('value')
          .then(data => {
            let events = [];
            const object = data.val();

            for (let key in object) {
              events.push({
                id: key,
                name: object[key].name,
                description: object[key].description,
                players: object[key].players,
                date: object[key].date
              })
            }
            commit('events', events);
          })
          .catch(error => {
            console.log(error);
          });
    },
    news: ({commit}) => {
      firebase.database().ref('news').once('value')
          .then(data => {
            let news = [];
            const object = data.val();

            for (let key in object) {
              news.push({
                id: key,
                name: object[key].name,
                description: object[key].description,
                imageUrl: object[key].imageUrl,
                date: object[key].date
              })
            }
            commit('news', news);
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
      let extension;

      firebase.database().ref("settlements").push(newSettlement)
          .then(data => {
            key = data.key;
            return key;
          })
          .then(key => {
            let file = uploadImg.name;
            extension = file.slice(file.lastIndexOf('.'));
            const storageRef = firebase.storage().ref();
            uploadImg = storageRef.child(`settlements/${key}${extension}`).put(uploadImg);
          })
          .then(() => {
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
                  extension: extension
                });
              })
            })
          })
          .catch(error => {
            console.log(error)
          })
    },
    removeSettlement: ({commit}, settlement) =>
    {
      firebase.database().ref('settlements').child(settlement.id).remove().then(key => {
        const storageRef = firebase.storage().ref();
        const imageRef = storageRef.child(`settlements/${settlement.id}${settlement.extension}`);
        imageRef.delete();
      }).then(() =>
      {
        commit('removeSettlement',settlement);
      })
    },
    addEvent: ({commit}, event) => {
      const newEvent = {
        name: event.name,
        description: event.description,
        date: event.date,
        players: event.players
      };

      let key;

      firebase.database().ref("events").push(newEvent)
      .then(data => {
        key = data.key;
        return key;
      })
      .then(key => {
        commit('addEvent', {
          ...newEvent,
          id: key
        });
      })
      .catch(error => {
        console.log(error)
      })
    },
    addPlayer: ({commit}, player) => {
      const newPlayer = {
        name: player.name,
        settlement: player.settlement,
      };

      let imageUrl;
      let key;
      let uploadImg = player.img;
      let extension;

      firebase.database().ref("players").push(newPlayer)
          .then(data => {
            key = data.key;
            return key;
          })
          .then(key => {
            let file = uploadImg.name;
            extension = file.slice(file.lastIndexOf('.'));
            const storageRef = firebase.storage().ref();
            uploadImg = storageRef.child(`players/${key}${extension}`).put(uploadImg);
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
                  id: key,
                  extension: extension
                });
              })
            })
          })
          .catch(error => {
            console.log(error)
          })
    },
    removePlayer: ( {commit},player) =>
    {
      firebase.database().ref('players').child(player.id).remove().then(key => {
        const storageRef = firebase.storage().ref();
        const imageRef = storageRef.child(`players/${player.id}${player.extension}`);
        imageRef.delete();
      }).then(() =>
      {
        commit('removePlayer',player);
      })
    },
    addEvent: ({commit}, event) => {
      const newEvent = {
        name: event.name,
        description: event.description,
        date: event.date,
        players: event.players
      };

      let key;

      firebase.database().ref("events").push(newEvent)
      .then(data => {
        key = data.key;
        return key;
      })
      .then(key => {
        commit('addEvent', {
          ...newEvent,
          id: key
        });
      })
      .catch(error => {
        console.log(error)
      })
    },
    removeEvent: ({commit}, event) =>
    {
      firebase.database().ref('events').child(event.id).remove().then(key => {
        commit('removeEvent',event);
      });
    },
    addNews: ({commit}, news) => {
      const newNews = {
        name: news.name,
        description: news.description,
        date: news.date
      };

      let imageUrl;
      let key;
      let uploadImg = news.img;
      let extension;

      firebase.database().ref("news").push(newNews)
          .then(data => {
            key = data.key;
            return key;
          })
          .then(key => {
            let file = uploadImg.name;
            extension = file.slice(file.lastIndexOf('.'));
            const storageRef = firebase.storage().ref();
            uploadImg = storageRef.child(`news/${key}${extension}`).put(uploadImg);
          })
          .then(() => {
            uploadImg.on('state_changed', snapshot => {
            }, error => {
              console.log(error)
            }, () => {
              uploadImg.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                imageUrl = downloadURL;
                firebase.database().ref('news').child(key).update({imageUrl: imageUrl});
                commit('addNews', {
                  ...newNews,
                  imageUrl: imageUrl,
                  id: key,
                  extension: extension
                });
              })
            })
          })
          .catch(error => {
            console.log(error)
          })
    },
    removeNews: ({commit}, news) =>
    {
      firebase.database().ref('news').child(news.id).remove().then(key => {
        const storageRef = firebase.storage().ref();
        const imageRef = storageRef.child(`news/${news.id}${news.extension}`);
        imageRef.delete();
      }).then(() =>
      {
        commit('removeNews',news);
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