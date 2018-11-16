import firebase from 'firebase'
import router from '@/Router/index'

export default {
  state: {
    user: null,
    signInError: null
  },
  getters: {
    user: state => {
      return state.user;
    },
    signInError: state => {
      return state.signInError;
    }
  },
  mutations: {
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
  },
  actions: {
    signIn: async ({commit}, user) => {
      try {
        await firebase.auth().signInWithEmailAndPassword(user.email, user.password);

        const newUser = {
          id: user.user.uid,
          email: user.user.email
        };

        commit("singIn", newUser);
        commit("clearErrors");
      } catch (error) {
        console.log(error);
        commit("signInError", error);
      }
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
  }
}