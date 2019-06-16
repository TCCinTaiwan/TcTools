import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hash_tools',
      name: 'hash_tools',
      component: () => import(/* webpackChunkName: "hash_tools" */ './views/Hash_Tools.vue')
    },
    {
      path: '/base64',
      name: 'base64',
      component: () => import(/* webpackChunkName: "base64" */ './views/Base64.vue')
    },
    {
      path: '/uri_encode',
      name: 'uri_encode',
      component: () => import(/* webpackChunkName: "uri_encode" */ './views/UriEncode.vue')
    },
    {
      path: '/rsa',
      name: 'rsa',
      component: () => import(/* webpackChunkName: "rsa" */ './views/RSA.vue')
    },
    {
      path: '/json_to_query_string',
      name: 'json_to_query_string',
      component: () => import(/* webpackChunkName: "json_to_query_string" */ './views/Json2QueryString.vue')
    },
    {
      path: '/chunk_split',
      name: 'chunk_split',
      component: () => import(/* webpackChunkName: "chunk_split" */ './views/ChunkSplit.vue')
    },
  ]
})
