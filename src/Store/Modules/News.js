import firebase from 'firebase'

export default {
  state: {
    news: [],
  },
  getters: {
    briefNews: state =>
    {
      var result = state.news.map(function(news)
      {
        return{
          id: news.id,
          name: news.name,
          date: news.date,
          description: news.description,
          imageUrl: news.imageUrl
        }
      });
      return result;
    },
    news: state => {
      return state.news;
    },
    topNews: state =>
    {
      return state.news.sort(function(a,b)
        {
          return new Date(b.date) - new Date(a.date);
        }).slice(0,5);
    },
    briefNewsById: state => id =>
    {
      var news = state.news.file(n => n.id === id);
      return{
        id: news.id,
        name: news.name,
        date: news.date,
        description: news.description,
        imageUrl: news.imageUrl
      }
    },
  },
  mutations: {
    news: (state, news) => {
      state.news = news
    },
    addNews: (state, newNews) => {
      state.news.push(newNews);
    },
    updateNews: (state, news) => {
      state.news[state.news.indexOf(news)] = news;
    },
    removeNews: (state, news) => {
      state.news.splice(state.news.indexOf(news), 1);
    }
  },
  actions: {
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
    addNews: ({commit}, news) => {
      const newNews = {
        name: news.name,
        description: news.description,
        date: news.date,
        extension: news.img === undefined ? "" : news.img.name.slice(news.img.name.lastIndexOf('.'))
      };

      let imageUrl;
      let key;
      let uploadImg = news.img;

      firebase.database().ref("news").push(newNews)
        .then(data => {
          key = data.key;
          return key;
        })
        .then(key => {
          if(uploadImg !== undefined)
          {
            const storageRef = firebase.storage().ref();
            uploadImg = storageRef.child(`news/${key}${newNews.extension}`).put(uploadImg);
          }
          else
          {
            firebase.database().ref('news').child(key).update({key: key});
              commit('addNews', {
                ...newNews,
                id: key,
              });
          }
        })
        .then(() => {
          if(uploadImg !== undefined)
          {
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
                  id: key
                });
              })
            })
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    updateNews: ({commit}, news) => {
      var editedImage = news.img !== undefined;
      let file, extension, uploadImg, imageRef, imageUrl, storageRef;

      if (editedImage) {
        file = news.img.name;
        extension = file.slice(file.lastIndexOf('.'));
        uploadImg = news.img;
        storageRef = firebase.storage().ref();

        news.extension = extension;
      }

      firebase.database().ref('news').child(news.id).update(news).then(key => {
        if (editedImage) {
          uploadImg = storageRef.child(`news/${news.id}${news.extension}`).put(uploadImg)
        }
      }).then(() => {
        if (editedImage) {
          uploadImg.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            imageUrl = downloadURL;
            firebase.database().ref('news').child(news.id).update({imageUrl: imageUrl});
            news.imageUrl = imageUrl;
          })
        }
        commit('updateNews', news);
      })
    },
    removeNews: ({commit}, news) => {
      firebase.database().ref('news').child(news.id).remove().then(key => {
        if(news.extension !== undefined)
        {
          const storageRef = firebase.storage().ref();
          const imageRef = storageRef.child(`news/${news.id}${news.extension}`);
          imageRef.delete();
        }
      }).then(() => {
        commit('removeNews', news);
      })
    },
  }
}