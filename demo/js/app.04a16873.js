(function(e){function s(s){for(var r,i,c=s[0],a=s[1],l=s[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);u&&u(s);while(p.length)p.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var e,s=0;s<o.length;s++){for(var t=o[s],r=!0,c=1;c<t.length;c++){var a=t[c];0!==n[a]&&(r=!1)}r&&(o.splice(s--,1),e=i(i.s=t[0]))}return e}var r={},n={app:0},o=[];function i(s){if(r[s])return r[s].exports;var t=r[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,s,t){i.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,s){if(1&s&&(e=i(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var r in e)i.d(t,r,function(s){return e[s]}.bind(null,r));return t},i.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(s,"a",s),s},i.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},i.p="/openeo-processes-docgen/demo/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=s,c=c.slice();for(var l=0;l<c.length;l++)s(c[l]);var u=a;o.push([0,"chunk-vendors"]),t()})({0:function(e,s,t){e.exports=t("56d7")},"1ddb":function(e,s,t){"use strict";var r=t("7745"),n=t.n(r);n.a},"1ff4":function(e,s,t){"use strict";var r=t("b23a"),n=t.n(r);n.a},2173:function(e,s,t){"use strict";var r=t("416a"),n=t.n(r);n.a},"23f8":function(e,s,t){"use strict";var r=t("b3a0"),n=t.n(r);n.a},2802:function(e,s,t){"use strict";var r=t("4eba"),n=t.n(r);n.a},3064:function(e,s,t){"use strict";var r=t("69b7"),n=t.n(r);n.a},"416a":function(e,s,t){},"4eba":function(e,s,t){},"56d7":function(e,s,t){"use strict";t.r(s);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),n=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"docgen"},[t("Page",{attrs:{processes:e.processes,links:e.links,baseConfig:e.$props}})],1)},o=[],i=t("7618"),c=t("bc3a"),a=t.n(c),l={document:null,apiVersion:null,title:"Processes",sortProcessesById:!0,categorize:!0,provideDownload:!0,showTableOfContents:!0},u=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"page-container"},[e.config.showTableOfContents?t("aside",{staticClass:"menu-container"},[t("TableOfContents",{attrs:{processes:e.preparedProcesses,baseConfig:e.config}}),t("RelatedLinks",{attrs:{links:e.links,baseConfig:e.config}})],1):e._e(),t("main",{staticClass:"content-container"},[t("Processes",{attrs:{processes:e.preparedProcesses,baseConfig:e.config}})],1)])},f=[],p=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"toc"},[t("h2",[e._v(e._s(e.config.title))]),t("div",{staticClass:"search-box"},[t("span",{staticClass:"icon"},[e._v("🔎")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTerm,expression:"searchTerm"}],attrs:{type:"search",placeholder:"Search in process names"},domProps:{value:e.searchTerm},on:{input:function(s){s.target.composing||(e.searchTerm=s.target.value)}}})]),e.config.categorize?t("ProcessesListCategorized",{attrs:{processes:e.processes,searchTerm:e.searchTerm,baseConfig:e.config}}):t("ProcessesList",{attrs:{processes:e.processes,searchTerm:e.searchTerm,baseConfig:e.config}})],1)},d=[],h=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("nav",{staticClass:"list"},[t("ul",{staticClass:"processes-list"},e._l(e.filteredProcesses,(function(s,r){return t("li",{key:r},[t("a",{class:{experimental:s.experimental,deprecated:s.deprecated},attrs:{href:"#"+s.id}},[e._v(e._s(s.id))]),t("summary",[e._v(e._s(s.summary))])])})),0),0===e.filteredProcesses.length?t("strong",{staticClass:"no-processes-found"},[e._v("No processes found.")]):e._e()])},g=[],m=(t("6762"),t("2fdb"),{name:"ProcessesList",props:["processes","searchTerm"],data:function(){return{filteredProcesses:this.processes||[]}},watch:{processes:function(){this.filteredProcesses=this.processes},searchTerm:function(){var e=this;this.searchTerm?this.filteredProcesses=this.processes.filter((function(s){return s.id.toLowerCase().includes(e.searchTerm.toLowerCase())})):this.filteredProcesses=this.processes}}}),b=m,v=(t("1ddb"),t("2877")),y=Object(v["a"])(b,h,g,!1,null,"b4abaabc",null),C=y.exports,P=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("nav",{staticClass:"categories"},[t("div",{staticClass:"toggle-all-controls"},[t("a",{on:{click:e.expandAll}},[e._v("Expand all")]),e._v(" | "),t("a",{on:{click:e.collapseAll}},[e._v("Collapse all")])]),e._l(e.sortedCategories,(function(s){return t("ProcessesListCategory",{key:s,ref:"categoryElements",refInFor:!0,attrs:{name:s,processIndices:e.categories[s],processes:e.filteredProcesses,baseConfig:e.config}})})),0===e.filteredProcesses.length?t("strong",{staticClass:"no-processes-found"},[e._v("No processes found")]):e._e()],2)},_=[],k=(t("55dd"),t("ac6a"),t("456d"),function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{class:{category:!0,expanded:e.expanded}},[t("strong",{on:{click:function(s){return e.toggle()}}},[t("span",{staticClass:"toggle"},[e._v("▸")]),e._v(" "+e._s(e.displayName)+" ("+e._s(e.processCount)+")")]),t("ul",{staticClass:"processes-list"},e._l(e.processIndices,(function(s){return t("li",{key:s},[t("a",{class:{experimental:e.processes[s].experimental,deprecated:e.processes[s].deprecated},attrs:{href:"#"+e.processes[s].id}},[e._v(e._s(e.processes[s].id))]),t("summary",[e._v(e._s(e.processes[s].summary))])])})),0)])}),w=[],T=(t("7f7f"),t("a481"),t("fbda")),O={normalizeProcesses:function(e,s,t){return Array.isArray(e)&&0!=e.length?(e=e.map((function(e){return T["MigrateProcesses"].convertProcessToLatestSpec(e,s)})),!0===t&&e.sort((function(e,s){var t=e.id.toLowerCase(),r=s.id.toLowerCase();return t<r?-1:t>r?1:0})),e):[]},setDefaults:function(e){if("object"!==Object(i["a"])(e))return l;for(var s in l)"undefined"===typeof e[s]&&(e[s]=l[s]);return e}},x=O,j={name:"ProcessesListCategory",props:["processes","name","processIndices","baseConfig"],data:function(){return{expanded:!1}},computed:{config:function(){return x.setDefaults(this.baseConfig)},sortedCategories:function(){var e=Object.keys(this.categories);return e.sort()},displayName:function(){return this.name.replace("_"," ")},processCount:function(){return this.processIndices.length}},methods:{toggle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.expanded=null===e?!this.expanded:e}}},L=j,A=(t("2173"),Object(v["a"])(L,k,w,!1,null,"1e555ce4",null)),z=A.exports,$={name:"ProcessesListCategorized",components:{ProcessesListCategory:z},props:["processes","searchTerm","baseConfig"],data:function(){return{categories:{},uncategorizedName:"uncategorized",filteredProcesses:this.processes||[]}},mounted:function(){this.filter()},computed:{config:function(){return x.setDefaults(this.baseConfig)},sortedCategories:function(){var e=Object.keys(this.categories);return e.sort()}},watch:{processes:function(){Array.isArray(this.processes)&&this.filter()},searchTerm:function(){this.filter()}},methods:{expandAll:function(){this.toggleAll(!0)},collapseAll:function(){this.toggleAll(!1)},toggleAll:function(e){for(var s in this.$refs.categoryElements)this.$refs.categoryElements[s].toggle(e)},filter:function(){var e=this;this.searchTerm?(this.filteredProcesses=this.processes.filter((function(s){return s.id.toLowerCase().includes(e.searchTerm.toLowerCase())})),this.categorize(),this.$nextTick((function(){return e.expandAll()}))):(this.filteredProcesses=this.processes,this.categorize(),this.$nextTick((function(){return e.collapseAll()})))},categorize:function(){for(var e in this.categories={},this.filteredProcesses){var s=this.filteredProcesses[e];for(var t in Array.isArray(s.categories)||(s.categories=[this.uncategorizedName]),s.categories){var r=s.categories[t];"object"!==Object(i["a"])(this.categories[r])&&(this.categories[r]=[]),this.categories[r].push(e)}}}}},D=$,E=(t("2802"),Object(v["a"])(D,P,_,!1,null,"305b8e73",null)),S=E.exports,I={name:"TableOfContents",components:{ProcessesList:C,ProcessesListCategorized:S},props:["processes","baseConfig"],computed:{config:function(){return x.setDefaults(this.baseConfig)}},data:function(){return{searchTerm:""}}},B=I,N=(t("f7c6"),Object(v["a"])(B,p,d,!1,null,"04f243e9",null)),M=N.exports,R=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"related-links"},[t("LinkList",{attrs:{links:e.links,heading:"Related Links",headingTag:"h3"}})],1)},V=[],G=t("4845"),J={name:"RelatedLinks",components:{LinkList:G["a"]},props:["links"]},U=J,q=(t("23f8"),Object(v["a"])(U,R,V,!1,null,"39a498a5",null)),F=q.exports,H=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"processes-container"},e._l(e.processes,(function(s,r){return t("Process",{key:r,attrs:{processData:s,provideDownload:e.config.provideDownload,processReferenceBuilder:e.buildProcessLinks}})})),1)},K=[],Q=t("2b37"),W={name:"Processes",components:{Process:Q["a"]},props:["processes","baseConfig"],computed:{config:function(){return x.setDefaults(this.baseConfig)}},methods:{buildProcessLinks:function(e){return'<code><a class="process-link" href="#'+e+'">'+e+"</a></code>"}}},X=W,Y=(t("1ff4"),Object(v["a"])(X,H,K,!1,null,null,null)),Z=Y.exports,ee={name:"DocGen",components:{TableOfContents:M,RelatedLinks:F,Processes:Z},props:["processes","links","baseConfig"],mounted:function(){document.title=this.config.title},computed:{config:function(){return x.setDefaults(this.baseConfig)},preparedProcesses:function(){return x.normalizeProcesses(this.processes,this.config.apiVersion,this.config.sortProcessesById)}}},se=ee,te=(t("f321"),t("3064"),Object(v["a"])(se,u,f,!1,null,"3471c53e",null)),re=te.exports,ne={name:"DocGen",components:{Page:re},props:{title:{type:String,default:l.title},document:{type:String|Array|Object,default:l.document},apiVersion:{type:String,default:l.apiVersion},sortProcessesById:{type:Boolean,default:l.sortProcessesById},categorize:{type:Boolean,default:l.categorize},showTableOfContents:{type:Boolean,default:l.showTableOfContents}},data:function(){return{processes:[],links:[]}},watch:{processes:function(){var e=this;this.$nextTick((function(){e.moveToAnchor()}))}},beforeMount:function(){this.changeDocument()},methods:{changeDocument:function(){var e=this;"string"===typeof this.document&&this.document.length>0?a.a.get(this.document).then((function(s){return e.setProcesses(s.data)})).catch((function(e){return console.error(e)})):"object"===Object(i["a"])(this.document)&&null!==this.document?this.setProcesses(this.document):console.error("Specified document is not a URL, array or object.")},setProcesses:function(e){this.links=[],Array.isArray(e)?this.processes=e:T["Utils"].isObject(e)&&Array.isArray(e.processes)?(this.processes=e.processes,Array.isArray(e.links)&&(this.links=e.links)):console.error("Invalid document specified, can't find processes.")},moveToAnchor:function(){if("string"===typeof window.location.hash&&window.location.hash.length>1){var e=window.location.hash.substring(1),s=this.$el.querySelector("a[name="+e+"]");s&&s.scrollIntoView()}}}},oe=ne,ie=(t("8551"),Object(v["a"])(oe,n,o,!1,null,null,null)),ce=ie.exports;r["a"].config.productionTip=!1,new r["a"]({el:"#app",render:function(e){return e(ce,{props:{document:"processes.json",apiVersion:"1.0.0"}})}})},"69b7":function(e,s,t){},"74b5":function(e,s,t){},7745:function(e,s,t){},8551:function(e,s,t){"use strict";var r=t("f5b0"),n=t.n(r);n.a},b23a:function(e,s,t){},b3a0:function(e,s,t){},f321:function(e,s,t){"use strict";var r=t("74b5"),n=t.n(r);n.a},f5b0:function(e,s,t){},f7c6:function(e,s,t){"use strict";var r=t("fc9a"),n=t.n(r);n.a},fc9a:function(e,s,t){}});