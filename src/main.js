import Vue from 'vue'
import App from './App.vue'
import "./Firebase"
import VueFire from "vuefire"
<<<<<<< HEAD
import Router from "./Router/router";
=======
import Router from "./Router/";
import Store from "./Store/";
>>>>>>> dd7aff432d5848a2129ff9b83cd4bf60169a9607

Vue.use(VueFire);

Vue.config.productionTip = false

new Vue({
  router: Router,
  store: Store,
  render: h => h(App)
}).$mount('#app')
