import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase'
import './Firebase'
import Router from './Router/index'
import Store from './Store/index'
import Vuelidate from 'vuelidate'
import VueCarousel from 'vue-carousel';
import "./Filters";

Vue.use(Vuelidate)
Vue.use(VueCarousel)

Vue.config.productionTip = false

new Vue({
  router: Router,
  store: Store,
  render: h => h(App),
  created () {
    this.$store.dispatch('settlements');
    this.$store.dispatch('players');
    this.$store.dispatch('events');
    this.$store.dispatch('news');
  }
}).$mount('#app')
