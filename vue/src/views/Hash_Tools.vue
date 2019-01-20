<template>
  <div class="hash_tools">
    <h1>{{ title }}</h1>
    <textarea type="text" name='plaintext' placeholder='（輸入明文，轉換成雜湊）' autofocus v-model='plaintext'></textarea>
    <textarea name='md5_digest' title='MD5' for='plaintext' readonly v-text='md5_digest' @mouseup='copy'></textarea>
    <textarea name='sha1_digest' title='SHA-1' for='plaintext' readonly v-text='sha1_digest' @mouseup='copy'></textarea>
    <textarea name='sha224_digest' title='SHA-224' for='plaintext' readonly v-text='sha224_digest' @mouseup='copy'></textarea>
    <textarea name='sha256_digest' title='SHA-256' for='plaintext' readonly v-text='sha256_digest' @mouseup='copy'></textarea>
    <textarea name='sha384_digest' title='SHA-384' for='plaintext' readonly v-text='sha384_digest' @mouseup='copy'></textarea>
    <textarea name='sha512_digest' title='SHA-512' for='plaintext' readonly v-text='sha512_digest' @mouseup='copy'></textarea>
    <textarea name='ripemd160_digest' title='RIPEMD-160' for='plaintext' readonly v-text='ripemd160_digest' @mouseup='copy'></textarea>
    <input type="password" name='key' placeholder='（輸入密碼，加密雜湊）' autofocus v-model='key'>
    <textarea name='hmac_md5_digest' title='HMAC MD5' for='plaintext' readonly v-text='hmac_md5_digest' @mouseup='copy'></textarea>
    <textarea name='hmac_sha1_digest' title='HMAC SHA-1' for='plaintext' readonly v-text='hmac_sha1_digest' @mouseup='copy'></textarea>
    <textarea name='hmac_sha224_digest' title='HMAC SHA-224' for='plaintext' readonly v-text='hmac_sha224_digest' @mouseup='copy'></textarea>
    <textarea name='hmac_sha256_digest' title='HMAC SHA-256' for='plaintext' readonly v-text='hmac_sha256_digest' @mouseup='copy'></textarea>
    <textarea name='hmac_sha384_digest' title='HMAC SHA-384' for='plaintext' readonly v-text='hmac_sha384_digest' @mouseup='copy'></textarea>
    <textarea name='hmac_sha512_digest' title='HMAC SHA-512' for='plaintext' readonly v-text='hmac_sha512_digest' @mouseup='copy'></textarea>
    <textarea name='hmac_ripemd160_digest' title='HMAC RIPEMD-160' for='plaintext' readonly v-text='hmac_ripemd160_digest' @mouseup='copy'></textarea>
  </div>
</template>

<script>
export default {
  name: 'hash_tools',
  data () {
    return {
      title: '雜湊',
      plaintext: '',
      key: '',
    }
  },
  computed: {
    md5_digest: function() {
      return this.$md5(this.plaintext)
    },
    hmac_md5_digest: function() {
      return this.$md5_hmac(this.plaintext, this.key)
    },
    sha1_digest: function() {
      return this.$sha1(this.plaintext)
    },
    hmac_sha1_digest: function() {
      return this.$sha1_hmac(this.plaintext, this.key)
    },
    sha224_digest: function() {
      return this.$sha224(this.plaintext)
    },
    hmac_sha224_digest: function() {
      return this.$sha224_hmac(this.plaintext, this.key)
    },
    sha256_digest: function() {
      return this.$sha256(this.plaintext)
    },
    hmac_sha256_digest: function() {
      return this.$sha256_hmac(this.plaintext, this.key)
    },
    sha384_digest: function() {
      return this.$sha384(this.plaintext)
    },
    hmac_sha384_digest: function() {
      return this.$sha384_hmac(this.plaintext, this.key)
    },
    sha512_digest: function() {
      return this.$sha512(this.plaintext)
    },
    hmac_sha512_digest: function() {
      return this.$sha512_hmac(this.plaintext, this.key)
    },
    ripemd160_digest: function() {
      return this.$ripemd160(this.plaintext)
    },
    hmac_ripemd160_digest: function() {
      return this.$ripemd160_hmac(this.plaintext, this.key)
    },
  },
  methods: {
    copy: function(event) {
      event.target.$copy() // 複製內容
      this.$toast.info(event.target.title, '複製', this.$notificationSystem.options.info)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

