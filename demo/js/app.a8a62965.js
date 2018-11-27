(function(e){function s(s){for(var r,c,i=s[0],o=s[1],l=s[2],u=0,m=[];u<i.length;u++)c=i[u],n[c]&&m.push(n[c][0]),n[c]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);p&&p(s);while(m.length)m.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,s=0;s<a.length;s++){for(var t=a[s],r=!0,i=1;i<t.length;i++){var o=t[i];0!==n[o]&&(r=!1)}r&&(a.splice(s--,1),e=c(c.s=t[0]))}return e}var r={},n={app:0},a=[];function c(s){if(r[s])return r[s].exports;var t=r[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=r,c.d=function(e,s,t){c.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,s){if(1&s&&(e=c(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var r in e)c.d(t,r,function(s){return e[s]}.bind(null,r));return t},c.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(s,"a",s),s},c.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},c.p="/openeo-processes-docgen/demo/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=s,i=i.slice();for(var l=0;l<i.length;l++)s(i[l]);var p=o;a.push([0,"chunk-vendors"]),t()})({0:function(e,s,t){e.exports=t("56d7")},"0b70":function(e,s,t){"use strict";var r=t("79e1"),n=t.n(r);n.a},1:function(e,s){},"15c3":function(e,s,t){},2:function(e,s){},3:function(e,s){},"30ea":function(e,s,t){"use strict";var r=t("c6f3"),n=t.n(r);n.a},"56d7":function(e,s,t){"use strict";t.r(s);t("cadf"),t("551c"),t("097d");var r=t("2b0e"),n=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"docgen"}},[t("div",{attrs:{id:"toc"}},[t("h2",[e._v("Processes")]),e.categorize?t("CategorizedProcessesList",{attrs:{processes:e.processes}}):t("ProcessesList",{attrs:{processes:e.processes}}),e.links.length>0?t("div",{attrs:{id:"doclinks"}},[t("h2",[e._v("Related links")]),t("LinkList",{attrs:{links:e.links}})],1):e._e()],1),t("div",{attrs:{id:"processes"}},e._l(e.processes,function(e,s){return t("ProcessPanel",{key:s,attrs:{process:e}})}))])},a=[],c=(t("7f7f"),t("55dd"),t("53ca")),i=(t("f751"),new r["a"]),o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ul",{staticClass:"processesList uncategorizedProcessesList"},e._l(e.processes,function(s,r){return t("li",{key:r},[t("a",{attrs:{href:"#"+s.name}},[e._v(e._s(s.name))]),t("span",[e._v(e._s(s.summary))])])}))},l=[],p={name:"ProcessesList",props:["processes"]},u=p,m=t("2877"),d=Object(m["a"])(u,o,l,!1,null,null,null);d.options.__file="ProcessesList.vue";var _=d.exports,f=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"categories"},e._l(e.sortedCategories,function(s){return t("div",{key:s,staticClass:"category"},[t("h3",[e._v(e._s(s))]),t("ul",{staticClass:"processesList categorizedProcessesList"},e._l(e.categories[s],function(s,r){return t("li",{key:r},[t("a",{attrs:{href:"#"+e.processes[s].name}},[e._v(e._s(e.processes[s].name))]),t("span",[e._v(e._s(e.processes[s].summary))])])}))])}))},v=[],h=(t("ac6a"),t("456d"),{name:"CategorizedProcessesList",props:["processes"],data:function(){return{categories:{},uncategorizedName:"uncategorized"}},computed:{sortedCategories:function(){var e=Object.keys(this.categories);return e.sort()}},watch:{processes:function(e,s){if("object"===Object(c["a"])(e)){for(var t in this.categories={},e){var r=e[t];for(var n in Array.isArray(r.categories)||(r.categories=[this.uncategorizedName]),r.categories){var a=r.categories[n];"object"!==Object(c["a"])(this.categories[a])&&(this.categories[a]=[]),this.categories[a].push(t)}}console.log(this.categories)}}}}),g=h,y=(t("0b70"),Object(m["a"])(g,f,v,!1,null,"4e01d221",null));y.options.__file="CategorizedProcessesList.vue";var b=y.exports,C=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"processPanel"},[t("a",{staticClass:"anchor",attrs:{name:e.process.name}}),t("h2",[e._v(e._s(e.process.name))]),e.process.summary||e.process.deprecated||e.process.categories?t("div",{staticClass:"summary"},[e.process.categories?t("ul",{staticClass:"categories"},e._l(e.process.categories,function(s,r){return t("li",{key:r,staticClass:"category",domProps:{textContent:e._s(s)}})})):e._e(),t("code",{class:{deprecated:e.process.deprecated}},[e._v(e._s(e.process.name))]),e._v("\n\t\t — "+e._s(e.process.summary)+"\n\t\t"),!0===e.process.deprecated?[e._v(" — "),t("strong",{staticClass:"deprecated"},[e._v("deprecated")])]:e._e()],2):e._e(),e.process.description?t("div",{staticClass:"description"},[t("h3",[e._v("Description")]),t("DescriptionElement",{attrs:{description:e.process.description}})],1):e._e(),t("div",{staticClass:"parameters"},[t("h3",[e._v("Parameters")]),e.process.min_parameters>0?t("em",{staticClass:"min_parameters"},[e._v("Minimum number of parameters to be used: "+e._s(e.process.min_parameters))]):e._e(),e._l(e.process.parameters,function(s,r){return t("div",{key:r},[t("h4",[t("code",[e._v(e._s(r))]),!0===s.required?t("strong",{staticClass:"required",attrs:{title:"required"}},[e._v("*")]):e._e(),!0===s.deprecated?t("strong",{staticClass:"deprecated"},[e._v("deprecated")]):e._e()]),t("div",{staticClass:"details"},[s.description?t("DescriptionElement",{attrs:{description:s.description}}):e._e(),s.mime_type?t("p",{staticClass:"mimeType"},[t("strong",[e._v("Media type: ")]),e._v(e._s(s.mime_type))]):e._e(),t("SchemaPanel",{attrs:{schema:s.schema}})],1)])}),0===Object.keys(e.process.parameters).length?t("p",[e._v("This process has no parameters.")]):e._e()],2),t("div",{staticClass:"returns"},[t("h3",[e._v("Return Value")]),e.process.returns.description?t("DescriptionElement",{attrs:{description:e.process.returns.description}}):e._e(),e.process.returns.mime_type?t("p",{staticClass:"mimeType"},[t("strong",[e._v("MIME type: ")]),e._v(e._s(e.process.returns.mime_type))]):e._e(),t("SchemaPanel",{attrs:{schema:e.process.returns.schema}})],1),e.process.exceptions?t("div",{staticClass:"exceptions"},[t("h3",[e._v("Errors/Exceptions")]),t("ul",e._l(e.process.exceptions,function(s,r){return t("li",{key:r,staticClass:"exception"},[t("code",[e._v(e._s(r))]),s.code?t("span",{staticClass:"errorCode"},[e._v(" — "+e._s(s.code))]):e._e(),s.description?t("DescriptionElement",{attrs:{description:s.description}}):e._e()],1)}))]):e._e(),e.process.examples?t("div",{staticClass:"examples"},[t("h3",[e._v("Examples")]),e._l(e.process.examples,function(e,s){return t("ProcessExampleElement",{key:s,attrs:{id:s,example:e}})})],2):e._e(),e.process.links?t("div",{staticClass:"links"},[t("h3",[e._v("See Also")]),t("LinkList",{attrs:{links:e.process.links}})],1):e._e()])},k=[],P=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"schemaContainer"},[t("div",{staticClass:"content"},[t("SchemaElement",{attrs:{schema:e.schema}})],1)])},E=[],x=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"schemaElement"},["object"==e.schema.type&&"object"==typeof e.schema.properties?t("div",{staticClass:"schemaObjectElement"},[t("table",{staticClass:"objectProperties"},[null!==e.filteredObjectSchema?[e.schema.properties?t("tr",[t("th",{attrs:{colspan:"2"}},[e._v("Attributes:")])]):e._e(),t("tr",[t("td",{staticClass:"inlineSchemaAttrs",attrs:{colspan:"2"}},[t("SchemaElement",{attrs:{schema:e.filteredObjectSchema}})],1)])]:e._e(),e.schema.properties?t("tr",[t("th",{attrs:{colspan:"2"}},[e._v("Object Properties:")])]):e._e(),e._l(e.schema.properties,function(s,r){return t("tr",{key:r},[t("td",{staticClass:"propKey"},[e._v("\n\t\t\t\t\t"+e._s(r)+"\n\t\t\t\t\t"),e.schema.required&&-1!==e.schema.required.indexOf(r)?t("strong",{staticClass:"required",attrs:{title:"required"}},[e._v("*")]):e._e()]),t("td",{staticClass:"value"},[t("SchemaElement",{attrs:{schema:s}})],1)])})],2)]):t("table",{staticClass:"schemaAttrs"},e._l(e.schema,function(s,r){return t("tr",{key:r},[t("td",{staticClass:"key"},[e._v(e._s(r)+":")]),t("td",{staticClass:"value"},["default"!=r&&"examples"!=r&&!0===s?t("span",{attrs:{title:"true"}},[e._v("✓ Yes")]):"default"!=r&&"examples"!=r&&!1===s?t("span",{attrs:{title:"false"}},[e._v("✕ No")]):"examples"!=r&&Array.isArray(s)?t("ul",{staticClass:"csList"},e._l(s,function(s,r){return t("li",{key:r},[e._v(e._s(s))])})):"examples"==r&&Array.isArray(s)&&s.length>1?t("ul",e._l(s,function(s,r){return t("li",{key:r},[t("code",[e._v(e._s(s))])])})):"examples"==r&&Array.isArray(s)&&1===s.length?t("code",[e._v(e._s(s[0]))]):"description"==r?t("DescriptionElement",{attrs:{description:s}}):"pattern"==r?t("code",[e._v(e._s(s))]):"object"===typeof s?t("SchemaElement",{attrs:{schema:s}}):t("span",[e._v(e._s(s))])],1)])}))])},j=[],O=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"description",domProps:{innerHTML:e._s(e.markup(e.description))}})},L=[],w=t("e7d1"),S=t.n(w),D={name:"DescriptionElement",props:["description"],methods:{markup:function(e){var s=new S.a.Parser,t=new S.a.HtmlRenderer,r=s.parse(e);return t.render(r)}}},$=D,A=Object(m["a"])($,O,L,!1,null,null,null);A.options.__file="DescriptionElement.vue";var z=A.exports,M={name:"SchemaElement",props:["schema"],components:{DescriptionElement:z},computed:{filteredObjectSchema:function(){var e=null;for(var s in this.schema)"required"!=s&&"properties"!=s&&"type"!=s&&(null===e&&(e={}),e[s]=this.schema[s]);return e}}},q=M,N=(t("7e49"),Object(m["a"])(q,x,j,!1,null,null,null));N.options.__file="SchemaElement.vue";var T=N.exports,B={name:"SchemaPanel",props:["schema"],components:{SchemaElement:T}},G=B,J=(t("a463"),Object(m["a"])(G,P,E,!1,null,null,null));J.options.__file="SchemaPanel.vue";var R=J.exports,H=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"processExample"},[t("h4",[t("code",[e._v(e._s(e.id))]),e.example.summary?[e._v(" — "+e._s(e.example.summary))]:e._e()],2),t("div",{staticClass:"content"},[t("DescriptionElement",{attrs:{description:e.example.description}}),t("div",{staticClass:"processGraph"},[t("DescriptionElement",{attrs:{description:e.toMarkdown(e.example.process_graph)}})],1)],1)])},I=[],K={name:"ProcessExampleElement",props:["id","example"],components:{DescriptionElement:z},methods:{toMarkdown:function(e){return"```json\n"+JSON.stringify(e,null,2)+"\n```"}}},V=K,Y=(t("f27e"),Object(m["a"])(V,H,I,!1,null,"46ec309a",null));Y.options.__file="ProcessExampleElement.vue";var F=Y.exports,Q=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ul",e._l(e.links,function(s,r){return t("li",{key:r},[t("a",{attrs:{href:s.href,target:"_blank",rel:s.rel}},[s.title?[e._v(e._s(s.title))]:[e._v(e._s(s.href))]],2),s.rel?[e._v(" ("+e._s(s.rel)+")")]:e._e()],2)}))},U=[],W={name:"LinkList",props:["links"]},X=W,Z=Object(m["a"])(X,Q,U,!1,null,null,null);Z.options.__file="LinkList.vue";var ee=Z.exports,se={name:"ProcessPanel",props:["process"],components:{SchemaPanel:R,DescriptionElement:z,ProcessExampleElement:F,LinkList:ee}},te=se,re=(t("30ea"),Object(m["a"])(te,C,k,!1,null,"44bcafb4",null));re.options.__file="ProcessPanel.vue";var ne=re.exports,ae=(t("3e8f"),t("bc3a")),ce=t.n(ae),ie=t("31f3"),oe=t.n(ie),le={document:null,sortProcessesByName:!0,categorize:!1},pe={name:"DocGen",components:{ProcessesList:_,CategorizedProcessesList:b,ProcessPanel:ne,LinkList:ee},data:function(){var e={document:null,sortProcessesByName:!0,categorize:!1,processes:null,links:[]},s={};for(var t in e)"undefined"!==typeof this.$parent.$options[t]&&(s[t]=this.$parent.$options[t]);var r=Object.assign(e,le,s);return"string"===typeof window.processesDocument&&(r.document=window.processesDocument),r},created:function(){i.$on("changeDocument",this.changeDocument)},mounted:function(){var e=this;"string"===typeof this.document&&this.document.length>0?i.$emit("changeDocument",this.document):"object"===Object(c["a"])(this.processes)?oe.a.dereference(this.processes).then(function(s){e.processes=e.prepare(s),i.$emit("dataChanged")}).catch(function(e){console.log(e)}):console.error("No data specified.")},methods:{changeDocument:function(e){var s=this;ce.a.get(e).then(function(e){return oe.a.dereference(e.data)}).then(function(e){if(Array.isArray(e))e={processes:e,links:[]};else if("object"!=Object(c["a"])(e.processes)||"object"!==Object(c["a"])(e.links))throw"Invalid document specified, can't find processes.";s.processes=s.prepare(e.processes),Array.isArray(e.links)&&(s.links=e.links),i.$emit("dataChanged")}).catch(function(e){console.log(e)})},prepare:function(e){return!0===this.sortProcessesByName&&e.sort(function(e,s){var t=e.name.toLowerCase(),r=s.name.toLowerCase();return t<t?-1:t>r?1:0}),e}}},ue=pe,me=(t("8551"),Object(m["a"])(ue,n,a,!1,null,null,null));me.options.__file="DocGen.vue";var de=me.exports;r["a"].config.productionTip=!1,new r["a"]({el:"#app",document:"processes.json",render:function(e){return e(de)}})},"79e1":function(e,s,t){},"7e49":function(e,s,t){"use strict";var r=t("15c3"),n=t.n(r);n.a},8551:function(e,s,t){"use strict";var r=t("f5b0"),n=t.n(r);n.a},a463:function(e,s,t){"use strict";var r=t("a9a2"),n=t.n(r);n.a},a9a2:function(e,s,t){},bb18:function(e,s,t){},c6f3:function(e,s,t){},f27e:function(e,s,t){"use strict";var r=t("bb18"),n=t.n(r);n.a},f5b0:function(e,s,t){}});
//# sourceMappingURL=app.a8a62965.js.map