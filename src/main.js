import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store';
import 'lib-flexible'
import './style/base.less'

//axios二次封装
import http from './js/http'
Vue.use(http)


import {
  Icon,
  Swipe,
  SwipeItem,
  Lazyload,
  Sidebar,
  SidebarItem,
  Sticky,
  Divider,
  Dialog,
  Form,
  Field,
  Button,
  Toast
} from 'vant';

Vue.use(Icon);
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Sidebar)
Vue.use(SidebarItem)
Vue.use(Sticky)
Vue.use(Divider)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(Field)
Vue.use(Button)
Vue.use(Toast)

//区域滚动插件
import {
  HappyScroll
} from 'vue-happy-scroll'
Vue.component('happy-scroll', HappyScroll)
import 'vue-happy-scroll/docs/happy-scroll.css'

//引入组件
const List = () => import('./components/goods_list.vue')
const Bar = () => import('./components/xf_bar.vue')
const Category = () => import('./components/xf_category_body.vue')
const Header = () => import('./components/xf_header.vue')

Vue.component('goods-list', List)
Vue.component('xf-bar', Bar)
Vue.component('xf-category', Category)
Vue.component('xf-header', Header)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')