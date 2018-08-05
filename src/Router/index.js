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
      component: () => import("@/Dashboard/Dashboard.vue"),
      children: [
        {
          path: "",
          component: () => import("@/Dashboard/Home/Home.vue")
        },
        {
          path: "players",
          component: () => import("@/Dashboard/Players/Players.vue"),
          children: [
            {
              path: "add-player",
              name: "AddPlayer",
              component: () => import("@/Dashboard/Players/Add player/AddPlayer.vue")
            }
          ]
        },
        {
          path: "events",
          component: () => import("@/Dashboard/Events/Events.vue")
        },
        {
          path: "settlements",
          component: () => import("@/Dashboard/Settlements/Settlements.vue")
        }
      ]
    }
  ]
})
