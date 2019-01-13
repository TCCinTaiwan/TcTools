import Vue from 'vue'
import App from './App.vue'
import router from './router'
import md5 from 'md5';

Vue.config.productionTip = false
Vue.config.devtools = true
Object.defineProperty(Vue.prototype, '$md5', { value: md5 });
Object.defineProperty(HTMLTextAreaElement.prototype, '$copy', { value: function() {
  this.select()
  document.execCommand("copy");
  this.setSelectionRange(0, 0)
} });
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
