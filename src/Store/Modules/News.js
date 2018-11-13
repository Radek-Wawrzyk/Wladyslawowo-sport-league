import firebase from 'firebase'
import Vue from 'vue'

export default {
  state: {
    news: [],
  },
  getters: {
    news: state => {
      return state.news;
    },
    topNews: state => {
      const sortedNews = state.news.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });

      return sortedNews.slice(0, 5);
    },
    briefNewsById: state => newsId => {
      const news = state.news.find(news => news.id === newsId);

      return {
        id: news.id,
        name: news.name,
        date: news.date,
        description: news.description,
        imageUrl: news.imageUrl
      }
    }
  },
  mutations: {
    news: (state, news) => {
      state.news = news
    },
    addNews: (state, newNews) => {
      state.news.push(newNews);
    },
    updateNews: (state, news) => {
      let index = 0;

      for (let i = 0; i < state.news.length; i++) {
        if (state.news[i].id === news.id) {
          index = i;
          break;
        }
      }

      Vue.set(state.news, index, news);
    },
    removeNews: (state, news) => {
      state.news.splice(state.news.indexOf(news), 1);
    }
  },
  actions: {
    news: async ({commit}) => {
      const data = await firebase.database().ref('news').once('value');
      const dataValue = data.val();
      let news = [];

      Object.keys(dataValue).forEach(itemKey => {
        news.push({
          id: itemKey,
          name: dataValue[itemKey].name,
          description: dataValue[itemKey].description,
          imageUrl: dataValue[itemKey].imageUrl,
          date: dataValue[itemKey].date
        })
      });

      commit('news', news);
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

      if(news.imageUrl === undefined)
        news.imageUrl = null;

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
      });
    },
    removeNews: async ({commit}, news) => {
      await firebase.database().ref('news').child(news.id).remove();

      if (news.extension) {
        const storageRef = firebase.storage().ref();
        const imageRef = storageRef.child(`news/${news.id}${news.extension}`);
        imageRef.delete();
      }

      commit('removeNews', news);
    }
  }
}