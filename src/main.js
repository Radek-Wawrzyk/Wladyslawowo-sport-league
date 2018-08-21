import Vue from 'vue'
import App from './App.vue'
import "./Firebase"
import VueFire from "vuefire"
import Router from "./Router/index";
import Store from "./Store/index";
import Vuelidate from 'vuelidate'

Vue.use(VueFire);
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router: Router,
  store: Store,
  render: h => h(App),
  created () {
    this.$store.dispatch('settlements')
  }
}).$mount('#app')
