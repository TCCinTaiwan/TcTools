(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uri_encode"],{"364a":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"uri_encode"},[o("h1",[e._v(e._s(e.title))]),o("select",{directives:[{name:"model",rawName:"v-model",value:e.use_function,expression:"use_function"}],attrs:{name:"use_function"},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.use_function=t.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"encodeURI"}},[e._v("encodeURI")]),o("option",{attrs:{value:"encodeURIComponent"}},[e._v("encodeURIComponent")])]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.source_data,expression:"source_data"}],attrs:{type:"text",name:"source_data",placeholder:"（輸入原始資料，編碼成 URI 字串）",autofocus:""},domProps:{value:e.source_data},on:{input:function(t){t.target.composing||(e.source_data=t.target.value)}}}),o("textarea",{attrs:{name:"output_uri_data",title:"URI 編碼字串",for:"source_data",placeholder:"［經過 URI 編碼的字串］",readonly:""},domProps:{textContent:e._s(e.output_uri_data)},on:{mouseup:e.copy}}),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.uri_data,expression:"uri_data"}],attrs:{type:"text",name:"uri_data",placeholder:"（輸入 URI 字串，解碼成原始資料）"},domProps:{value:e.uri_data},on:{input:function(t){t.target.composing||(e.uri_data=t.target.value)}}}),o("textarea",{attrs:{name:"output_source_data",title:"原始資料",for:"uri_data",placeholder:"［經過 URI 解碼的原始資料］",readonly:""},domProps:{textContent:e._s(e.output_source_data)},on:{mouseup:e.copy}})])},n=[],u={name:"uri_encode",data:function(){return{title:"URI 編碼／解碼",source_data:"",uri_data:"",use_function:"encodeURI"}},computed:{output_uri_data:function(){return window[this.use_function](this.source_data)},output_source_data:function(){return window[this.use_decode_function](this.uri_data)},use_decode_function:function(){return{encodeURI:"decodeURI",encodeURIComponent:"decodeURIComponent"}[this.use_function]}},methods:{copy:function(e){e.target.$copy(),this.$toast.info(e.target.title,"複製",this.$notificationSystem.options.info)}}},r=u,i=o("2877"),c=Object(i["a"])(r,a,n,!1,null,"515e3e39",null);c.options.__file="UriEncode.vue";t["default"]=c.exports}}]);
//# sourceMappingURL=uri_encode.4b9064bb.js.map