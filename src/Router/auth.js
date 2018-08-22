import store from '@/Store/index.js'

export default  (to, from, next) => {
  if (store.state.user) {
    next();
  } else {
    next('/sign-in');
  }
}