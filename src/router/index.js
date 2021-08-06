import Vue from "vue"
import VueRouter from "vue-router"

import store from "../store"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/views/index.vue"),
  },
  {
    path: "/citys",
    name: "citys",
    component: () => import("@/views/citys.vue"),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach(async (from, to, next) => {
  next()
})

export default router
