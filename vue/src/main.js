import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iconv from 'iconv-lite';
import crypto from 'crypto';

Vue.config.productionTip = false
Vue.config.devtools = true

// 編碼轉換
Object.defineProperty(Vue.prototype, '$iconv', { value: iconv });

// 雜湊
Object.defineProperty(Vue.prototype, '$md5', { value: (message) => { return crypto.createHash('md5').update(message, 'utf8').digest('hex') } });
Object.defineProperty(Vue.prototype, '$md5_hmac', { value: (message, secret) => { return crypto.createHmac('md5', secret).update(message, 'utf8').digest('hex') } });

Object.defineProperty(Vue.prototype, '$sha1', { value: (message) => { return crypto.createHash('sha1').update(message, 'utf8').digest('hex') } });
Object.defineProperty(Vue.prototype, '$sha1_hmac', { value: (message, secret) => { return crypto.createHmac('sha1', secret).update(message, 'utf8').digest('hex') } });

Object.defineProperty(Vue.prototype, '$sha224', { value: (message) => { return crypto.createHash('sha224').update(message, 'utf8').digest('hex') } });
Object.defineProperty(Vue.prototype, '$sha224_hmac', { value: (message, secret) => { return crypto.createHmac('sha224', secret).update(message, 'utf8').digest('hex') } });

Object.defineProperty(Vue.prototype, '$sha256', { value: (message) => { return crypto.createHash('sha256').update(message, 'utf8').digest('hex') } });
Object.defineProperty(Vue.prototype, '$sha256_hmac', { value: (message, secret) => { return crypto.createHmac('sha256', secret).update(message, 'utf8').digest('hex') } });

Object.defineProperty(Vue.prototype, '$sha384', { value: (message) => { return crypto.createHash('sha384').update(message, 'utf8').digest('hex') } });
Object.defineProperty(Vue.prototype, '$sha384_hmac', { value: (message, secret) => { return crypto.createHmac('sha384', secret).update(message, 'utf8').digest('hex') } });

Object.defineProperty(Vue.prototype, '$sha512', { value: (message) => { return crypto.createHash('sha512').update(message, 'utf8').digest('hex') } });
Object.defineProperty(Vue.prototype, '$sha512_hmac', { value: (message, secret) => { return crypto.createHmac('sha512', secret).update(message, 'utf8').digest('hex') } });

Object.defineProperty(Vue.prototype, '$ripemd160', { value: (message) => { return crypto.createHash('ripemd160').update(message, 'utf8').digest('hex') } });
Object.defineProperty(Vue.prototype, '$ripemd160_hmac', { value: (message, secret) => { return crypto.createHmac('ripemd160', secret).update(message, 'utf8').digest('hex') } });

// Base64 編碼／解碼
Object.defineProperty(Vue.prototype, '$base64_encode', { value: function(data, charset) { return new Buffer(iconv.encode(data, charset), 'utf8').toString('base64') } });
Object.defineProperty(Vue.prototype, '$base64_decode', { value: function(data, charset) { return iconv.decode(new Buffer(data, 'base64'), charset).toString('utf8') } });

Object.defineProperty(HTMLTextAreaElement.prototype, '$copy', 
  {
    value: function() {
      this.select();
      document.execCommand("copy");
      this.setSelectionRange(0, 0);
    }
  }
);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
