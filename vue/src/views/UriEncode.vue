<script>
export default {
  name: 'uri_encode',
  data () {
    return {
      title: 'URI 編碼／解碼',
      source_data: '',
      uri_data: '',
      use_function: 'encodeURI',
    }
  },
  computed: {
    output_uri_data: function() {
      return window[this.use_function](this.source_data);
    },
    output_source_data: function() {
      return window[this.use_decode_function](this.uri_data);
    },
    use_decode_function: function() {
      return {'encodeURI': 'decodeURI', 'encodeURIComponent': 'decodeURIComponent'}[this.use_function];
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

<template>
  <div class="uri_encode">
    <h1>{{ title }}</h1>
    <select name='use_function' v-model='use_function'>
      <option value="encodeURI">encodeURI</option>
      <option value="encodeURIComponent">encodeURIComponent</option>
    </select>
    <textarea type="text" name='source_data' placeholder='（輸入原始資料，編碼成 URI 字串）' autofocus v-model='source_data'></textarea>
    <textarea name='output_uri_data' title='URI 編碼字串' for='source_data' placeholder='［經過 URI 編碼的字串］' readonly v-text='output_uri_data' @mouseup='copy'></textarea>
    <textarea type="text" name='uri_data' placeholder='（輸入 URI 字串，解碼成原始資料）' v-model='uri_data'></textarea>
    <textarea name='output_source_data' title='原始資料' for='uri_data' placeholder='［經過 URI 解碼的原始資料］' readonly v-text='output_source_data' @mouseup='copy'></textarea>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

