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
      path: '/',
      name: 'Default',
      component: () => import("@/Website/Website.vue"),
      children: [{
        path: "",
        component: () => import("@/Website/Home/Home.vue")
      },
      {
        path: "/players",
        component: () => import("@/Website/Players/Players.vue")
      },
      {
        path: "/settlements",
        component: () => import("@/Website/Settlements/Settlements.vue")
      },
      {
        path: "/events",
        component: () => import("@/Website/Events/Events.vue")
      },
      {
        path: "/event/:id"  ,
        component: () => import("@/Website/Events/EventDetails.vue")
      },
      {
        path: "/help",
        component: () => import("@/Website/Help/Help.vue")
      },
      {
        path: "/contact",
        component: () => import("@/Website/Contact/Contact.vue")
      }
    ]
    },
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
