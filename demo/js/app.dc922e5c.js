(function(e){function s(s){for(var r,i,o=s[0],c=s[1],l=s[2],u=0,f=[];u<o.length;u++)i=o[u],n[i]&&f.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(s);while(f.length)f.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,s=0;s<a.length;s++){for(var t=a[s],r=!0,o=1;o<t.length;o++){var c=t[o];0!==n[c]&&(r=!1)}r&&(a.splice(s--,1),e=i(i.s=t[0]))}return e}var r={},n={app:0},a=[];function i(s){if(r[s])return r[s].exports;var t=r[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,s,t){i.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,s){if(1&s&&(e=i(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var r in e)i.d(t,r,function(s){return e[s]}.bind(null,r));return t},i.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(s,"a",s),s},i.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},i.p="/openeo-processes-docgen/demo/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=s,o=o.slice();for(var l=0;l<o.length;l++)s(o[l]);var p=c;a.push([0,"chunk-vendors"]),t()})({0:function(e,s,t){e.exports=t("56d7")},"061d":function(e,s,t){},"4c93":function(e,s,t){"use strict";var r=t("989e"),n=t.n(r);n.a},"525f":function(e,s,t){},"56d7":function(e,s,t){"use strict";t.r(s);t("cadf"),t("551c"),t("097d");var r=t("2b0e"),n=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"docgen"},[t("Page",{attrs:{processes:e.processes,links:e.links,baseConfig:e.$props}})],1)},a=[],i=t("a745"),o=t.n(i),c=t("7618"),l=t("bc3a"),p=t.n(l),u={document:null,sortProcessesById:!0,categorize:!0,processesInitiallyCollapsed:!1},f=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"page-container"},[t("aside",{staticClass:"menu-container"},[t("TableOfContents",{attrs:{processes:e.preparedProcesses,baseConfig:e.config}}),t("RelatedLinks",{attrs:{links:e.links,baseConfig:e.config}})],1),t("main",{staticClass:"content-container"},[t("Processes",{attrs:{processes:e.preparedProcesses,baseConfig:e.config}})],1)])},d=[],m=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"toc"},[t("h2",[e._v("Processes")]),t("div",{staticClass:"search-box"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTerm,expression:"searchTerm"}],attrs:{type:"search",placeholder:"Search in process names"},domProps:{value:e.searchTerm},on:{input:function(s){s.target.composing||(e.searchTerm=s.target.value)}}}),t("button",[e._v("🔎")])]),e.config.categorize?t("ProcessesListCategorized",{attrs:{processes:e.processes,searchTerm:e.searchTerm,baseConfig:e.config}}):t("ProcessesList",{attrs:{processes:e.processes,searchTerm:e.searchTerm,baseConfig:e.config}})],1)},h=[],v=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("nav",{staticClass:"list"},[t("ul",{staticClass:"processes-list"},e._l(e.filteredProcesses,function(s,r){return t("li",{key:r},[t("a",{attrs:{href:"#"+s.id}},[e._v(e._s(s.id))]),t("summary",[e._v(e._s(s.summary))])])}),0),0===e.filteredProcesses.length?t("strong",{staticClass:"no-processes-found"},[e._v("No processes found.")]):e._e()])},_=[],g=(t("6762"),t("2fdb"),{name:"ProcessesList",props:["processes","searchTerm"],data:function(){return{filteredProcesses:this.processes||[]}},watch:{processes:function(){this.filteredProcesses=this.processes},searchTerm:function(){var e=this;this.searchTerm?this.filteredProcesses=this.processes.filter(function(s){return s.id.toLowerCase().includes(e.searchTerm.toLowerCase())}):this.filteredProcesses=this.processes}}}),y=g,b=t("2877"),C=Object(b["a"])(y,v,_,!1,null,null,null);C.options.__file="ProcessesList.vue";var x=C.exports,P=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("nav",{staticClass:"categories"},[t("div",{staticClass:"toggle-all-controls"},[t("a",{on:{click:e.expandAll}},[e._v("Expand all")]),e._v(" | "),t("a",{on:{click:e.collapseAll}},[e._v("Collapse all")])]),e._l(e.sortedCategories,function(s){return t("ProcessesListCategory",{key:s,ref:"categoryElements",refInFor:!0,attrs:{name:s,processIndices:e.categories[s],processes:e.filteredProcesses,baseConfig:e.config}})}),0===e.filteredProcesses.length?t("strong",{staticClass:"no-processes-found"},[e._v("No processes found")]):e._e()],2)},j=[],k=(t("55dd"),t("a4bb")),L=t.n(k),O=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{class:{category:!0,expanded:e.expanded}},[t("h3",{on:{click:function(s){e.toggle()}}},[t("span",{staticClass:"toggle"},[e._v("❯")]),e._v(" "+e._s(e.displayName)+" ("+e._s(e.processCount)+")")]),t("ul",{staticClass:"processes-list"},e._l(e.processIndices,function(s){return t("li",{key:s},[t("a",{attrs:{href:"#"+e.processes[s].id}},[e._v(e._s(e.processes[s].id))]),t("summary",[e._v(e._s(e.processes[s].summary))])])}),0)])},T=[],w=(t("7f7f"),t("a481"),{normalizeProcesses:function(e,s){return e=e.map(w.normalizeProcess.bind(this)),!0===s&&e.sort(function(e,s){var t=e.id.toLowerCase(),r=s.id.toLowerCase();return t<r?-1:t>r?1:0}),e},normalizeProcess:function(e){if(e=this.convertProcessToLatestSpec(e),!o()(e.parameter_order))for(var s in e.parameter_order=[],e.parameters)e.parameter_order.push(s);var t=[],r=[];for(var n in e.parameter_order){var a=e.parameter_order[n];if("object"===Object(c["a"])(e.parameters[a])){var i=e.parameters[a];i.name=a,t.push(i),r.push(a)}}return e.parameters=t,e.parameter_order=r,e},convertProcessToLatestSpec:function(e){if("undefined"===typeof e.id){if(e.id=e.name,delete e.name,"object"===Object(c["a"])(e.parameters))for(var s in e.parameters){var t=e.parameters[s];"undefined"!==typeof t.mime_type&&(t.media_type=t.mime_type,delete t.mime_type)}if("undefined"!==typeof e.returns.mime_type&&(e.returns.media_type=e.returns.mime_type,delete e.returns.mime_type),e.exceptions)for(var s in e.exceptions)"undefined"===typeof e.exceptions[s].message&&(e.exceptions[s].message=e.exceptions[s].description);if(e.examples){var r=[];for(var s in e.examples){var n=e.examples[s],a={title:n.summary||s,description:n.description};n.process_graph&&(a.process_graph=n.process_graph),r.push(a)}e.examples=r}}return e},signature:function(e){var s=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=[];for(var r in o()(e.parameters)||(e.parameters=[]),e.parameters){var n,a=e.parameters[r],i=this.dataType(a.schema,!0),c=a.required?"":"?";n=s?'<span class="required">'+c+'</span><span class="data-type">'+this.htmlentities(i)+'</span> <span class="param-name">'+a.name+"</span>":c+i+" "+a.name,t.push(n)}var l=this.dataType(e.returns.schema,!0),p="("+t.join(", ")+") : ";return s?'<span class="process-name">'+e.id+"</span>"+p+'<span class="data-type">'+this.htmlentities(l)+"</span>":e.id+p+l},dataType:function(e){var s=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;if(this.isAnyType(e)&&(r="any"),"undefined"===typeof r&&(r=e.type),"object"===Object(c["a"])(e)&&("undefined"!==typeof e.oneOf||"undefined"!==typeof e.allOf||"undefined"!==typeof e.anyOf)){if(s)return"mixed";var n=e.oneOf||e.allOf||e.anyOf,a=[];for(var i in n)a.push(this.dataType(n[i],s,t));return a.join(", ")}if(o()(r)){a=[];for(var i in r)a.push(this.dataType(e,s,t,r[i]));return a.join(s?"|":", ")}if("string"===typeof r&&"array"===r.toLowerCase()&&"object"===Object(c["a"])(e.items)&&"undefined"!==typeof e.items.type){var l="array<"+this.dataType(e.items,s,t+1)+">";return"string"===typeof e.format?0==t?e.format+(s?":"+l:" ("+l+")"):e.format:l}return"string"===typeof r&&"object"===r.toLowerCase()&&"string"===typeof e.format?e.format+(s?":object":" (object)"):r},isAnyType:function(e){return"object"!==Object(c["a"])(e)||"undefined"===typeof e.type&&"undefined"===typeof e.oneOf&&"undefined"===typeof e.allOf&&"undefined"===typeof e.anyOf},htmlentities:function(e){return"string"===typeof e?e.replace("<","&lt;").replace(">","&gt;"):e},setDefaults:function(e){if("object"!==Object(c["a"])(e))return u;for(var s in u)"undefined"===typeof e[s]&&(e[s]=u[s]);return e}}),S=w,A={name:"ProcessesListCategory",props:["processes","name","processIndices","baseConfig"],data:function(){return{expanded:!1}},computed:{config:function(){return S.setDefaults(this.baseConfig)},sortedCategories:function(){var e=L()(this.categories);return e.sort()},displayName:function(){return this.name.replace("_"," ")},processCount:function(){return this.processIndices.length}},methods:{toggle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.expanded=null===e?!this.expanded:e}}},E=A,D=(t("bc4a"),Object(b["a"])(E,O,T,!1,null,"7abf51fc",null));D.options.__file="ProcessesListCategory.vue";var $=D.exports,z={name:"ProcessesListCategorized",components:{ProcessesListCategory:$},props:["processes","searchTerm","baseConfig"],data:function(){return{categories:{},uncategorizedName:"uncategorized",filteredProcesses:this.processes||[]}},computed:{config:function(){return S.setDefaults(this.baseConfig)},sortedCategories:function(){var e=L()(this.categories);return e.sort()}},watch:{processes:function(){"object"===Object(c["a"])(this.processes)&&this.filter()},searchTerm:function(){this.filter()}},methods:{expandAll:function(){this.toggleAll(!0)},collapseAll:function(){this.toggleAll(!1)},toggleAll:function(e){for(var s in this.$refs.categoryElements)this.$refs.categoryElements[s].toggle(e)},filter:function(){var e=this;this.searchTerm?(this.filteredProcesses=this.processes.filter(function(s){return s.id.toLowerCase().includes(e.searchTerm.toLowerCase())}),this.categorize(),this.$nextTick(function(){return e.expandAll()})):(this.filteredProcesses=this.processes,this.categorize(),this.$nextTick(function(){return e.collapseAll()}))},categorize:function(){for(var e in this.categories={},this.filteredProcesses){var s=this.filteredProcesses[e];for(var t in o()(s.categories)||(s.categories=[this.uncategorizedName]),s.categories){var r=s.categories[t];"object"!==Object(c["a"])(this.categories[r])&&(this.categories[r]=[]),this.categories[r].push(e)}}}}},I=z,M=(t("6a89"),Object(b["a"])(I,P,j,!1,null,"edee9d02",null));M.options.__file="ProcessesListCategorized.vue";var J=M.exports,q={name:"TableOfContents",components:{ProcessesList:x,ProcessesListCategorized:J},props:["processes","baseConfig"],computed:{config:function(){return S.setDefaults(this.baseConfig)}},data:function(){return{searchTerm:""}}},N=q,R=(t("e94c"),Object(b["a"])(N,m,h,!1,null,"32a0b95f",null));R.options.__file="TableOfContents.vue";var G=R.exports,H=function(){var e=this,s=e.$createElement,t=e._self._c||s;return e.links.length>0?t("section",{staticClass:"related-links"},[t("h2",[e._v("Related links")]),t("LinkList",{attrs:{links:e.links}})],1):e._e()},B=[],V=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ul",{staticClass:"link-list"},e._l(e.links,function(s,r){return t("li",{key:r},[t("a",{attrs:{href:s.href,target:"_blank",rel:s.rel}},[s.title?[e._v(e._s(s.title))]:[e._v(e._s(s.href))]],2),s.rel?[e._v(" ("+e._s(s.rel)+")")]:e._e()],2)}),0)},F=[],K={name:"LinkList",props:["links"]},U=K,Y=Object(b["a"])(U,V,F,!1,null,null,null);Y.options.__file="LinkList.vue";var Q=Y.exports,W={name:"RelatedLinks",components:{LinkList:Q},props:["links"]},X=W,Z=(t("6f96"),Object(b["a"])(X,H,B,!1,null,"4ede6dff",null));Z.options.__file="RelatedLinks.vue";var ee=Z.exports,se=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"processes-container"},e._l(e.processes,function(s,r){return t("Process",{key:r,attrs:{process:s,baseConfig:e.config}})}),1)},te=[],re=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("article",{staticClass:"process"},[t("a",{staticClass:"anchor",attrs:{name:e.process.id}}),t("h2",{class:{deprecated:e.process.deprecated}},[e._v(e._s(e.process.id))]),e._t("process-before-summary"),e.process.summary||e.process.deprecated||e.process.categories?t("div",{staticClass:"summary"},[e.process.categories?t("ul",{staticClass:"categories"},e._l(e.process.categories,function(s,r){return t("li",{key:r,staticClass:"category",domProps:{textContent:e._s(e.formatCategory(s))}})}),0):e._e(),t("summary",[e._v("\n\t\t\t"+e._s(e.process.summary)+"\n\t\t\t"),!0===e.process.deprecated?[e.process.summary?[e._v(" — ")]:e._e(),t("strong",{staticClass:"deprecated"},[e._v("deprecated")])]:e._e()],2)]):e._e(),e._t("process-after-summary"),e.config.processesInitiallyCollapsed?t("button",{staticClass:"show-more-button",on:{click:function(s){e.toggle()}}},[e._v("Show "+e._s(e.collapsed?"more":"less"))]):e._e(),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.collapsed,expression:"!collapsed"}]},[e._t("process-before-details"),e.process.description?t("section",{staticClass:"description"},[t("h3",[e._v("Description")]),t("code",{staticClass:"signature",domProps:{innerHTML:e._s(e.signature(e.process))}}),t("Description",{attrs:{description:e.process.description}})],1):e._e(),t("section",{staticClass:"parameters"},[t("h3",[e._v("Parameters")]),e._l(e.process.parameters,function(s,r){return t("div",{key:r},[t("h4",[t("code",[e._v(e._s(s.name))]),!0===s.required?t("strong",{staticClass:"required",attrs:{title:"required"}},[e._v("*")]):e._e(),!0===s.deprecated?t("strong",{staticClass:"deprecated"},[e._v("deprecated")]):e._e()]),t("div",{staticClass:"details"},[s.description?t("Description",{attrs:{description:s.description}}):e._e(),s.media_type?t("p",{staticClass:"media-type"},[t("strong",[e._v("Media type: ")]),e._v(e._s(s.media_type))]):e._e(),s.schema?t("div",{staticClass:"json-schema-container"},[t("JsonSchema",{attrs:{schema:s.schema}})],1):e._e()],1)])}),0===Object.keys(e.process.parameters).length?t("p",[e._v("This process has no parameters.")]):e._e()],2),t("section",{staticClass:"returns"},[t("h3",[e._v("Return Value")]),e.process.returns.description?t("Description",{attrs:{description:e.process.returns.description}}):e._e(),e.process.returns.media_type?t("p",{staticClass:"media-type"},[t("strong",[e._v("Media (MIME) type: ")]),e._v(e._s(e.process.returns.media_type))]):e._e(),e.process.returns.schema?t("div",{staticClass:"json-schema-container"},[t("JsonSchema",{attrs:{schema:e.process.returns.schema}})],1):e._e()],1),e.process.exceptions?t("section",{staticClass:"exceptions"},[t("h3",[e._v("Errors/Exceptions")]),t("ul",e._l(e.process.exceptions,function(s,r){return t("li",{key:r,staticClass:"exception"},[t("code",[e._v(e._s(r))]),s.http?t("span",{staticClass:"http-code"},[e._v(" — HTTP "+e._s(s.http))]):e._e(),s.code?t("span",{staticClass:"error-code"},[e._v(" — "+e._s(s.code))]):e._e(),s.description?t("Description",{attrs:{description:s.description}}):e._e(),s.message?t("div",{staticClass:"message"},[e._v("Message: "),t("em",[e._v(e._s(s.message))])]):e._e()],1)}),0)]):e._e(),e.process.examples?t("section",{staticClass:"examples"},[t("h3",[e._v("Examples")]),e._l(e.process.examples,function(s,r){return t("ProcessExample",{key:r,attrs:{id:r,example:s,process:e.process}})})],2):e._e(),e.process.links?t("section",{staticClass:"links"},[t("h3",[e._v("See Also")]),t("LinkList",{attrs:{links:e.process.links}})],1):e._e(),e._t("process-after-details")],2)],2)},ne=[],ae=function(){var e=this,s=e.$createElement,t=e._self._c||s;return"object"===typeof e.schema&&null!==e.schema&&e.nestingLevel<100?t("div",{staticClass:"json-schema"},[e.visible?["object"==e.schema.type&&"object"==typeof e.schema.properties?t("div",{staticClass:"schemaObjectElement"},[t("table",{staticClass:"object-properties"},[t("tr",[t("td",{staticClass:"key"},[e._v("Type:")]),t("td",{staticClass:"value data-type"},[e._v(e._s(e.formatType()))])]),null!==e.filteredObjectSchema?[e.schema.properties?t("tr",[t("th",{staticClass:"object-attr-heading",attrs:{colspan:"2"}},[e._v("Attributes:")])]):e._e(),t("tr",[t("td",{staticClass:"inline-schema-attrs",attrs:{colspan:"2"}},[t("JsonSchema",{attrs:{schema:e.filteredObjectSchema,nestingLevel:e.nestingLevel+1}})],1)])]:e._e(),e.schema.properties?t("tr",[t("th",{staticClass:"object-prop-heading",attrs:{colspan:"2"}},[e._v("Object Properties:")])]):e._e(),e._l(e.schema.properties,function(s,r){return t("tr",{key:r},[t("td",{staticClass:"propKey"},[e._v("\n\t\t\t\t\t\t"+e._s(r)+"\n\t\t\t\t\t\t"),e.schema.required&&-1!==e.schema.required.indexOf(r)?t("strong",{staticClass:"required",attrs:{title:"required"}},[e._v("*")]):e._e()]),t("td",{staticClass:"value"},[t("JsonSchema",{attrs:{schema:s,nestingLevel:e.nestingLevel+1}})],1)])})],2)]):t("table",{staticClass:"schema-attrs"},[e.showAnyType()?t("tr",[t("td",{staticClass:"key"},[e._v("Type:")]),t("td",{staticClass:"value data-type"},[e._v("any")])]):e._e(),e._l(e.schema,function(s,r){return t("tr",{key:r},[e.showRow(r)?[t("td",{staticClass:"key"},[e._v(e._s(r)+":")]),t("td",{staticClass:"value"},["type"==r?t("span",{staticClass:"data-type"},[e._v(e._s(e.formatType()))]):"oneOf"!=r&&"anyOf"!=r&&"allOf"!=r||!Array.isArray(s)?"default"!=r&&"examples"!=r&&!0===s?t("span",{attrs:{title:"true"}},[e._v("✓ Yes")]):"default"!=r&&"examples"!=r&&!1===s?t("span",{attrs:{title:"false"}},[e._v("✕ No")]):"examples"!=r&&Array.isArray(s)?t("ul",{staticClass:"comma-separated-list"},e._l(s,function(s,r){return t("li",{key:r},[e._v(e._s(s))])}),0):"examples"==r&&Array.isArray(s)&&s.length>1?t("ul",e._l(s,function(s,r){return t("li",{key:r},[t("code",[e._v(e._s(s))])])}),0):"examples"==r&&Array.isArray(s)&&1===s.length?t("code",[e._v(e._s(s[0]))]):"description"==r?t("Description",{attrs:{description:s}}):"default"!=r||"object"!==typeof s&&"boolean"!==typeof s?"pattern"==r?t("code",[e._v(e._s(s))]):"object"===typeof s?t("JsonSchema",{attrs:{schema:s,initShown:!1,nestingLevel:e.nestingLevel+1}}):t("span",[e._v(e._s(s))]):t("code",[e._v(e._s(JSON.stringify(s)))]):t("div",{staticClass:"schema-container"},e._l(s,function(s,r){return t("JsonSchema",{key:r,attrs:{schema:s,nestingLevel:e.nestingLevel+1}})}),1)],1)]:e._e()],2)})],2)]:t("div",{staticClass:"schema-expand"},[t("a",{on:{click:function(s){e.show()}}},[e._v("> ...")])])],2):e._e()},ie=[],oe=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"styled-description",domProps:{innerHTML:e._s(e.markup(e.description))}})},ce=[],le=t("e7d1"),pe=t.n(le),ue={name:"Description",props:["description"],methods:{markup:function(e){e=e.replace(/(?<!\b)@(\w+)\b/g,'<a href="#$1">$1</a>');var s=new pe.a.Parser,t=new pe.a.HtmlRenderer,r=s.parse(e);return t.render(r)}}},fe=ue,de=(t("bdbe"),Object(b["a"])(fe,oe,ce,!1,null,null,null));de.options.__file="Description.vue";var me=de.exports,he={name:"JsonSchema",props:{schema:{},initShown:{default:!0},nestingLevel:{default:1}},data:function(){return{visible:this.initShown}},watcher:{initShown:function(e,s){this.visible=e}},components:{Description:me},computed:{filteredObjectSchema:function(){var e=null;for(var s in this.schema)"required"!=s&&"properties"!=s&&"type"!=s&&"format"!=s&&(null===e&&(e={}),e[s]=this.schema[s]);return e}},methods:{show:function(){this.visible=!0},formatType:function(e){return"undefined"===typeof e&&(e=this.schema),S.dataType(e)},showRow:function(e){return("format"!=e||"string"!==typeof this.schema.type||!["object","array"].includes(this.schema.type.toLowerCase()))&&("items"!=e||1!==L()(this.schema.items).length||"undefined"===typeof this.schema.items.type)},showAnyType:function(){return S.isAnyType(this.schema)}}},ve=he,_e=(t("8235"),Object(b["a"])(ve,ae,ie,!1,null,"cfb58494",null));_e.options.__file="JsonSchema.vue";var ge=_e.exports,ye=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"process-example"},[t("h4",[e._v(e._s(e.title))]),t("div",{staticClass:"content"},[e.example.description?t("Description",{attrs:{description:e.example.description}}):e._e(),e.example.process_graph?t("div",{staticClass:"process-graph"},[t("Description",{attrs:{description:e.renderedGraph()}})],1):e._e(),e.example.arguments?t("div",{staticClass:"arguments"},[t("code",{domProps:{innerHTML:e._s(e.renderedArguments())}})]):e._e()],1)])},be=[],Ce=t("f499"),xe=t.n(Ce),Pe={name:"ProcessExample",props:["id","process","example"],components:{Description:me},computed:{identifier:function(){return"#"+(this.id+1)},title:function(){return this.example.title?this.example.title+" ("+this.identifier+")":"Example "+this.identifier}},methods:{renderedGraph:function(){var e="##### Process Graph\n```json\n"+xe()(this.example.process_graph,null,2)+"\n```";return"undefined"!==typeof this.example.returns&&(e+="\n##### Result\n```json\n"+xe()(this.example.returns,null,2)+"\n```"),e},renderedArguments:function(){var e=[];for(var s in this.process.parameter_order){var t=this.process.parameter_order[s];if("undefined"!==typeof this.example.arguments[t]){var r=this.example.arguments[t];e.push('<span class="param-name">'+t+'</span> = <span class="argument">'+xe()(r)+"</span>")}}var n="";return"undefined"!==typeof this.example.returns&&(n=' => <span class="return-value">'+xe()(this.example.returns)+"</span>"),'<span class="process-name">'+this.process.id+"</span>("+e.join(", ")+")"+n}}},je=Pe,ke=(t("4c93"),t("b15c"),Object(b["a"])(je,ye,be,!1,null,"3b063560",null));ke.options.__file="ProcessExample.vue";var Le=ke.exports,Oe={name:"Process",components:{JsonSchema:ge,Description:me,ProcessExample:Le,LinkList:Q},props:["process","baseConfig"],computed:{config:function(){return S.setDefaults(this.baseConfig)}},data:function(){return{collapsed:!1}},beforeMount:function(){this.collapsed=this.config.processesInitiallyCollapsed},methods:{toggle:function(){this.collapsed=!this.collapsed},formatCategory:function(e){return e.replace("_"," ")},signature:function(e){return S.signature(e,!0)}}},Te=Oe,we=(t("a077"),Object(b["a"])(Te,re,ne,!1,null,"5c3d5c7e",null));we.options.__file="Process.vue";var Se=we.exports,Ae={name:"Processes",components:{Process:Se},props:["processes","baseConfig"],computed:{config:function(){return S.setDefaults(this.baseConfig)}}},Ee=Ae,De=Object(b["a"])(Ee,se,te,!1,null,null,null);De.options.__file="Processes.vue";var $e=De.exports,ze={name:"DocGen",components:{TableOfContents:G,RelatedLinks:ee,Processes:$e},props:["processes","links","baseConfig"],computed:{config:function(){return S.setDefaults(this.baseConfig)}},data:function(){return{preparedProcesses:[]}},watch:{processes:function(){this.preparedProcesses=S.normalizeProcesses(this.processes,this.config.sortProcessesById)}}},Ie=ze,Me=(t("f321"),t("9df8"),Object(b["a"])(Ie,f,d,!1,null,"c6aac722",null));Me.options.__file="Page.vue";var Je=Me.exports,qe={Description:me,JsonSchema:ge,LinkList:Q,Page:Je,Process:Se,Processes:$e,ProcessesList:x,ProcessesListCategorized:J,ProcessesListCategory:$,ProcessExample:Le,RelatedLinks:ee,TableOfContents:G,Utils:S,name:"DocGen",components:{Page:Je},props:{document:{default:u.document},sortProcessesById:{default:u.sortProcessesById},categorize:{default:u.categorize}},data:function(){return{processes:null,links:[]}},watch:{processes:function(){var e=this;this.$nextTick(function(){e.moveToAnchor()})}},beforeMount:function(){"string"===typeof this.document&&this.document.length>0?this.changeDocument(this.document):"object"!==Object(c["a"])(this.processes)&&console.error("No data specified.")},methods:{changeDocument:function(e){var s=this;p.a.get(e).then(function(e){return e.data}).then(function(e){if(s.links=[],o()(e))s.processes=e;else{if("object"!==Object(c["a"])(e)||"object"!==Object(c["a"])(e.processes))throw"Invalid document specified, can't find processes.";s.processes=e.processes,o()(e.links)&&(s.links=e.links)}}).catch(function(e){console.log(e)})},moveToAnchor:function(){if("string"===typeof window.location.hash&&window.location.hash.length>1){var e=window.location.hash.substring(1),s=this.$el.querySelector("a[name="+e+"]");s&&s.scrollIntoView()}}}},Ne=qe,Re=(t("8551"),Object(b["a"])(Ne,n,a,!1,null,null,null));Re.options.__file="DocGen.vue";var Ge=Re.exports;r["a"].config.productionTip=!1,new r["a"]({el:"#app",render:function(e){return e(Ge,{props:{document:"processes.json"}})}})},"6a89":function(e,s,t){"use strict";var r=t("ad03"),n=t.n(r);n.a},"6f96":function(e,s,t){"use strict";var r=t("b7da"),n=t.n(r);n.a},7447:function(e,s,t){},"74b5":function(e,s,t){},8235:function(e,s,t){"use strict";var r=t("8c28"),n=t.n(r);n.a},8551:function(e,s,t){"use strict";var r=t("f5b0"),n=t.n(r);n.a},"8c28":function(e,s,t){},9094:function(e,s,t){},"989e":function(e,s,t){},"9df8":function(e,s,t){"use strict";var r=t("061d"),n=t.n(r);n.a},a00d:function(e,s,t){},a077:function(e,s,t){"use strict";var r=t("525f"),n=t.n(r);n.a},ad03:function(e,s,t){},b15c:function(e,s,t){"use strict";var r=t("e756"),n=t.n(r);n.a},b7da:function(e,s,t){},bc4a:function(e,s,t){"use strict";var r=t("a00d"),n=t.n(r);n.a},bdbe:function(e,s,t){"use strict";var r=t("7447"),n=t.n(r);n.a},e756:function(e,s,t){},e94c:function(e,s,t){"use strict";var r=t("9094"),n=t.n(r);n.a},f321:function(e,s,t){"use strict";var r=t("74b5"),n=t.n(r);n.a},f5b0:function(e,s,t){}});