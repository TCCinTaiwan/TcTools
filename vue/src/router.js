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
  ]
})
