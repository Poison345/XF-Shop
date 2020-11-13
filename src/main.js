import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store';
import 'lib-flexible'
import './style/base.less'
import http from './js/http'

Vue.use(http)


import {
  Icon,
  Swipe,
  SwipeItem,
  Lazyload
} from 'vant';

Vue.use(Icon);
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)

const List = () => import('./components/good_list.vue')
const Bar = () => import('./components/xf_bar.vue')
Vue.component('goods-list', List)
Vue.component('xf-bar', Bar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')