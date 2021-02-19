((typeof self !== 'undefined' ? self : this)["webpackJsonpDocGen"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpDocGen"] || []).push([[5],{

/***/ "3576":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_JsonSchema_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7a87");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_JsonSchema_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_JsonSchema_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "35d5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_JsonSchema_vue_vue_type_style_index_1_id_04cd24c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9791");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_JsonSchema_vue_vue_type_style_index_1_id_04cd24c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_JsonSchema_vue_vue_type_style_index_1_id_04cd24c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6e45":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7b654269-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@openeo/vue-components/components/JsonSchema.vue?vue&type=template&id=04cd24c6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.showSchema)?_c('div',{staticClass:"vue-component json-schema"},[(_vm.visible)?[(_vm.isProcessGraph)?_c('div',{staticClass:"schemaProcessGraph"},[_c('div',{staticClass:"process-graph-parameters"},[_c('p',{staticClass:"schema-attrs"},[_vm._v(_vm._s(_vm.formatKey('type'))+": "),_c('span',{staticClass:"data-type"},[_vm._v("child process")])]),_vm._m(0),(_vm.hasParameters)?_vm._l((_vm.schema.parameters),function(param,i){return _c('ProcessParameter',{key:i,attrs:{"parameter":param,"processUrl":_vm.processUrl}})}):_c('p',[_vm._v("No parameters defined.")]),_vm._m(1),(_vm.hasReturns)?[(_vm.schema.returns.description)?_c('Description',{attrs:{"description":_vm.schema.returns.description,"processUrl":_vm.processUrl}}):_vm._e(),(_vm.schema.returns.schema)?_c('div',{staticClass:"json-schema-container"},[_c('openeo-json-schema',{attrs:{"schema":_vm.schema.returns.schema}})],1):_vm._e()]:_c('p',[_vm._v("No constraints defined.")])],2)]):(_vm.showRow('object'))?_c('div',{staticClass:"schemaObjectElement"},[_c('div',{staticClass:"inline-schema-attrs"},[(_vm.filteredObjectSchema !== null)?_c('openeo-json-schema',{attrs:{"schema":_vm.filteredObjectSchema,"nestingLevel":_vm.nestingLevel+1}}):_vm._e(),_c('table',{staticClass:"object-properties"},[_vm._m(2),_vm._l((_vm.schema.properties),function(val,key){return _c('tr',{key:key},[_c('td',{staticClass:"propKey"},[_vm._v(" "+_vm._s(key)+" "),(_vm.schema.required && _vm.schema.required.indexOf(key) !== -1)?_c('strong',{staticClass:"required",attrs:{"title":"required"}},[_vm._v("*")]):_vm._e()]),_c('td',{staticClass:"value"},[_c('openeo-json-schema',{attrs:{"schema":val,"nestingLevel":_vm.nestingLevel+1,"processUrl":_vm.processUrl}})],1)])})],2)],1)]):_c('table',{staticClass:"schema-attrs"},[(typeof _vm.schema.title == 'string')?_c('tr',[_c('td',{attrs:{"colspan":"2"}},[_c('strong',[_vm._v(_vm._s(_vm.schema.title))])])]):_vm._e(),(typeof _vm.schema.description == 'string')?_c('tr',[_c('td',{attrs:{"colspan":"2"}},[_c('Description',{attrs:{"description":_vm.schema.description,"compact":true}})],1)]):_vm._e(),(_vm.showAnyType)?_c('tr',[_c('td',{staticClass:"key"},[_vm._v(_vm._s(_vm.formatKey('type'))+":")]),_c('td',{staticClass:"value data-type"},[_vm._v("any")])]):(_vm.isCompositeType)?[_vm._m(3),_c('tr',[_c('td',{staticClass:"schema-container data-types-container",attrs:{"colspan":"2"}},_vm._l((_vm.compositeTypes),function(v,k){return _c('openeo-json-schema',{key:k,attrs:{"schema":v,"nestingLevel":_vm.nestingLevel+1,"processUrl":_vm.processUrl}})}),1)])]:_vm._e(),(!Array.isArray(this.schema))?_vm._l((_vm.schema),function(val,key){return _c('tr',{key:key},[(_vm.showRow(key))?[_c('td',{staticClass:"key"},[_vm._v(_vm._s(_vm.formatKey(key))+":")]),_c('td',{staticClass:"value"},[(key == 'type')?_c('span',{staticClass:"data-type"},[_vm._v(_vm._s(_vm.formatType()))]):(key == 'allOf' && Array.isArray(val))?_c('div',{staticClass:"schema-container"},_vm._l((val),function(v,k){return _c('openeo-json-schema',{key:k,attrs:{"schema":v,"nestingLevel":_vm.nestingLevel+1,"processUrl":_vm.processUrl}})}),1):(key != 'default' && key != 'examples' && val === true)?_c('span',{attrs:{"title":"true"}},[_vm._v("✓ Yes")]):(key != 'default' && key != 'examples' && val === false)?_c('span',{attrs:{"title":"false"}},[_vm._v("✕ No")]):(key != 'examples' && Array.isArray(val))?_c('ul',{staticClass:"comma-separated-list"},_vm._l((val),function(v,k){return _c('li',{key:k},[_vm._v(_vm._s(v))])}),0):(key == 'examples' && Array.isArray(val) && val.length > 1)?_c('ul',_vm._l((val),function(v,k){return _c('li',{key:k},[_c('code',[_vm._v(_vm._s(v))])])}),0):(key == 'examples' && Array.isArray(val) && val.length === 1)?_c('code',[_vm._v(_vm._s(val[0]))]):(key == 'description')?_c('Description',{attrs:{"description":val,"compact":true}}):(key == 'default' && val === '')?_c('em',[_vm._v("Empty string")]):(key == 'default' && (typeof val === 'object' || typeof val === 'boolean'))?_c('code',[_vm._v(_vm._s(JSON.stringify(val)))]):(key == 'pattern')?_c('code',[_vm._v(_vm._s(val))]):(typeof val === 'object')?_c('openeo-json-schema',{attrs:{"schema":val,"initShown":_vm.nestingLevel < 3,"nestingLevel":_vm.nestingLevel+1,"processUrl":_vm.processUrl}}):_c('span',[_vm._v(_vm._s(val))])],1)]:_vm._e()],2)}):_vm._e()],2)]:_c('div',{staticClass:"schema-expand"},[_c('a',{on:{"click":function($event){return _vm.show()}}},[_vm._v("> ...")])])],2):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{staticClass:"schema-attrs",attrs:{"title":"The parameters that can be used in the process."}},[_c('strong',[_vm._v("Child Process Parameters:")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{staticClass:"schema-attrs",attrs:{"title":"Describes what must be returned by the process."}},[_c('strong',[_vm._v("Child Process Return Value:")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('th',{staticClass:"object-prop-heading",attrs:{"colspan":"2"}},[_vm._v("Object Properties:")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('th',{staticClass:"data-types-heading",attrs:{"colspan":"2"}},[_vm._v("Data Types:")])])}]


// CONCATENATED MODULE: ./node_modules/@openeo/vue-components/components/JsonSchema.vue?vue&type=template&id=04cd24c6&scoped=true&

// EXTERNAL MODULE: ./node_modules/@openeo/vue-components/utils.js + 10 modules
var utils = __webpack_require__("60a2");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@openeo/vue-components/components/JsonSchema.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var JsonSchemavue_type_script_lang_js_ = ({
  name: 'JsonSchema',
  components: {
    Description: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "8088")),
    // Workaround for issue https://github.com/vuejs/vue-cli/issues/6225
    'openeo-json-schema': () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "6e45"))
  },
  props: {
    schema: {
      type: [Object, Array],
      default: () => ({})
    },
    initShown: {
      type: Boolean,
      default: true
    },
    nestingLevel: {
      type: Number,
      default: 1
    },
    processUrl: String
  },

  data() {
    return {
      visible: this.initShown,
      filteredObjectSchema: null
    };
  },

  beforeCreate() {
    utils["a" /* default */].enableHtmlProps(this); // See https://vuejs.org/v2/guide/components-edge-cases.html#Circular-References-Between-Components

    this.$options.components.ProcessParameter = __webpack_require__("81dd").default;
  },

  computed: {
    showSchema() {
      return typeof this.schema === 'object' && this.schema !== null && this.nestingLevel < 20;
    },

    showAnyType() {
      return utils["a" /* default */].isAnyType(this.schema);
    },

    isProcessGraph() {
      return this.schema.type === 'object' && this.schema.subtype === 'process-graph';
    },

    isCompositeType() {
      return Array.isArray(this.schema) || Array.isArray(this.schema.anyOf) || Array.isArray(this.schema.oneOf);
    },

    compositeTypes() {
      if (Array.isArray(this.schema)) {
        return this.schema;
      } else if (Array.isArray(this.schema.anyOf)) {
        return this.schema.anyOf;
      } else if (Array.isArray(this.schema.oneOf)) {
        return this.schema.oneOf;
      }

      return [this.schema];
    },

    hasReturns() {
      return this.isProcessGraph && utils["a" /* default */].isObject(this.schema.returns);
    },

    hasParameters() {
      return this.isProcessGraph && Array.isArray(this.schema.parameters) && this.schema.parameters.length > 0;
    }

  },
  watch: {
    initShown(newVal) {
      this.visible = newVal;
    },

    schema: {
      immediate: true,

      handler(newSchema) {
        var filtered = null;

        for (var key in newSchema) {
          if (key == 'required' || key == 'properties' || key == 'parameters' || key === 'returns') {
            continue;
          }

          if (filtered === null) {
            filtered = {};
          }

          filtered[key] = newSchema[key];
        }

        this.filteredObjectSchema = filtered;
        this.visible = this.initShown;
      }

    }
  },
  methods: {
    show() {
      this.visible = true;
    },

    formatKey(key) {
      switch (key) {
        case 'items':
          return 'Array items';

        case 'minItems':
          return 'Min. number of items';

        case 'const':
          return 'Constant value';

        case 'maxItems':
          return 'Max. number of items';

        case 'minimum':
          return 'Minimum value (inclusive)';

        case 'maximum':
          return 'Maximum value (inclusive)';

        case 'exclusiveMinimum':
          return 'Minimum value (exclusive)';

        case 'exclusiveMinimum':
          return 'Maximum value (exclusive)';

        case 'enum':
          return 'Allowed values';

        case 'default':
          return 'Default value';

        case 'type':
          return 'Data type';

        case 'allOf':
          return 'Composite data type';

        case 'contentMediaType':
          return 'Media Type';

        case 'contentEncoding':
          return 'Encoding';

        case 'deprecated':
          return 'Deprecated';

        case 'additionalProperties':
          return "Each property";

        default:
          if (key.length > 1) {
            return key.charAt(0).toUpperCase() + key.slice(1);
          }

      }

      return key;
    },

    formatType(schema) {
      if (typeof schema === 'undefined') {
        schema = this.schema;
      }

      return utils["a" /* default */].dataType(schema);
    },

    showRow(key) {
      if (key == 'object') {
        return this.schema.type == 'object' && typeof this.schema.properties == 'object';
      } else if (key == 'title' || key == 'description' || key == 'subtype' || key == 'format' || key == 'anyOf' || key == 'oneOf') {
        return false;
      } else if (key == 'items' && Object.keys(this.schema.items).length === 1 && typeof this.schema.items.type !== 'undefined') {
        // If items hold only the type (is added to type anyway)
        return false;
      }

      return true;
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@openeo/vue-components/components/JsonSchema.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_JsonSchemavue_type_script_lang_js_ = (JsonSchemavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@openeo/vue-components/components/JsonSchema.vue?vue&type=style&index=0&lang=css&
var JsonSchemavue_type_style_index_0_lang_css_ = __webpack_require__("3576");

// EXTERNAL MODULE: ./node_modules/@openeo/vue-components/components/JsonSchema.vue?vue&type=style&index=1&id=04cd24c6&scoped=true&lang=css&
var JsonSchemavue_type_style_index_1_id_04cd24c6_scoped_true_lang_css_ = __webpack_require__("35d5");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./node_modules/@openeo/vue-components/components/JsonSchema.vue







/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_JsonSchemavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "04cd24c6",
  null
  
)

/* harmony default export */ var JsonSchema = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "7a87":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9791":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);