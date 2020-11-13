import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from '../views/index.vue'

const routes = [{
    path: '',
    redirect: "index"
  },
  {
    path: '/index',
    name: "index",
    component: Index,
    meta: {
      id: 0
    }
  }
]

const router = new VueRouter({
  routes
})

export default router