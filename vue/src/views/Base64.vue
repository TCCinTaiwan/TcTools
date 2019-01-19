<template>
  <div class="base64">
    <h1>{{ title }}</h1>
    <select name='charset' v-model="charset">
      <option v-for="(value, key) in charset_list" :key="key" :value="key">{{ value }}</option>
    </select>
    <textarea type="text" name='source_data' placeholder='（輸入原始資料，編碼成 Base64 字串）' autofocus v-model='source_data'></textarea>
    <textarea name='output_base64_data' for='source_data' placeholder='［經過 Base64 編碼的字串］' readonly v-text='output_base64_data' @mouseup='copy'></textarea>
    <textarea type="text" name='base64_data' placeholder='（輸入 Base64 字串，解碼成原始資料）' v-model='base64_data'></textarea>
    <textarea name='output_source_data' for='base64_data' placeholder='［經過 Base64 解碼的原始資料］' readonly v-text='output_source_data' @mouseup='copy'></textarea>
  </div>
</template>

<script>
var charset_list = {
  'utf8': 'UTF-8',
  'gb2312': 'GB2312',
  'gbk': 'GBK',
  'gb18030': 'GB18030',
  'big5': 'Big5',
};
export default {
  name: 'base64',
  data () {
    return {
      title: 'Base64 編碼／解碼',
      source_data: '',
      base64_data: '',
      charset: (this.$route.query.charset || '') in charset_list ? this.$route.query.charset : 'utf8',
      charset_list: charset_list,
    }
  },
  computed: {
    output_base64_data: function() {
      return this.$base64_encode(this.source_data, this.charset);
    },
    output_source_data: function() {
      return this.$base64_decode(this.base64_data, this.charset);
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

