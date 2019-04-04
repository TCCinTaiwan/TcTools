<script>
export default {
  name: 'j2qs',
  data () {
    return {
      title: 'JSON 轉 QueryString',
      json: '',
      query_string: '',
      ignore_empty_key: true,
      ignore_empty_value: true,
      ignore_null_value: true,
      duplicate_key: 'array', // array, last, first
      default_value: 0, // 0: null, 1: '', 2: false, 3: undefined
      auto_default_int: false,
    }
  },
  computed: {
    cvt_to_query_string: function() {
      var ignore_empty_key = this.ignore_empty_key;
      var ignore_empty_value = this.ignore_empty_value;
      var ignore_null_value = this.ignore_null_value;
      var duplicate_key = this.duplicate_key;

      if (!this.IsJsonString(this.json)) {
        return '';
      } else {
        var obj = JSON.parse(this.json);
        return Object.keys(obj).filter(
          key => !ignore_empty_key || !(key === '') // 忽略索引為空字串
        ).filter(
          key => !ignore_empty_value || !(obj[key] === '') // 忽略值為空字串
        ).filter(
          key => !ignore_null_value || !(obj[key] === null) // 忽略值為空
        ).map(function(key) {
          if (typeof(obj[key]) !== 'object') {
            return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
          } else {
            if (duplicate_key === 'array') {
              console.log(obj[key]);
              return obj[key].map(value => encodeURIComponent(key) + '=' + encodeURIComponent(value)).join('&'); // 陣列轉換成重複的索引
            } else {
              return obj[key].pop();
            }
          }
        }).join('&');
      }
    },
    cvt_to_json: function() {
      var default_value = [null, '', false, undefined][this.default_value];
      var auto_default_int = this.auto_default_int;
      var ignore_empty_key = this.ignore_empty_key;
      var ignore_empty_value = this.ignore_empty_value;
      var ignore_null_value = this.ignore_null_value;
      var duplicate_key = this.duplicate_key;
      var output_obj = {};
      
      this.query_string.split('&').forEach(function(item) { // 以第一個 = 切開字串
        var split_index = item.search('=');

        var key = item;
        var value = default_value;

        if (split_index !== -1) {
            key = item.substr(0, split_index);
            value = item.substr(split_index + 1);
        }

        key = decodeURIComponent(key);
        value = decodeURIComponent(value);

        if (ignore_empty_key && key === '') return;
        if (ignore_empty_value && value === '') return;
        if (ignore_null_value && value === null) return;

        if (auto_default_int && !isNaN(value) && !value.match(/^0(x|o|b)/)) {
          value = Number(value);
        }

        if (duplicate_key === 'last' || output_obj[key] === undefined) {
          output_obj[key] = value;
        } else if (duplicate_key === 'array') {
          if (typeof(output_obj[key]) === 'object') {
            output_obj[key].push(value);
          } else {
            output_obj[key] = [output_obj[key], value];
          }
        }
      });

      return JSON.stringify(output_obj);
    },
  },
  methods: {
    copy: function(event) {
      event.target.$copy() // 複製內容
      this.$toast.info(event.target.title, '複製', this.$notificationSystem.options.info)
    },
    IsJsonString: function(str) {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }
      return true;
    },
  }
}
</script>

<template>
  <div class="j2qs">
    <h1>{{ title }}</h1>
    <label for="checkbox">忽略索引為空字串：</label><br />
    <input type="checkbox" id="ignore_empty_key" v-model="ignore_empty_key"><br />
    <label for="checkbox">忽略值為空字串：</label><br />
    <input type="checkbox" id="ignore_empty_value" v-model="ignore_empty_value"><br />
    <label for="checkbox">忽略值為空：</label><br />
    <input type="checkbox" id="ignore_null_value" v-model="ignore_null_value"><br />
    <label for="checkbox">重複索引：</label><br />
    <select id="duplicate_key" v-model="duplicate_key">
      <option selected value='array'>陣列</option>
      <option value='last'>末項</option>
      <option value='first'>首項</option>
    </select><br />
    <textarea type="text" name='json' placeholder='（輸入 JSON 字串）' v-model='json'></textarea>
    <textarea name='cvt_to_query_string' title='QueryString 字串' for='json' readonly v-text='cvt_to_query_string' @mouseup='copy'></textarea>
    <textarea type="text" name='query_string' placeholder='（輸入 QueryString 字串）' v-model='query_string'></textarea>
    <textarea name='cvt_to_json' title='JSON 字串' for='query_string' readonly v-text='cvt_to_json' @mouseup='copy'></textarea><br />
    <label for="checkbox">預設值：</label><br />
    <select id="default_value" v-model="default_value">
      <option selected value='0'>Null</option>
      <option value='1'>空字串</option>
      <option value='2'>False</option>
      <option value='3'>未定義</option>
    </select><br />
    <label for="checkbox">自動轉換成數字型態：</label><br />
    <input type="checkbox" id="auto_default_int" v-model="auto_default_int"><br />
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

