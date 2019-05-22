<template>
  <div class="rsa">
    <h1>{{ title }}</h1>
    <textarea type="text" name='private_key_content' title='RSA 密鑰' placeholder='（輸入 RSA 密鑰）' autofocus v-model='private_key_content' @mouseup='update_key'></textarea>
    <textarea name='public_key' title='RSA 公鑰' for='private_key_content' readonly v-text='public_key' @mouseup='copy'></textarea>
    <textarea type="text" name='plaintext' title='明文' placeholder='（輸入明文，經過 RSA 加密）' v-model='plaintext'></textarea>
    <textarea name='rsa_encrypt' title='加密後密文' for='plaintext' readonly v-text='rsa_encrypt' @mouseup='copy'></textarea>
    <textarea type="text" name='ciphertext' title='密文' placeholder='（輸入密文，經過 RSA 解密）' v-model='ciphertext'></textarea>
    <textarea name='rsa_decrypt' title='解密後明文' for='ciphertext' readonly v-text='rsa_decrypt' @mouseup='copy'></textarea>
    <select name='default_key_bites' v-model="default_key_bites">
      <option v-for="(value, key) in default_key_bites_list" :key="key" :value="key">{{ value }}</option>
    </select><br />
    <button name='genrate_new_key' @click='new_key'>產生新 RSA 公私鑰</button>
  </div>
</template>

<script>
let default_key_bites_list = {
  '512': '512 Bits',
  '1024': '1024 Bits',
  '2048': '2048 Bits',
  '4096': '4096 Bits',
};
export default {
  name: 'rsa',
  data () {
    return {
      title: 'RSA 加密／解密',
      rsaKey: new this.$NodeRSA(),
      private_key_content: '',
      plaintext: '',
      ciphertext: '',
      default_key_bites: 512,
      default_key_bites_list: default_key_bites_list,
    }
  },
  computed: {
    public_key: function() {
      return this.rsaKey.isEmpty() ? '' : this.rsaKey.exportKey('pkcs8-public-pem');
    },
    rsa_encrypt: function() {
      return this.rsaKey.isEmpty() ? '' : this.rsaKey.encrypt(this.plaintext, 'base64');
    },
    rsa_decrypt: function() {
      return this.rsaKey.isEmpty() ? '' : this.rsaKey.decrypt(this.ciphertext, 'utf8');
    },
  },
  methods: {
    copy: function(event) {
      event.target.$copy() // 複製內容
      this.$toast.info(event.target.title, '複製', this.$notificationSystem.options.info)
    },
    update_key: function() {
      if (this.private_key_content != '') {
        this.rsaKey.importKey(this.private_key_content, 'private');
      }
    },
    new_key: function() {
      this.rsaKey = new this.$NodeRSA({b: this.default_key_bites});
      this.private_key_content = this.rsaKey.exportKey('pkcs1-private-pem');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

