import firebase from 'firebase';
import players from './Players'

export default {
  state: {
    events: [],
  },
  players,
  getters: {
    event: state => id =>
    {
      let ev;
      for(let i = 0;i < state.events.length;i++)
      {
        if(state.events[i].id === id)
        {
          ev = state.events[i];
          break;
        }
      }

      // assign settlements to the players

      if(ev.players !== undefined)
      {
        let pl = players.getters.players(players.state);
        for(let i = 0;i < ev.players.length;i++)
        {
          for(let j = 0;j < pl.length;j++)
          {
            if(ev.players[i].name === pl[j].name)
            {
              ev.players[i].settlement = pl[j].settlement;
              break;
            }
          }
        }
      }

      return ev;
    },
    topEvents: state => 
    {
        return state.events.sort(function(a,b)
        {
          return new Date(b.date) - new Date(a.date);
        }).slice(0,5);
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
        players: event.players,
        extensions: []
      };

      for(let i = 0;i < event.images.length;i++)
      {
        newEvent.extensions.push(event.images[i].name.slice(event.images[i].name.lastIndexOf('.')))
      }

      let key;
      let imageUrls = [];

      firebase.database().ref("events").push(newEvent)
        .then(data => {
          key = data.key;
          return key;
        })
        .then(key => {

          for(let i = 0;i < newEvent.extensions.length;i++)
          {
              const storageRef = firebase.storage().ref();
              event.images[i] = storageRef.child(`events/${key + i}${newEvent.extensions[i]}`).put(event.images[i]);
          }

        }).then(() => 
        {
          for(let i = 0;i < newEvent.extensions.length;i++)
          {
            if(event.images[i] !== undefined)
            {
              event.images[i].on('state_changed', snapshot => {
              }, error => {
                console.log(error)
              }, () => {
                event.images[i].snapshot.ref.getDownloadURL().then(function (downloadURL) {
                  imageUrls.push(downloadURL);
                  firebase.database().ref('events').child(key).update({imageUrl: downloadURL});
                })
              })
            }
          }
          commit('addEvent', {
            ...newEvent,
            imageUrls: imageUrls,
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
        const storageRef = firebase.storage().ref();
        if(event.extensions !== undefined)
        {
          for(let i = 0;i < event.extensions.length;i++)
          {
            const imageRef = storageRef.child(`events/${event.id + i}${event.extensions[i]}`);
            imageRef.delete();
          }
        }
      }).then(() => {
        commit('removeEvent', event);
      })
    },
  }
}