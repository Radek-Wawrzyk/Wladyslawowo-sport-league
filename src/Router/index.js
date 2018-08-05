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
        path: "/contestants",
        component: () => import("@/Website/Contestants/Contestants.vue")
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
          path: "users",
          component: () => import("@/Dashboard/Users/Users.vue")
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
