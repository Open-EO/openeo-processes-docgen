(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed8d3906"],{4437:function(e,t,s){},"6e45":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.showSchema?s("div",{staticClass:"vue-component json-schema",class:{composite:e.compositeTypes.length>1}},[e.visible?[e.isProcessGraph?s("div",{staticClass:"schemaProcessGraph"},[s("div",{staticClass:"process-graph-parameters"},[s("p",{staticClass:"schema-attrs"},[e._v(e._s(e.formatKey("type"))+": "),s("span",{staticClass:"data-type"},[e._v("User-defined Process (process-graph:object)")])]),e._m(0),e.hasParameters?e._l(e.schema.parameters,(function(t,a){return s("ProcessParameter",{key:a,attrs:{parameter:t,processUrl:e.processUrl}})})):s("p",[e._v("No parameters defined.")]),e._m(1),e.hasReturns?[e.schema.returns.description?s("Description",{attrs:{description:e.schema.returns.description,processUrl:e.processUrl}}):e._e(),e.schema.returns.schema?s("div",{staticClass:"json-schema-container"},[s("openeo-json-schema",{attrs:{schema:e.schema.returns.schema}})],1):e._e()]:s("p",[e._v("No constraints defined.")])],2)]):e.showRow("object")?s("div",{staticClass:"schemaObjectElement"},[s("div",{staticClass:"inline-schema-attrs"},[null!==e.filteredObjectSchema?s("openeo-json-schema",{attrs:{schema:e.filteredObjectSchema,nestingLevel:e.nestingLevel+1}}):e._e(),s("table",{staticClass:"object-properties"},[e._m(2),e._l(e.schema.properties,(function(t,a){return s("tr",{key:a},[s("td",{staticClass:"key"},[e._v(" "+e._s(a)+" "),e.schema.required&&-1!==e.schema.required.indexOf(a)?s("strong",{staticClass:"required",attrs:{title:"required"}},[e._v("*")]):e._e()]),s("td",{staticClass:"value"},[s("openeo-json-schema",{attrs:{schema:t,nestingLevel:e.nestingLevel+1,processUrl:e.processUrl}})],1)])}))],2)],1)]):s("table",{staticClass:"schema-attrs"},["string"==typeof e.schema.title?s("tr",[s("td",{attrs:{colspan:"2"}},[s("strong",[e._v(e._s(e.schema.title))])])]):e._e(),"string"==typeof e.schema.description?s("tr",[s("td",{attrs:{colspan:"2"}},[s("Description",{attrs:{description:e.schema.description,compact:!0}})],1)]):e._e(),e.showAnyType?s("tr",[s("td",{staticClass:"key"},[e._v(e._s(e.formatKey("type"))+":")]),s("td",{staticClass:"value data-type"},[e._v("any")])]):e.compositeTypes.length>1?[e._m(3),s("tr",[s("td",{staticClass:"schema-container data-types-container",attrs:{colspan:"2"}},e._l(e.compositeTypes,(function(t,a){return s("openeo-json-schema",{key:a,attrs:{schema:t,nestingLevel:e.nestingLevel+1,processUrl:e.processUrl}})})),1)])]:e._e(),Array.isArray(this.schema)?e._e():[e._l(e.schema,(function(t,a){return["undefined"!==typeof t&&e.showRow(a)?s("tr",{key:a},[s("td",{staticClass:"key"},[e._v(e._s(e.formatKey(a))+":")]),s("td",{staticClass:"value"},["type"==a?s("span",{staticClass:"data-type"},[e._v(e._s(e.formatType()))]):"allOf"==a&&Array.isArray(t)?s("div",{staticClass:"schema-container"},e._l(t,(function(t,a){return s("openeo-json-schema",{key:a,attrs:{schema:t,nestingLevel:e.nestingLevel+1,processUrl:e.processUrl}})})),1):"const"!=a&&"default"!=a&&"examples"!=a&&!0===t?s("span",{attrs:{title:"true"}},[e._v("✓ Yes")]):"const"!=a&&"default"!=a&&"examples"!=a&&!1===t?s("span",{attrs:{title:"false"}},[e._v("✕ No")]):"examples"!=a&&Array.isArray(t)?s("ul",{staticClass:"comma-separated-list"},e._l(t,(function(t,a){return s("li",{key:a},[e._v(e._s(t))])})),0):"examples"==a&&Array.isArray(t)&&t.length>1?s("ul",e._l(t,(function(t,a){return s("li",{key:a},[s("code",[e._v(e._s(t))])])})),0):"examples"==a&&Array.isArray(t)&&1===t.length?s("code",[e._v(e._s(t[0]))]):"description"==a?s("Description",{attrs:{description:t,compact:!0}}):"default"==a&&""===t?s("em",[e._v("Empty string")]):"default"!=a||"object"!==typeof t&&"boolean"!==typeof t?"pattern"==a?s("code",[e._v(e._s(e._f("regex")(t)))]):"object"===typeof t?s("openeo-json-schema",{attrs:{schema:t,initShown:e.nestingLevel<3,nestingLevel:e.nestingLevel+1,processUrl:e.processUrl}}):s("span",[e._v(e._s(t))]):s("code",[e._v(e._s(JSON.stringify(t)))])],1)]):e._e()]}))]],2)]:s("div",{staticClass:"schema-expand"},[s("a",{on:{click:function(t){return e.show()}}},[e._v("> ...")])])],2):e._e()},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticClass:"schema-attrs",attrs:{title:"The parameters that can be used in the process."}},[s("strong",[e._v("Parameters:")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticClass:"schema-attrs",attrs:{title:"Describes what must be returned by the process."}},[s("strong",[e._v("Expected Return Value:")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("tr",[s("th",{staticClass:"object-prop-heading",attrs:{colspan:"2"}},[e._v("Object Properties:")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("tr",[s("th",{staticClass:"data-types-heading",attrs:{colspan:"2"}},[e._v("Data Types:")])])}],n=s("60a2"),i={name:"JsonSchema",components:{Description:()=>Promise.resolve().then(s.bind(null,"8088")),"openeo-json-schema":()=>Promise.resolve().then(s.bind(null,"6e45"))},props:{schema:{type:[Object,Array],default:()=>({})},initShown:{type:Boolean,default:!0},nestingLevel:{type:Number,default:1},processUrl:String},data(){return{visible:this.initShown,filteredObjectSchema:null}},beforeCreate(){n["a"].enableHtmlProps(this),this.$options.components.ProcessParameter=s("81dd").default},filters:{regex(e){return e.replaceAll("\r","\\r").replaceAll("\n","\\n").replaceAll("\t","\\t")}},computed:{showSchema(){return"object"===typeof this.schema&&null!==this.schema&&this.nestingLevel<20},showAnyType(){return n["a"].isObject(this.schema)&&"undefined"===typeof this.schema.type&&"undefined"===typeof this.schema.subtype},isProcessGraph(){return"object"===this.schema.type&&"process-graph"===this.schema.subtype},compositeTypes(){return Array.isArray(this.schema)?this.schema:Array.isArray(this.schema.anyOf)?this.schema.anyOf:Array.isArray(this.schema.oneOf)?this.schema.oneOf:[this.schema]},hasReturns(){return this.isProcessGraph&&n["a"].isObject(this.schema.returns)},hasParameters(){return this.isProcessGraph&&Array.isArray(this.schema.parameters)&&this.schema.parameters.length>0}},watch:{initShown(e){this.visible=e},schema:{immediate:!0,handler(e){var t=null;for(var s in e)"required"!=s&&"properties"!=s&&"parameters"!=s&&"returns"!==s&&(null===t&&(t={}),t[s]=e[s]);this.filteredObjectSchema=t,this.visible=this.initShown}}},methods:{show(){this.visible=!0},formatKey(e){switch(e){case"items":return"Array items";case"minItems":return"Min. number of items";case"const":return"Allowed value";case"maxItems":return"Max. number of items";case"minimum":return"Minimum value (inclusive)";case"maximum":return"Maximum value (inclusive)";case"exclusiveMinimum":return"Minimum value (exclusive)";case"exclusiveMinimum":return"Maximum value (exclusive)";case"enum":return"Allowed values";case"default":return"Default value";case"type":return"Data type";case"allOf":return"Composite data type";case"contentMediaType":return"Media Type";case"contentEncoding":return"Encoding";case"deprecated":return"Deprecated";case"additionalProperties":return"Each property";default:if(e.length>1)return n["a"].prettifyString(e)}return e},formatType(e){return"undefined"===typeof e&&(e=this.schema),n["a"].dataType(e)},showRow(e){return"object"==e?"object"==this.schema.type&&"object"==typeof this.schema.properties:"title"!=e&&"description"!=e&&"subtype"!=e&&"format"!=e&&"anyOf"!=e&&"oneOf"!=e&&"federation:backends"!=e&&("items"!=e||1!==Object.keys(this.schema.items).length||"undefined"===typeof this.schema.items.type)}}},c=i,o=(s("dcbc"),s("2877")),l=Object(o["a"])(c,a,r,!1,null,null,null);t["default"]=l.exports},dcbc:function(e,t,s){"use strict";s("4437")}}]);
//# sourceMappingURL=chunk-ed8d3906.39940b87.js.map