import Vue from 'vue'
import App from './App.vue'
// TODO Configure Firebase
//import "./Firebase"
import VueFire from "vuefire"
import Router from "./Router/index";
import Store from "./Store/index";

// TODO Configure Firebase
//Vue.use(VueFire);

Vue.config.productionTip = false

new Vue({
  router: Router,
  store: Store,
  render: h => h(App)
}).$mount('#app')
