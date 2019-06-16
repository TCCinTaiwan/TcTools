<script>
export default {
  name: 'chunk_split',
  data () {
    return {
      title: '切割字串',
      source_data: '',
      chunk_split_data: '',
      chunk_length: 64,
    }
  },
  computed: {
    output_chunk_split_data: function() {
      return this.$chunk_split(this.source_data, this.chunk_length);
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
  <div class="chunk_split">
    <h1>{{ title }}</h1>
    <textarea type="text" name='source_data' placeholder='（輸入原始資料，依照長度切割字串）' autofocus v-model='source_data'></textarea><br />
    <label for="checkbox">依照每 N 字元切割字串：</label><br />
    <input type="number" id="chunk_length" v-model="chunk_length"><br />
    <textarea name='output_chunk_split_data' title='切割後字串' for='source_data' placeholder='［經過切割的字串］' readonly v-text='output_chunk_split_data' @mouseup='copy'></textarea>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

