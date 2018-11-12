import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase'
import './Firebase'
import Router from './Router/index'
import Store from './Store/index'
import Vuelidate from 'vuelidate'
import VueCarousel from 'vue-carousel';
import "./Filters";
import Lightbox from 'vue-pure-lightbox'
import Footer from "@/Website/Footer/Footer.vue"
import Alert from "@/Dashboard/Alert/Alert.vue"

//Initial Vue libraries
Vue.use(Vuelidate)
Vue.use(VueCarousel)
Vue.use(Lightbox)

//Global components
Vue.component("Footer", Footer);
Vue.component("Alert", Alert);

Vue.config.productionTip = false

new Vue({
  router: Router,
  store: Store,
  render: h => h(App),
  created () {
    this.$store.dispatch('settlements');
    this.$store.dispatch('news');
    this.$store.dispatch('players');
    this.$store.dispatch('events');
  }
}).$mount('#app')
