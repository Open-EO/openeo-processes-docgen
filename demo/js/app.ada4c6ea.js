(function(e){function s(s){for(var r,i,o=s[0],c=s[1],l=s[2],u=0,f=[];u<o.length;u++)i=o[u],n[i]&&f.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(s);while(f.length)f.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,s=0;s<a.length;s++){for(var t=a[s],r=!0,o=1;o<t.length;o++){var c=t[o];0!==n[c]&&(r=!1)}r&&(a.splice(s--,1),e=i(i.s=t[0]))}return e}var r={},n={app:0},a=[];function i(s){if(r[s])return r[s].exports;var t=r[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,s,t){i.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,s){if(1&s&&(e=i(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var r in e)i.d(t,r,function(s){return e[s]}.bind(null,r));return t},i.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(s,"a",s),s},i.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},i.p="/openeo-processes-docgen/demo/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=s,o=o.slice();for(var l=0;l<o.length;l++)s(o[l]);var p=c;a.push([0,"chunk-vendors"]),t()})({0:function(e,s,t){e.exports=t("56d7")},"0577":function(e,s,t){},"097c":function(e,s,t){},"56d7":function(e,s,t){"use strict";t.r(s);t("cadf"),t("551c"),t("097d");var r=t("2b0e"),n=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"docgen"},[t("Page",{attrs:{processes:e.processes,links:e.links,baseConfig:e.$props}})],1)},a=[],i=t("53ca"),o=t("bc3a"),c=t.n(o),l={document:null,sortProcessesById:!0,categorize:!0,processesInitiallyCollapsed:!1},p=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"page-container"},[t("aside",{staticClass:"menu-container"},[t("TableOfContents",{attrs:{processes:e.preparedProcesses,baseConfig:e.config}}),t("RelatedLinks",{attrs:{links:e.links,baseConfig:e.config}})],1),t("main",{staticClass:"content-container"},[t("Processes",{attrs:{processes:e.preparedProcesses,baseConfig:e.config}})],1)])},u=[],f=(t("55dd"),function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"toc"},[t("h2",[e._v("Processes")]),t("div",{staticClass:"search-box"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTerm,expression:"searchTerm"}],attrs:{type:"search",placeholder:"Search in process names"},domProps:{value:e.searchTerm},on:{input:function(s){s.target.composing||(e.searchTerm=s.target.value)}}}),t("button",[e._v("🔎")])]),e.config.categorize?t("ProcessesListCategorized",{attrs:{processes:e.processes,searchTerm:e.searchTerm,baseConfig:e.config}}):t("ProcessesList",{attrs:{processes:e.processes,searchTerm:e.searchTerm,baseConfig:e.config}})],1)}),d=[],m=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("nav",{staticClass:"list"},[t("ul",{staticClass:"processes-list"},e._l(e.filteredProcesses,function(s,r){return t("li",{key:r},[t("a",{attrs:{href:"#"+s.id}},[e._v(e._s(s.id))]),t("summary",[e._v(e._s(s.summary))])])})),0===e.filteredProcesses.length?t("strong",{staticClass:"no-processes-found"},[e._v("No processes found.")]):e._e()])},h=[],_=(t("6762"),t("2fdb"),{name:"ProcessesList",props:["processes","searchTerm"],data:function(){return{filteredProcesses:this.processes||[]}},watch:{processes:function(){this.filteredProcesses=this.processes},searchTerm:function(){var e=this;this.searchTerm?this.filteredProcesses=this.processes.filter(function(s){return s.id.toLowerCase().includes(e.searchTerm.toLowerCase())}):this.filteredProcesses=this.processes}}}),v=_,g=t("2877"),y=Object(g["a"])(v,m,h,!1,null,null,null);y.options.__file="ProcessesList.vue";var b=y.exports,C=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("nav",{staticClass:"categories"},[t("div",{staticClass:"toggle-all-controls"},[t("a",{on:{click:e.expandAll}},[e._v("Expand all")]),e._v(" | "),t("a",{on:{click:e.collapseAll}},[e._v("Collapse all")])]),e._l(e.sortedCategories,function(s){return t("ProcessesListCategory",{key:s,ref:"categoryElements",refInFor:!0,attrs:{name:s,processIndices:e.categories[s],processes:e.filteredProcesses,baseConfig:e.config}})}),0===e.filteredProcesses.length?t("strong",{staticClass:"no-processes-found"},[e._v("No processes found")]):e._e()],2)},k=[],x=(t("ac6a"),t("456d"),function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{class:{category:!0,expanded:e.expanded}},[t("h3",{on:{click:function(s){e.toggle()}}},[t("span",{staticClass:"toggle"},[e._v("❯")]),e._v(" "+e._s(e.displayName)+" ("+e._s(e.processCount)+")")]),t("ul",{staticClass:"processes-list"},e._l(e.processIndices,function(s){return t("li",{key:s},[t("a",{attrs:{href:"#"+e.processes[s].id}},[e._v(e._s(e.processes[s].id))]),t("summary",[e._v(e._s(e.processes[s].summary))])])}))])}),j=[],P=(t("7f7f"),t("a481"),{convertProcessToLatestSpec:function(e){if("undefined"===typeof e.id){if(e.id=e.name,delete e.name,"object"===Object(i["a"])(e.parameters))for(var s in e.parameters){var t=e.parameters[s];"undefined"!==typeof t.mime_type&&(t.media_type=t.mime_type,delete t.mime_type)}if("undefined"!==typeof e.returns.mime_type&&(e.returns.media_type=e.returns.mime_type,delete e.returns.mime_type),e.exceptions)for(var s in e.exceptions)"undefined"===typeof e.exceptions[s].message&&(e.exceptions[s].message=e.exceptions[s].description)}return e},signature:function(e){var s=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=[];for(var r in e.parameters){var n,a=e.parameters[r],i=this.dataType(a.schema,!0),o=a.required?"":"?";n=s?'<span class="required">'+o+'</span><span class="data-type">'+this.htmlentities(i)+'</span> <span class="param-name">'+r+"</span>":o+i+" "+r,t.push(n)}var c=this.dataType(e.returns.schema,!0),l="("+t.join(", ")+") : ";return s?'<span class="process-name">'+e.id+"</span>"+l+'<span class="data-type">'+this.htmlentities(c)+"</span>":e.id+l+c},dataType:function(e){var s=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;if(this.isAnyType(e)&&(r="any"),"undefined"===typeof r&&(r=e.type),"undefined"!==typeof e.oneOf||"undefined"!==typeof e.allOf||"undefined"!==typeof e.anyOf){if(s)return"mixed";var n=e.oneOf||e.allOf||e.anyOf,a=[];for(var o in n)a.push(this.dataType(n[o],s,t));return a.join(", ")}if(Array.isArray(r)){a=[];for(var o in r)a.push(this.dataType(e,s,t,r[o]));return a.join(s?"|":", ")}if("string"===typeof r&&"array"===r.toLowerCase()&&"object"===Object(i["a"])(e.items)&&"undefined"!==typeof e.items.type){var c="array<"+this.dataType(e.items,s,t+1)+">";return"string"===typeof e.format?0==t?e.format+(s?":"+c:" ("+c+")"):e.format:c}return"string"===typeof r&&"object"===r.toLowerCase()&&"string"===typeof e.format?e.format+(s?":object":" (object)"):r},isAnyType:function(e){return"undefined"===typeof e.type&&"undefined"===typeof e.oneOf&&"undefined"===typeof e.allOf&&"undefined"===typeof e.anyOf},htmlentities:function(e){return"string"===typeof e?e.replace("<","&lt;").replace(">","&gt;"):e},setDefaults:function(e){if("object"!==Object(i["a"])(e))return l;for(var s in l)"undefined"===typeof e[s]&&(e[s]=l[s]);return e}}),O=P,L={name:"ProcessesListCategory",props:["processes","name","processIndices","baseConfig"],data:function(){return{expanded:!1}},computed:{config:function(){return O.setDefaults(this.baseConfig)},sortedCategories:function(){var e=Object.keys(this.categories);return e.sort()},displayName:function(){return this.name.replace("_"," ")},processCount:function(){return this.processIndices.length}},methods:{toggle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.expanded=null===e?!this.expanded:e}}},T=L,w=(t("bc4a"),Object(g["a"])(T,x,j,!1,null,"7abf51fc",null));w.options.__file="ProcessesListCategory.vue";var A=w.exports,S={name:"ProcessesListCategorized",components:{ProcessesListCategory:A},props:["processes","searchTerm","baseConfig"],data:function(){return{categories:{},uncategorizedName:"uncategorized",filteredProcesses:this.processes||[]}},computed:{config:function(){return O.setDefaults(this.baseConfig)},sortedCategories:function(){var e=Object.keys(this.categories);return e.sort()}},watch:{processes:function(){"object"===Object(i["a"])(this.processes)&&this.filter()},searchTerm:function(){this.filter()}},methods:{expandAll:function(){this.toggleAll(!0)},collapseAll:function(){this.toggleAll(!1)},toggleAll:function(e){for(var s in this.$refs.categoryElements)this.$refs.categoryElements[s].toggle(e)},filter:function(){var e=this;this.searchTerm?(this.filteredProcesses=this.processes.filter(function(s){return s.id.toLowerCase().includes(e.searchTerm.toLowerCase())}),this.categorize(),this.$nextTick(function(){return e.expandAll()})):(this.filteredProcesses=this.processes,this.categorize(),this.$nextTick(function(){return e.collapseAll()}))},categorize:function(){for(var e in this.categories={},this.filteredProcesses){var s=this.filteredProcesses[e];for(var t in Array.isArray(s.categories)||(s.categories=[this.uncategorizedName]),s.categories){var r=s.categories[t];"object"!==Object(i["a"])(this.categories[r])&&(this.categories[r]=[]),this.categories[r].push(e)}}}}},E=S,D=(t("6a89"),Object(g["a"])(E,C,k,!1,null,"edee9d02",null));D.options.__file="ProcessesListCategorized.vue";var $=D.exports,z={name:"TableOfContents",components:{ProcessesList:b,ProcessesListCategorized:$},props:["processes","baseConfig"],computed:{config:function(){return O.setDefaults(this.baseConfig)}},data:function(){return{searchTerm:""}}},I=z,M=(t("e94c"),Object(g["a"])(I,f,d,!1,null,"32a0b95f",null));M.options.__file="TableOfContents.vue";var J=M.exports,N=function(){var e=this,s=e.$createElement,t=e._self._c||s;return e.links.length>0?t("section",{staticClass:"related-links"},[t("h2",[e._v("Related links")]),t("LinkList",{attrs:{links:e.links}})],1):e._e()},q=[],R=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ul",{staticClass:"link-list"},e._l(e.links,function(s,r){return t("li",{key:r},[t("a",{attrs:{href:s.href,target:"_blank",rel:s.rel}},[s.title?[e._v(e._s(s.title))]:[e._v(e._s(s.href))]],2),s.rel?[e._v(" ("+e._s(s.rel)+")")]:e._e()],2)}))},B=[],H={name:"LinkList",props:["links"]},G=H,F=Object(g["a"])(G,R,B,!1,null,null,null);F.options.__file="LinkList.vue";var K=F.exports,V={name:"RelatedLinks",components:{LinkList:K},props:["links"]},Y=V,Q=(t("6f96"),Object(g["a"])(Y,N,q,!1,null,"4ede6dff",null));Q.options.__file="RelatedLinks.vue";var U=Q.exports,W=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"processes-container"},e._l(e.processes,function(s,r){return t("Process",{key:r,attrs:{process:s,baseConfig:e.config}})}))},X=[],Z=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("article",{staticClass:"process"},[t("a",{staticClass:"anchor",attrs:{name:e.process.id}}),t("h2",{class:{deprecated:e.process.deprecated}},[e._v(e._s(e.process.id))]),e._t("process-before-summary"),e.process.summary||e.process.deprecated||e.process.categories?t("div",{staticClass:"summary"},[e.process.categories?t("ul",{staticClass:"categories"},e._l(e.process.categories,function(s,r){return t("li",{key:r,staticClass:"category",domProps:{textContent:e._s(e.formatCategory(s))}})})):e._e(),t("summary",[e._v("\n\t\t\t"+e._s(e.process.summary)+"\n\t\t\t"),!0===e.process.deprecated?[e.process.summary?[e._v(" — ")]:e._e(),t("strong",{staticClass:"deprecated"},[e._v("deprecated")])]:e._e()],2)]):e._e(),e._t("process-after-summary"),e.config.processesInitiallyCollapsed?t("button",{staticClass:"show-more-button",on:{click:function(s){e.toggle()}}},[e._v("Show "+e._s(e.collapsed?"more":"less"))]):e._e(),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.collapsed,expression:"!collapsed"}]},[e._t("process-before-details"),e.process.description?t("section",{staticClass:"description"},[t("h3",[e._v("Description")]),t("code",{staticClass:"signature",domProps:{innerHTML:e._s(e.signature(e.process))}}),t("Description",{attrs:{description:e.process.description}})],1):e._e(),t("section",{staticClass:"parameters"},[t("h3",[e._v("Parameters")]),e.process.min_parameters>0?t("em",{staticClass:"min-parameters"},[e._v("Minimum number of parameters to be used: "+e._s(e.process.min_parameters))]):e._e(),e._l(e.process.parameters,function(s,r){return t("div",{key:r},[t("h4",[t("code",[e._v(e._s(r))]),!0===s.required?t("strong",{staticClass:"required",attrs:{title:"required"}},[e._v("*")]):e._e(),!0===s.deprecated?t("strong",{staticClass:"deprecated"},[e._v("deprecated")]):e._e()]),t("div",{staticClass:"details"},[s.description?t("Description",{attrs:{description:s.description}}):e._e(),s.media_type?t("p",{staticClass:"media-type"},[t("strong",[e._v("Media type: ")]),e._v(e._s(s.media_type))]):e._e(),t("div",{staticClass:"json-schema-container"},[t("JsonSchema",{attrs:{schema:s.schema}})],1)],1)])}),0===Object.keys(e.process.parameters).length?t("p",[e._v("This process has no parameters.")]):e._e()],2),t("section",{staticClass:"returns"},[t("h3",[e._v("Return Value")]),e.process.returns.description?t("Description",{attrs:{description:e.process.returns.description}}):e._e(),e.process.returns.media_type?t("p",{staticClass:"media-type"},[t("strong",[e._v("Media (MIME) type: ")]),e._v(e._s(e.process.returns.media_type))]):e._e(),t("div",{staticClass:"json-schema-container"},[t("JsonSchema",{attrs:{schema:e.process.returns.schema}})],1)],1),e.process.exceptions?t("section",{staticClass:"exceptions"},[t("h3",[e._v("Errors/Exceptions")]),t("ul",e._l(e.process.exceptions,function(s,r){return t("li",{key:r,staticClass:"exception"},[t("code",[e._v(e._s(r))]),s.http?t("span",{staticClass:"http-code"},[e._v(" — HTTP "+e._s(s.http))]):e._e(),s.code?t("span",{staticClass:"error-code"},[e._v(" — "+e._s(s.code))]):e._e(),s.description?t("Description",{attrs:{description:s.description}}):e._e()],1)}))]):e._e(),e.process.examples?t("section",{staticClass:"examples"},[t("h3",[e._v("Examples")]),e._l(e.process.examples,function(e,s){return t("ProcessExample",{key:s,attrs:{id:s,example:e}})})],2):e._e(),e.process.links?t("section",{staticClass:"links"},[t("h3",[e._v("See Also")]),t("LinkList",{attrs:{links:e.process.links}})],1):e._e(),e._t("process-after-details")],2)],2)},ee=[],se=function(){var e=this,s=e.$createElement,t=e._self._c||s;return"object"===typeof e.schema&&null!==e.schema&&e.nestingLevel<100?t("div",{staticClass:"json-schema"},[e.visible?["object"==e.schema.type&&"object"==typeof e.schema.properties?t("div",{staticClass:"schemaObjectElement"},[t("table",{staticClass:"object-properties"},[t("tr",[t("td",{staticClass:"key"},[e._v("Type:")]),t("td",{staticClass:"value data-type"},[e._v(e._s(e.formatType()))])]),null!==e.filteredObjectSchema?[e.schema.properties?t("tr",[t("th",{staticClass:"object-attr-heading",attrs:{colspan:"2"}},[e._v("Attributes:")])]):e._e(),t("tr",[t("td",{staticClass:"inline-schema-attrs",attrs:{colspan:"2"}},[t("JsonSchema",{attrs:{schema:e.filteredObjectSchema,nestingLevel:e.nestingLevel+1}})],1)])]:e._e(),e.schema.properties?t("tr",[t("th",{staticClass:"object-prop-heading",attrs:{colspan:"2"}},[e._v("Object Properties:")])]):e._e(),e._l(e.schema.properties,function(s,r){return t("tr",{key:r},[t("td",{staticClass:"propKey"},[e._v("\n\t\t\t\t\t\t"+e._s(r)+"\n\t\t\t\t\t\t"),e.schema.required&&-1!==e.schema.required.indexOf(r)?t("strong",{staticClass:"required",attrs:{title:"required"}},[e._v("*")]):e._e()]),t("td",{staticClass:"value"},[t("JsonSchema",{attrs:{schema:s,nestingLevel:e.nestingLevel+1}})],1)])})],2)]):t("table",{staticClass:"schema-attrs"},[e.showAnyType()?t("tr",[t("td",{staticClass:"key"},[e._v("Type:")]),t("td",{staticClass:"value data-type"},[e._v("any")])]):e._e(),e._l(e.schema,function(s,r){return t("tr",{key:r},[e.showRow(r)?[t("td",{staticClass:"key"},[e._v(e._s(r)+":")]),t("td",{staticClass:"value"},["type"==r?t("span",{staticClass:"data-type"},[e._v(e._s(e.formatType()))]):"oneOf"!=r&&"anyOf"!=r&&"allOf"!=r||!Array.isArray(s)?"default"!=r&&"examples"!=r&&!0===s?t("span",{attrs:{title:"true"}},[e._v("✓ Yes")]):"default"!=r&&"examples"!=r&&!1===s?t("span",{attrs:{title:"false"}},[e._v("✕ No")]):"examples"!=r&&Array.isArray(s)?t("ul",{staticClass:"comma-separated-list"},e._l(s,function(s,r){return t("li",{key:r},[e._v(e._s(s))])})):"examples"==r&&Array.isArray(s)&&s.length>1?t("ul",e._l(s,function(s,r){return t("li",{key:r},[t("code",[e._v(e._s(s))])])})):"examples"==r&&Array.isArray(s)&&1===s.length?t("code",[e._v(e._s(s[0]))]):"description"==r?t("Description",{attrs:{description:s}}):"default"!=r||"object"!==typeof s&&"boolean"!==typeof s?"pattern"==r?t("code",[e._v(e._s(s))]):"object"===typeof s?t("JsonSchema",{attrs:{schema:s,initShown:!1,nestingLevel:e.nestingLevel+1}}):t("span",[e._v(e._s(s))]):t("code",[e._v(e._s(JSON.stringify(s)))]):t("div",{staticClass:"schema-container"},e._l(s,function(s,r){return t("JsonSchema",{key:r,attrs:{schema:s,nestingLevel:e.nestingLevel+1}})}))],1)]:e._e()],2)})],2)]:t("div",{staticClass:"schema-expand"},[t("a",{on:{click:function(s){e.show()}}},[e._v("> ...")])])],2):e._e()},te=[],re=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"styled-description",domProps:{innerHTML:e._s(e.markup(e.description))}})},ne=[],ae=t("e7d1"),ie=t.n(ae),oe={name:"Description",props:["description"],methods:{markup:function(e){var s=new ie.a.Parser,t=new ie.a.HtmlRenderer,r=s.parse(e);return t.render(r)}}},ce=oe,le=(t("bdbe"),Object(g["a"])(ce,re,ne,!1,null,null,null));le.options.__file="Description.vue";var pe=le.exports,ue={name:"JsonSchema",props:{schema:{},initShown:{default:!0},nestingLevel:{default:1}},data:function(){return{visible:this.initShown}},watcher:{initShown:function(e,s){this.visible=e}},components:{Description:pe},computed:{filteredObjectSchema:function(){var e=null;for(var s in this.schema)"required"!=s&&"properties"!=s&&"type"!=s&&"format"!=s&&(null===e&&(e={}),e[s]=this.schema[s]);return e}},methods:{show:function(){this.visible=!0},formatType:function(e){return"undefined"===typeof e&&(e=this.schema),O.dataType(e)},showRow:function(e){return("format"!=e||"string"!==typeof this.schema.type||!["object","array"].includes(this.schema.type.toLowerCase()))&&("items"!=e||1!==Object.keys(this.schema.items).length||"undefined"===typeof this.schema.items.type)},showAnyType:function(){return O.isAnyType(this.schema)}}},fe=ue,de=(t("8235"),Object(g["a"])(fe,se,te,!1,null,"cfb58494",null));de.options.__file="JsonSchema.vue";var me=de.exports,he=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"process-example"},[t("h4",[t("code",[e._v(e._s(e.id))]),e.example.summary?[e._v(" — "+e._s(e.example.summary))]:e._e()],2),t("div",{staticClass:"content"},[t("Description",{attrs:{description:e.example.description}}),t("div",{staticClass:"process-graph"},[t("Description",{attrs:{description:e.toMarkdown(e.example.process_graph)}})],1)],1)])},_e=[],ve={name:"ProcessExample",props:["id","example"],components:{Description:pe},methods:{toMarkdown:function(e){return"```json\n"+JSON.stringify(e,null,2)+"\n```"}}},ge=ve,ye=(t("e068"),Object(g["a"])(ge,he,_e,!1,null,"4a692188",null));ye.options.__file="ProcessExample.vue";var be=ye.exports,Ce={name:"Process",components:{JsonSchema:me,Description:pe,ProcessExample:be,LinkList:K},props:["process","baseConfig"],computed:{config:function(){return O.setDefaults(this.baseConfig)}},data:function(){return{collapsed:!1}},beforeMount:function(){this.collapsed=this.config.processesInitiallyCollapsed},methods:{toggle:function(){this.collapsed=!this.collapsed},formatCategory:function(e){return e.replace("_"," ")},signature:function(e){return O.signature(e,!0)}}},ke=Ce,xe=(t("eb03"),Object(g["a"])(ke,Z,ee,!1,null,"9ddc6740",null));xe.options.__file="Process.vue";var je=xe.exports,Pe={name:"Processes",components:{Process:je},props:["processes","baseConfig"],computed:{config:function(){return O.setDefaults(this.baseConfig)}}},Oe=Pe,Le=Object(g["a"])(Oe,W,X,!1,null,null,null);Le.options.__file="Processes.vue";var Te=Le.exports,we={name:"DocGen",components:{TableOfContents:J,RelatedLinks:U,Processes:Te},props:["processes","links","baseConfig"],computed:{config:function(){return O.setDefaults(this.baseConfig)}},data:function(){return{preparedProcesses:[]}},watch:{processes:function(){this.preparedProcesses=this.prepare(this.processes)}},methods:{prepare:function(e){return e=e.map(O.convertProcessToLatestSpec),!0===this.config.sortProcessesById&&e.sort(function(e,s){var t=e.id.toLowerCase(),r=s.id.toLowerCase();return t<r?-1:t>r?1:0}),e}}},Ae=we,Se=(t("f321"),t("c501"),Object(g["a"])(Ae,p,u,!1,null,"718f8e59",null));Se.options.__file="Page.vue";var Ee=Se.exports,De={name:"DocGen",components:{Page:Ee},props:{document:{default:l.document},sortProcessesById:{default:l.sortProcessesById},categorize:{default:l.categorize}},data:function(){return{processes:null,links:[]}},mounted:function(){"string"===typeof this.document&&this.document.length>0?this.changeDocument(this.document):"object"!==Object(i["a"])(this.processes)&&console.error("No data specified.")},methods:{changeDocument:function(e){var s=this;c.a.get(e).then(function(e){return e.data}).then(function(e){if(s.links=[],Array.isArray(e))s.processes=e;else{if("object"!==Object(i["a"])(e)||"object"!==Object(i["a"])(e.processes))throw"Invalid document specified, can't find processes.";s.processes=e.processes,Array.isArray(e.links)&&(s.links=e.links)}}).catch(function(e){console.log(e)})}}},$e=De,ze=(t("8551"),Object(g["a"])($e,n,a,!1,null,null,null));ze.options.__file="DocGen.vue";var Ie=ze.exports;r["a"].config.productionTip=!1,new r["a"]({el:"#app",render:function(e){return e(Ie,{props:{document:"processes.json"}})}})},"6a89":function(e,s,t){"use strict";var r=t("ad03"),n=t.n(r);n.a},"6f96":function(e,s,t){"use strict";var r=t("b7da"),n=t.n(r);n.a},7447:function(e,s,t){},"74b5":function(e,s,t){},8235:function(e,s,t){"use strict";var r=t("8c28"),n=t.n(r);n.a},8551:function(e,s,t){"use strict";var r=t("f5b0"),n=t.n(r);n.a},"8c28":function(e,s,t){},9094:function(e,s,t){},a00d:function(e,s,t){},ad03:function(e,s,t){},b7da:function(e,s,t){},bc4a:function(e,s,t){"use strict";var r=t("a00d"),n=t.n(r);n.a},bdbe:function(e,s,t){"use strict";var r=t("7447"),n=t.n(r);n.a},c501:function(e,s,t){"use strict";var r=t("0577"),n=t.n(r);n.a},e068:function(e,s,t){"use strict";var r=t("097c"),n=t.n(r);n.a},e819:function(e,s,t){},e94c:function(e,s,t){"use strict";var r=t("9094"),n=t.n(r);n.a},eb03:function(e,s,t){"use strict";var r=t("e819"),n=t.n(r);n.a},f321:function(e,s,t){"use strict";var r=t("74b5"),n=t.n(r);n.a},f5b0:function(e,s,t){}});