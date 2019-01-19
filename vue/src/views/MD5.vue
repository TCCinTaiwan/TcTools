<template>
  <div class="md5">
    <h1>{{ title }}</h1>
    <textarea type="text" name='plaintext' placeholder='（輸入明文，轉換成 MD5 雜湊）' autofocus v-model='plaintext'></textarea>
    <textarea name='md5_hash' for='plaintext' readonly v-text='md5_hash' @mouseup='copy'></textarea>
  </div>
</template>

<script>
export default {
  name: 'md5',
  data () {
    return {
      title: 'MD5 雜湊',
      plaintext: '',
    }
  },
  computed: {
    md5_hash: function() {
      return this.$md5(this.plaintext)
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

