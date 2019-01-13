<template>
  <div class="md5">
    <h1>{{ title }}</h1>
    <textarea type="text" name='plaintext' placeholder='輸入明文，轉換成 MD5' autofocus v-model='plaintext'></textarea>
    <br/><textarea name='md5_hash' for='plaintext' v-text='md5_hash' @mouseup='copy' readonly></textarea>
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
      return this.$md5(this.plaintext) // 即時產生 MD5 雜湊
    }
  },
  methods: {
    copy: function(event) {
      event.target.$copy() // 複製內容
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
textarea {
  width: 50%;
  height: 50%;
  max-width: 100%;
  min-width: 20px;
  min-height: 20px;
}
textarea[name=md5_hash] {
  background: rgb(220, 220, 220);
}
</style>

