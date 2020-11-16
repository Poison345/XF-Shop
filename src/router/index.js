import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from '../views/index.vue'
import Category from '../views/catgory.vue'
import Cart from '../views/shop_cart.vue'
import Login from '../views/login.vue'

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
  },
  {
    path: '/category',
    name: 'category',
    component: Category,
    meta: {
      id: 1
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
    meta: {
      id: 2,
      isToken: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

//判断是否是存在的页面，不存在则返回主页
const isPath = (to, from, next) => {
  let isPath = routes.some(item => item.name === to.name)
  if (isPath) {
    next()
  } else {
    next(from)
  }
}

//是否需要token，没有询问是否登录
const haveToken = (to, from, next) => {
  if (to.meta.isToken) {
    let token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      Vue.prototype.$dialog.confirm({
        title: '需要登录',
        message: '是否前往登录？',
      }).then(() => {
        next('/login')
      }).catch(() => {
        next(from)
      })
    }
  }
}

router.beforeEach((to, from, next) => {
  isPath(to, from, next)
  haveToken(to, from, next)
})

export default router