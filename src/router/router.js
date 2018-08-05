import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: "/panel/",
      name: "Home",
      component: () => import("@/dashboard/dashboard.vue"),
      children: [
        {
          path: "users",
          component: () => import("@/dashboard/Users/Users.vue")
        }
      ]
    }
  ]
})
