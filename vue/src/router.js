import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/md5',
      name: 'md5',
      component: () => import(/* webpackChunkName: "md5" */ './views/MD5.vue')
    },
    {
      path: '/base64',
      name: 'base64',
      component: () => import(/* webpackChunkName: "base64" */ './views/Base64.vue')
    },
  ]
})
