import Vue from 'vue'
import App from './App.vue'
import "./firebase"
import VueFire from "vuefire"
import Router from "./Router/";
import Store from "./store/";

Vue.use(VueFire);

Vue.config.productionTip = false

new Vue({
  router: Router,
  store: Store,
  render: h => h(App)
}).$mount('#app')
