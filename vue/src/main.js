import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iconv from 'iconv-lite';
import md5 from 'md5';

Vue.config.productionTip = false
Vue.config.devtools = true

// 編碼轉換
Object.defineProperty(Vue.prototype, '$iconv', { value: iconv });

// MD5 雜湊
Object.defineProperty(Vue.prototype, '$md5', { value: md5 });

// Base64 編碼／解碼
Object.defineProperty(Vue.prototype, '$base64_encode', { value: function(data, charset) { return new Buffer(iconv.encode(data, charset), 'utf8').toString('base64') } });
Object.defineProperty(Vue.prototype, '$base64_decode', { value: function(data, charset) { return iconv.decode(new Buffer(data, 'base64'), charset).toString('utf8') } });

Object.defineProperty(HTMLTextAreaElement.prototype, '$copy', { value: function() {
  this.select()
  document.execCommand("copy");
  this.setSelectionRange(0, 0)
} });
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
