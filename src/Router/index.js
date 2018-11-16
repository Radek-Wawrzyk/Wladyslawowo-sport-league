import Vue from 'vue'
import Router from 'vue-router'
import Auth from './auth.js'

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
      children: [
      {
        path: "",
        component: () => import("@/Website/Home/Home.vue")
      },
      {
        name: "Search",
        path: "/search/:phrase",
        component: () => import("@/Website/Navigation/Searchbar/SearchResults.vue"),
        props: true
      },
      {
        path: "/players",
        component: () => import("@/Website/Players/Players.vue")
      },
      {
        name: 'SearchPlayer',
        path: "/players/:id",
        component: () => import("@/Website/Players/PlayerDetails.vue"),
        props: true
      },
      {
        path: "/settlements",
        component: () => import("@/Website/Settlements/Settlements.vue")
      },
      {
        name: 'SearchSettlement',
        path: "settlements/:id",
        component: () => import("@/Website/Settlements/SettlementDetails.vue"),
        props: true
      },
      {
        path: "/events",
        component: () => import("@/Website/Events/Events.vue")
      },
      {
        name: 'SearchEvent',
        path: "/events/:id"  ,
        component: () => import("@/Website/Events/EventDetails.vue"),
        props: true
      },
      {
        name: "News",
        path: "/news",
        component: () => import("@/Website/News/News.vue")
      },
      {
        name: 'SearchNews',
        path: "/news/:id",
        component: () => import("@/Website/News/NewsDetails.vue"),
        props: true
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
      beforeEnter: Auth,
      children: [
        {
          path: "",
          component: () => import("@/Dashboard/Home/Home.vue")
        },
        {
          name: "SearchDashboard",
          path: "search/:phrase",
          component: () => import("@/Dashboard/Search/SearchResults.vue"),
          props: true
        },
        {
          path: "players",
          component: () => import("@/Dashboard/Players/Players.vue"),
          children: [
            {
              path: "add-player",
              name: "AddPlayer",
              component: () => import("@/Dashboard/Players/Add/AddPlayer.vue")
            },
            {
              path: "update-player/:id",
              name: "UpdatePlayer",
              component: () => import("@/Dashboard/Players/Update/UpdatePlayer.vue"),
              props: { update: true}
            }
          ]
        },
        {
          path: "news",
          component: () => import("@/Dashboard/News/News.vue"),
          children: [
            {
              path: "add-news",
              name: "AddNews",
              component: () => import("@/Dashboard/News/AddNews.vue")
            },
            {
              path: 'update-news/:id',
              name: 'UpdateNews',
              component: () => import("@/Dashboard/News/AddNews.vue"),
              props: { update: true}
            }
          ]
        },
        {
          path: "events",
          component: () => import("@/Dashboard/Events/Events.vue"),
        },
        {
          path: "events/add-event",
          name: "AddEvent",
          component: () => import("@/Dashboard/Events/AddEvent.vue")
        },
        {
          path: "events/update-event/:id",
          name: "UpdateEvent",
          component: () => import("@/Dashboard/Events/AddEvent.vue"),
          props: { update: true}
        },
        {
          path: "settlements",
          component: () => import("@/Dashboard/Settlements/Settlements.vue"),
          children: [
            {
              path: "add-settlement",
              name: "AddSettlement",
              component: () => import("@/Dashboard/Settlements/Add/AddSettlement.vue"),
            },
            {
              path: "update-settlement/:id",
              name: "UpdateSettlement",
              component: () => import("@/Dashboard/Settlements/Update/UpdateSettlement.vue"),
              props: { update: true}
            }
          ]
        }
      ]
    },
    {
      path: "/sign-in",
      component: () => import ("@/Dashboard/Sign In/SignIn.vue"),
      name: "signIn"
    }
  ]
})
