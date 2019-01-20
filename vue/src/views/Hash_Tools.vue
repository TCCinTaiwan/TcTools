<template>
  <div class="hash_tools">
    <h1>{{ title }}</h1>
    <textarea type="text" name='plaintext' placeholder='（輸入明文，轉換成雜湊）' autofocus v-model='plaintext'></textarea>
    <textarea name='md5_digest' title='md5' for='plaintext' readonly v-text='md5_digest' @mouseup='copy'></textarea>
    <textarea name='sha1_digest' title='sha1' for='plaintext' readonly v-text='sha1_digest' @mouseup='copy'></textarea>
    <textarea name='sha224_digest' title='sha224' for='plaintext' readonly v-text='sha224_digest' @mouseup='copy'></textarea>
    <textarea name='sha256_digest' title='sha256' for='plaintext' readonly v-text='sha256_digest' @mouseup='copy'></textarea>
    <textarea name='sha384_digest' title='sha384' for='plaintext' readonly v-text='sha384_digest' @mouseup='copy'></textarea>
    <textarea name='sha512_digest' title='sha512' for='plaintext' readonly v-text='sha512_digest' @mouseup='copy'></textarea>
    <textarea name='ripemd160_digest' title='ripemd160' for='plaintext' readonly v-text='ripemd160_digest' @mouseup='copy'></textarea>
    <input type="password" name='password' placeholder='（輸入密碼，加密雜湊）' autofocus v-model='password'>
    <textarea name='md5_hmac_digest' title='md5' for='plaintext' readonly v-text='md5_hmac_digest' @mouseup='copy'></textarea>
    <textarea name='sha1_hmac_digest' title='sha1' for='plaintext' readonly v-text='sha1_hmac_digest' @mouseup='copy'></textarea>
    <textarea name='sha224_hmac_digest' title='sha224' for='plaintext' readonly v-text='sha224_hmac_digest' @mouseup='copy'></textarea>
    <textarea name='sha256_hmac_digest' title='sha256' for='plaintext' readonly v-text='sha256_hmac_digest' @mouseup='copy'></textarea>
    <textarea name='sha384_hmac_digest' title='sha384' for='plaintext' readonly v-text='sha384_hmac_digest' @mouseup='copy'></textarea>
    <textarea name='sha512_hmac_digest' title='sha512' for='plaintext' readonly v-text='sha512_hmac_digest' @mouseup='copy'></textarea>
    <textarea name='ripemd160_hmac_digest' title='ripemd160' for='plaintext' readonly v-text='ripemd160_hmac_digest' @mouseup='copy'></textarea>
  </div>
</template>

<script>
export default {
  name: 'hash_tools',
  data () {
    return {
      title: '雜湊',
      plaintext: '',
      password: '',
    }
  },
  computed: {
    md5_digest: function() {
      return this.$md5(this.plaintext)
    },
    md5_hmac_digest: function() {
      return this.$md5_hmac(this.plaintext, this.password)
    },
    sha1_digest: function() {
      return this.$sha1(this.plaintext)
    },
    sha1_hmac_digest: function() {
      return this.$sha1_hmac(this.plaintext, this.password)
    },
    sha224_digest: function() {
      return this.$sha224(this.plaintext)
    },
    sha224_hmac_digest: function() {
      return this.$sha224_hmac(this.plaintext, this.password)
    },
    sha256_digest: function() {
      return this.$sha256(this.plaintext)
    },
    sha256_hmac_digest: function() {
      return this.$sha256_hmac(this.plaintext, this.password)
    },
    sha384_digest: function() {
      return this.$sha384(this.plaintext)
    },
    sha384_hmac_digest: function() {
      return this.$sha384_hmac(this.plaintext, this.password)
    },
    sha512_digest: function() {
      return this.$sha512(this.plaintext)
    },
    sha512_hmac_digest: function() {
      return this.$sha512_hmac(this.plaintext, this.password)
    },
    ripemd160_digest: function() {
      return this.$ripemd160(this.plaintext)
    },
    ripemd160_hmac_digest: function() {
      return this.$ripemd160_hmac(this.plaintext, this.password)
    },
  },
  methods: {
    copy: function(event) {
      event.target.$copy() // 複製內容
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

