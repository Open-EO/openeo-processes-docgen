"use strict";(globalThis["webpackChunk_openeo_processes_docgen"]=globalThis["webpackChunk_openeo_processes_docgen"]||[]).push([[486,529,994],{6486:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});var a=function(){var e=this,t=e._self._c;return e.showSchema?t("div",{staticClass:"vue-component json-schema",class:{composite:e.compositeTypes.length>1}},[e.visible?[e.isProcessGraph?t("div",{staticClass:"schemaProcessGraph"},[t("div",{staticClass:"process-graph-parameters"},[t("p",{staticClass:"schema-attrs"},[e._v(e._s(e.formatKey("type"))+": "),t("span",{staticClass:"data-type"},[e._v("User-defined Process (process-graph:object)")])]),e._m(0),e.hasParameters?e._l(e.schema.parameters,(function(s,a){return t("ProcessParameter",{key:a,attrs:{parameter:s,processUrl:e.processUrl}})})):t("p",[e._v("No parameters defined.")]),e._m(1),e.hasReturns?[e.schema.returns.description?t("Description",{attrs:{description:e.schema.returns.description,processUrl:e.processUrl}}):e._e(),e.schema.returns.schema?t("div",{staticClass:"json-schema-container"},[t("openeo-json-schema",{attrs:{schema:e.schema.returns.schema}})],1):e._e()]:t("p",[e._v("No constraints defined.")])],2)]):e.showRow("object")?t("div",{staticClass:"schemaObjectElement"},[t("div",{staticClass:"inline-schema-attrs"},[null!==e.filteredObjectSchema?t("openeo-json-schema",{attrs:{schema:e.filteredObjectSchema,nestingLevel:e.nestingLevel+1}}):e._e(),t("table",{staticClass:"object-properties"},[e._m(2),e._l(e.schema.properties,(function(s,a){return t("tr",{key:a},[t("td",{staticClass:"key"},[e._v(" "+e._s(a)+" "),e.schema.required&&-1!==e.schema.required.indexOf(a)?t("strong",{staticClass:"required",attrs:{title:"required"}},[e._v("*")]):e._e()]),t("td",{staticClass:"value"},[t("openeo-json-schema",{attrs:{schema:s,nestingLevel:e.nestingLevel+1,processUrl:e.processUrl}})],1)])}))],2)],1)]):t("table",{staticClass:"schema-attrs"},["string"==typeof e.schema.title?t("tr",[t("td",{attrs:{colspan:"2"}},[t("strong",[e._v(e._s(e.schema.title))])])]):e._e(),"string"==typeof e.schema.description?t("tr",[t("td",{attrs:{colspan:"2"}},[t("Description",{attrs:{description:e.schema.description,compact:!0}})],1)]):e._e(),e.showAnyType?t("tr",[t("td",{staticClass:"key"},[e._v(e._s(e.formatKey("type"))+":")]),t("td",{staticClass:"value data-type"},[e._v("any")])]):e.compositeTypes.length>1?[e._m(3),t("tr",[t("td",{staticClass:"schema-container data-types-container",attrs:{colspan:"2"}},e._l(e.compositeTypes,(function(s,a){return t("openeo-json-schema",{key:a,attrs:{schema:s,nestingLevel:e.nestingLevel+1,processUrl:e.processUrl}})})),1)])]:e._e(),Array.isArray(this.schema)?e._e():[e._l(e.schema,(function(s,a){return["undefined"!==typeof s&&e.showRow(a)?t("tr",{key:a},[t("td",{staticClass:"key"},[e._v(e._s(e.formatKey(a))+":")]),t("td",{staticClass:"value"},["type"==a?t("span",{staticClass:"data-type"},[e._v(e._s(e.formatType()))]):"allOf"==a&&Array.isArray(s)?t("div",{staticClass:"schema-container"},e._l(s,(function(s,a){return t("openeo-json-schema",{key:a,attrs:{schema:s,nestingLevel:e.nestingLevel+1,processUrl:e.processUrl}})})),1):"const"!=a&&"default"!=a&&"examples"!=a&&!0===s?t("span",{attrs:{title:"true"}},[e._v("✓ Yes")]):"const"!=a&&"default"!=a&&"examples"!=a&&!1===s?t("span",{attrs:{title:"false"}},[e._v("✕ No")]):"examples"!=a&&Array.isArray(s)?t("ul",{staticClass:"comma-separated-list"},e._l(s,(function(s,a){return t("li",{key:a},[e._v(e._s(s))])})),0):"examples"==a&&Array.isArray(s)&&s.length>1?t("ul",e._l(s,(function(s,a){return t("li",{key:a},[t("code",[e._v(e._s(s))])])})),0):"examples"==a&&Array.isArray(s)&&1===s.length?t("code",[e._v(e._s(s[0]))]):"description"==a?t("Description",{attrs:{description:s,compact:!0}}):"default"==a&&""===s?t("em",[e._v("Empty string")]):"default"!=a||"object"!==typeof s&&"boolean"!==typeof s?"pattern"==a?t("code",[e._v(e._s(e._f("regex")(s)))]):"object"===typeof s?t("openeo-json-schema",{attrs:{schema:s,initShown:e.nestingLevel<3,nestingLevel:e.nestingLevel+1,processUrl:e.processUrl}}):t("span",[e._v(e._s(s))]):t("code",[e._v(e._s(JSON.stringify(s)))])],1)]):e._e()]}))]],2)]:t("div",{staticClass:"schema-expand"},[t("a",{on:{click:function(t){return e.show()}}},[e._v("> ...")])])],2):e._e()},r=[function(){var e=this,t=e._self._c;return t("p",{staticClass:"schema-attrs",attrs:{title:"The parameters that can be used in the process."}},[t("strong",[e._v("Parameters:")])])},function(){var e=this,t=e._self._c;return t("p",{staticClass:"schema-attrs",attrs:{title:"Describes what must be returned by the process."}},[t("strong",[e._v("Expected Return Value:")])])},function(){var e=this,t=e._self._c;return t("tr",[t("th",{staticClass:"object-prop-heading",attrs:{colspan:"2"}},[e._v("Object Properties:")])])},function(){var e=this,t=e._self._c;return t("tr",[t("th",{staticClass:"data-types-heading",attrs:{colspan:"2"}},[e._v("Data Types:")])])}],n=s(5973);const i={name:"JsonSchema",components:{Description:()=>Promise.resolve().then(s.bind(s,9856)),"openeo-json-schema":()=>Promise.resolve().then(s.bind(s,6486))},props:{schema:{type:[Object,Array],default:()=>({})},initShown:{type:Boolean,default:!0},nestingLevel:{type:Number,default:1},processUrl:String},data(){return{visible:this.initShown,filteredObjectSchema:null}},beforeCreate(){n.Z.enableHtmlProps(this),this.$options.components.ProcessParameter=s(4529)["default"]},filters:{regex(e){return e.replaceAll("\r","\\r").replaceAll("\n","\\n").replaceAll("\t","\\t")}},computed:{showSchema(){return"object"===typeof this.schema&&null!==this.schema&&this.nestingLevel<20},showAnyType(){return n.Z.isObject(this.schema)&&"undefined"===typeof this.schema.type&&"undefined"===typeof this.schema.subtype},isProcessGraph(){return"object"===this.schema.type&&"process-graph"===this.schema.subtype},compositeTypes(){return Array.isArray(this.schema)?this.schema:Array.isArray(this.schema.anyOf)?this.schema.anyOf:Array.isArray(this.schema.oneOf)?this.schema.oneOf:[this.schema]},hasReturns(){return this.isProcessGraph&&n.Z.isObject(this.schema.returns)},hasParameters(){return this.isProcessGraph&&Array.isArray(this.schema.parameters)&&this.schema.parameters.length>0}},watch:{initShown(e){this.visible=e},schema:{immediate:!0,handler(e){var t=null;for(var s in e)"required"!=s&&"properties"!=s&&"parameters"!=s&&"returns"!==s&&(null===t&&(t={}),t[s]=e[s]);this.filteredObjectSchema=t,this.visible=this.initShown}}},methods:{show(){this.visible=!0},formatKey(e){switch(e){case"items":return"Array items";case"minItems":return"Min. number of items";case"const":return"Allowed value";case"maxItems":return"Max. number of items";case"minimum":return"Minimum value (inclusive)";case"maximum":return"Maximum value (inclusive)";case"exclusiveMinimum":return"Minimum value (exclusive)";case"exclusiveMinimum":return"Maximum value (exclusive)";case"enum":return"Allowed values";case"default":return"Default value";case"type":return"Data type";case"allOf":return"Composite data type";case"contentMediaType":return"Media Type";case"contentEncoding":return"Encoding";case"deprecated":return"Deprecated";case"additionalProperties":return"Each property";default:if(e.length>1)return n.Z.prettifyString(e)}return e},formatType(e){return"undefined"===typeof e&&(e=this.schema),n.Z.dataType(e)},showRow(e){return"object"==e?"object"==this.schema.type&&"object"==typeof this.schema.properties:"title"!=e&&"description"!=e&&"subtype"!=e&&"format"!=e&&"anyOf"!=e&&"oneOf"!=e&&"federation:backends"!=e&&("items"!=e||1!==Object.keys(this.schema.items).length||"undefined"===typeof this.schema.items.type)}}},c=i;var o=s(1001),l=(0,o.Z)(c,a,r,!1,null,null,null);const p=l.exports},4529:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"vue-component process-parameter"},[t("h4",[t("code",[e._v(e._s(e.parameter.name))]),e.parameter.optional?e._e():t("strong",{staticClass:"required",attrs:{title:"required"}},[e._v("*")]),e.hasDefault?t("code",{staticClass:"default"},[e._v(" = "+e._s(e.defaultValue))]):e._e()]),t("div",{staticClass:"details"},[e.parameter.description?t("Description",{attrs:{description:e.parameter.description,processUrl:e.processUrl}}):e._e(),!0===e.parameter.deprecated?t("DeprecationNotice",{attrs:{entity:"parameter"}}):e._e(),!0===e.parameter.experimental?t("ExperimentalNotice",{attrs:{entity:"parameter"}}):e._e(),e.parameter["federation:backends"]?t("FederationNotice",{attrs:{backends:e.parameter["federation:backends"],federation:e.federation,entity:"parameter"}}):e._e(),e.parameter.schema?t("div",{staticClass:"json-schema-container"},[t("JsonSchema",{attrs:{schema:e.parameter.schema,processUrl:e.processUrl}})],1):e._e()],1)])},r=[],n=s(5554);const i={name:"ProcessParameter",components:{DeprecationNotice:()=>s.e(200).then(s.bind(s,9200)),Description:()=>Promise.resolve().then(s.bind(s,9856)),ExperimentalNotice:()=>s.e(540).then(s.bind(s,4540)),JsonSchema:()=>s.e(994).then(s.bind(s,6486))},mixins:[n.Z],props:{parameter:{type:Object},processUrl:{type:String},...n.Z.props},computed:{hasDefault(){return"undefined"!==typeof this.parameter.default},defaultValue(){return JSON.stringify(this.parameter.default)}}},c=i;var o=s(1001),l=(0,o.Z)(c,a,r,!1,null,null,null);const p=l.exports}}]);
//# sourceMappingURL=486.924f45e7.js.map