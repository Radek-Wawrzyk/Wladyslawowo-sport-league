import Vue from 'vue'
import App from './App.vue'
import "./firebase"
import VueFire from "vuefire"
import Router from "./router/router";

Vue.use(VueFire);

Vue.config.productionTip = false

new Vue({
  router: Router,
  render: h => h(App)
}).$mount('#app')
