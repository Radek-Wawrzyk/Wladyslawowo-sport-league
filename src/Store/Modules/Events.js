import firebase from 'firebase';

export default {
  state: {
    events: [],
  },
  getters: {
    event(state) {
      return id => state.events.filter(e => {
        return e.id == id
      });
    },
    events: state => {
      return state.events;
    },
  },
  mutations: {
    events: (state, events) => {
      state.events = events;
    },
    addEvent: (state, newEvent) => {
      state.events.push(newEvent);
    },
    updateEvent: (state, event) => {
      state.events[state.events.indexOf(event)] = event;
    },
    removeEvent: (state, event) =>{
      state.events.splice(state.events.indexOf(event),1);
    },
  },
  actions: {
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
    updateEvent: ({commit}, event) => {
      if (event.players === undefined) event.players = [];

      firebase.database().ref('events').child(event.id).update(event).then(key => {
        commit('updateEvent', event);
      });
    },
    removeEvent: ({commit}, event) => {
      firebase.database().ref('events').child(event.id).remove().then(key => {
        commit('removeEvent', event);
      });
    },
  }
}