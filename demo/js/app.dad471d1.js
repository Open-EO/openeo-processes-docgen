(function(e){function t(t){for(var r,c,i=t[0],o=t[1],l=t[2],u=0,m=[];u<i.length;u++)c=i[u],n[c]&&m.push(n[c][0]),n[c]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);p&&p(t);while(m.length)m.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],r=!0,i=1;i<s.length;i++){var o=s[i];0!==n[o]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=s[0]))}return e}var r={},n={app:0},a=[];function c(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=e,c.c=r,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(s,r,function(t){return e[t]}.bind(null,r));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/openeo-processes-docgen/demo/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var p=o;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},1:function(e,t){},"15c3":function(e,t,s){},2:function(e,t){},3:function(e,t){},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("097d");var r=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"docgen"}},[s("div",{attrs:{id:"toc"}},[s("h2",[e._v("Processes")]),s("ul",e._l(e.processes,function(t,r){return s("li",{key:r},[s("a",{attrs:{href:"#"+t.name}},[e._v(e._s(t.name))]),s("span",[e._v(e._s(t.summary))])])})),e.links.length>0?s("div",{attrs:{id:"doclinks"}},[s("h2",[e._v("Related links")]),s("LinkList",{attrs:{links:e.links}})],1):e._e()]),s("div",{attrs:{id:"processes"}},e._l(e.processes,function(e,t){return s("ProcessPanel",{key:t,attrs:{process:e}})}))])},a=[],c=(s("7f7f"),s("55dd"),s("53ca")),i=(s("f751"),new r["a"]),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"processPanel"},[s("a",{staticClass:"anchor",attrs:{name:e.process.name}}),s("h2",[e._v(e._s(e.process.name))]),e.process.summary||e.process.deprecated?s("div",{staticClass:"summary"},[s("code",{class:{deprecated:e.process.deprecated}},[e._v(e._s(e.process.name))]),e._v("\n\t\t — "+e._s(e.process.summary)+"\n\t\t"),!0===e.process.deprecated?[e._v(" — "),s("strong",{staticClass:"deprecated"},[e._v("deprecated")])]:e._e()],2):e._e(),e.process.description?s("div",{staticClass:"description"},[s("h3",[e._v("Description")]),s("DescriptionElement",{attrs:{description:e.process.description}})],1):e._e(),s("div",{staticClass:"parameters"},[s("h3",[e._v("Parameters")]),e.process.min_parameters>0?s("em",{staticClass:"min_parameters"},[e._v("Minimum number of parameters to be used: "+e._s(e.process.min_parameters))]):e._e(),e._l(e.process.parameters,function(t,r){return s("div",{key:r},[s("h4",[s("code",[e._v(e._s(r))]),!0===t.required?s("strong",{staticClass:"required",attrs:{title:"required"}},[e._v("*")]):e._e(),!0===t.deprecated?s("strong",{staticClass:"deprecated"},[e._v("deprecated")]):e._e()]),s("div",{staticClass:"details"},[t.description?s("DescriptionElement",{attrs:{description:t.description}}):e._e(),t.mime_type?s("p",{staticClass:"mimeType"},[s("strong",[e._v("Media type: ")]),e._v(e._s(t.mime_type))]):e._e(),s("SchemaPanel",{attrs:{schema:t.schema}})],1)])}),0===Object.keys(e.process.parameters).length?s("p",[e._v("This process has no parameters.")]):e._e()],2),s("div",{staticClass:"returns"},[s("h3",[e._v("Return Value")]),e.process.returns.description?s("DescriptionElement",{attrs:{description:e.process.returns.description}}):e._e(),e.process.returns.mime_type?s("p",{staticClass:"mimeType"},[s("strong",[e._v("MIME type: ")]),e._v(e._s(e.process.returns.mime_type))]):e._e(),s("SchemaPanel",{attrs:{schema:e.process.returns.schema}})],1),e.process.exceptions?s("div",{staticClass:"exceptions"},[s("h3",[e._v("Errors/Exceptions")]),s("ul",e._l(e.process.exceptions,function(t,r){return s("li",{key:r,staticClass:"exception"},[s("code",[e._v(e._s(r))]),t.code?s("span",{staticClass:"errorCode"},[e._v(" — "+e._s(t.code))]):e._e(),t.description?s("DescriptionElement",{attrs:{description:t.description}}):e._e()],1)}))]):e._e(),e.process.examples?s("div",{staticClass:"examples"},[s("h3",[e._v("Examples")]),e._l(e.process.examples,function(e,t){return s("ProcessExampleElement",{key:t,attrs:{id:t,example:e}})})],2):e._e(),e.process.links?s("div",{staticClass:"links"},[s("h3",[e._v("See Also")]),s("LinkList",{attrs:{links:e.process.links}})],1):e._e()])},l=[],p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"schemaContainer"},[s("div",{staticClass:"content"},[s("SchemaElement",{attrs:{schema:e.schema}})],1)])},u=[],m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"schemaElement"},["object"==e.schema.type&&"object"==typeof e.schema.properties?s("div",{staticClass:"schemaObjectElement"},[s("table",{staticClass:"objectProperties"},[null!==e.filteredObjectSchema?[e.schema.properties?s("tr",[s("th",{attrs:{colspan:"2"}},[e._v("Attributes:")])]):e._e(),s("tr",[s("td",{staticClass:"inlineSchemaAttrs",attrs:{colspan:"2"}},[s("SchemaElement",{attrs:{schema:e.filteredObjectSchema}})],1)])]:e._e(),e.schema.properties?s("tr",[s("th",{attrs:{colspan:"2"}},[e._v("Object Properties:")])]):e._e(),e._l(e.schema.properties,function(t,r){return s("tr",{key:r},[s("td",{staticClass:"propKey"},[e._v("\n\t\t\t\t\t"+e._s(r)+"\n\t\t\t\t\t"),e.schema.required&&-1!==e.schema.required.indexOf(r)?s("strong",{staticClass:"required",attrs:{title:"required"}},[e._v("*")]):e._e()]),s("td",{staticClass:"value"},[s("SchemaElement",{attrs:{schema:t}})],1)])})],2)]):s("table",{staticClass:"schemaAttrs"},e._l(e.schema,function(t,r){return s("tr",{key:r},[s("td",{staticClass:"key"},[e._v(e._s(r)+":")]),s("td",{staticClass:"value"},["default"!=r&&"examples"!=r&&!0===t?s("span",{attrs:{title:"true"}},[e._v("✓ Yes")]):"default"!=r&&"examples"!=r&&!1===t?s("span",{attrs:{title:"false"}},[e._v("✕ No")]):"examples"!=r&&Array.isArray(t)?s("ul",{staticClass:"csList"},e._l(t,function(t,r){return s("li",{key:r},[e._v(e._s(t))])})):"examples"==r&&Array.isArray(t)&&t.length>1?s("ul",e._l(t,function(t,r){return s("li",{key:r},[s("code",[e._v(e._s(t))])])})):"examples"==r&&Array.isArray(t)&&1===t.length?s("code",[e._v(e._s(t[0]))]):"description"==r?s("DescriptionElement",{attrs:{description:t}}):"pattern"==r?s("code",[e._v(e._s(t))]):"object"===typeof t?s("SchemaElement",{attrs:{schema:t}}):s("span",[e._v(e._s(t))])],1)])}))])},d=[],_=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"description",domProps:{innerHTML:e._s(e.markup(e.description))}})},f=[],v=s("e7d1"),h=s.n(v),y={name:"DescriptionElement",props:["description"],methods:{markup:function(e){var t=new h.a.Parser,s=new h.a.HtmlRenderer,r=t.parse(e);return s.render(r)}}},b=y,k=s("2877"),C=Object(k["a"])(b,_,f,!1,null,null,null);C.options.__file="DescriptionElement.vue";var E=C.exports,g={name:"SchemaElement",props:["schema"],components:{DescriptionElement:E},computed:{filteredObjectSchema:function(){var e=null;for(var t in this.schema)"required"!=t&&"properties"!=t&&"type"!=t&&(null===e&&(e={}),e[t]=this.schema[t]);return e}}},x=g,j=(s("7e49"),Object(k["a"])(x,m,d,!1,null,null,null));j.options.__file="SchemaElement.vue";var P=j.exports,O={name:"SchemaPanel",props:["schema"],components:{SchemaElement:P}},S=O,w=(s("a463"),Object(k["a"])(S,p,u,!1,null,null,null));w.options.__file="SchemaPanel.vue";var D=w.exports,L=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"processExample"},[s("h4",[s("code",[e._v(e._s(e.id))]),e.example.summary?[e._v(" — "+e._s(e.example.summary))]:e._e()],2),s("div",{staticClass:"content"},[s("DescriptionElement",{attrs:{description:e.example.description}}),s("div",{staticClass:"processGraph"},[s("DescriptionElement",{attrs:{description:e.toMarkdown(e.example.process_graph)}})],1)],1)])},$=[],A={name:"ProcessExampleElement",props:["id","example"],components:{DescriptionElement:E},methods:{toMarkdown:function(e){return"```json\n"+JSON.stringify(e,null,2)+"\n```"}}},M=A,q=(s("f27e"),Object(k["a"])(M,L,$,!1,null,"46ec309a",null));q.options.__file="ProcessExampleElement.vue";var T=q.exports,N=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",e._l(e.links,function(t,r){return s("li",{key:r},[s("a",{attrs:{href:t.href,target:"_blank",rel:t.rel}},[t.title?[e._v(e._s(t.title))]:[e._v(e._s(t.href))]],2),t.rel?[e._v(" ("+e._s(t.rel)+")")]:e._e()],2)}))},B=[],G={name:"LinkList",props:["links"]},J=G,R=Object(k["a"])(J,N,B,!1,null,null,null);R.options.__file="LinkList.vue";var H=R.exports,I={name:"ProcessPanel",props:["process"],components:{SchemaPanel:D,DescriptionElement:E,ProcessExampleElement:T,LinkList:H}},K=I,V=(s("b7ec"),Object(k["a"])(K,o,l,!1,null,"5a0ca33a",null));V.options.__file="ProcessPanel.vue";var Y=V.exports,z=(s("3e8f"),s("bc3a")),F=s.n(z),Q=s("31f3"),U=s.n(Q),W={document:null,sortProcessesByName:!0},X={name:"DocGen",components:{ProcessPanel:Y,LinkList:H},data:function(){var e={document:null,sortProcessesByName:!0,processes:null,links:[]},t={};for(var s in e)"undefined"!==typeof this.$parent.$options[s]&&(t[s]=this.$parent.$options[s]);var r=Object.assign(e,W,t);return"string"===typeof window.processesDocument&&(r.document=window.processesDocument),r},created:function(){i.$on("changeDocument",this.changeDocument)},mounted:function(){var e=this;"string"===typeof this.document&&this.document.length>0?i.$emit("changeDocument",this.document):"object"===Object(c["a"])(this.processes)?U.a.dereference(this.processes).then(function(t){e.processes=e.prepare(t),i.$emit("dataChanged")}).catch(function(e){console.log(e)}):console.error("No data specified.")},methods:{changeDocument:function(e){var t=this;F.a.get(e).then(function(e){return U.a.dereference(e.data)}).then(function(e){if(Array.isArray(e))e={processes:e,links:[]};else if("object"!=Object(c["a"])(e.processes)||"object"!==Object(c["a"])(e.links))throw"Invalid document specified, can't find processes.";t.processes=t.prepare(e.processes),Array.isArray(e.links)&&(t.links=e.links),i.$emit("dataChanged")}).catch(function(e){console.log(e)})},prepare:function(e){return!0===this.sortProcessesByName&&e.sort(function(e,t){var s=e.name.toLowerCase(),r=t.name.toLowerCase();return s<s?-1:s>r?1:0}),e}}},Z=X,ee=(s("8551"),Object(k["a"])(Z,n,a,!1,null,null,null));ee.options.__file="DocGen.vue";var te=ee.exports;r["a"].config.productionTip=!1,new r["a"]({el:"#app",document:"processes.json",render:function(e){return e(te)}})},"7e49":function(e,t,s){"use strict";var r=s("15c3"),n=s.n(r);n.a},8551:function(e,t,s){"use strict";var r=s("f5b0"),n=s.n(r);n.a},a463:function(e,t,s){"use strict";var r=s("a9a2"),n=s.n(r);n.a},a9a2:function(e,t,s){},b3d1:function(e,t,s){},b7ec:function(e,t,s){"use strict";var r=s("b3d1"),n=s.n(r);n.a},bb18:function(e,t,s){},f27e:function(e,t,s){"use strict";var r=s("bb18"),n=s.n(r);n.a},f5b0:function(e,t,s){}});
//# sourceMappingURL=app.dad471d1.js.map