(function(e){function s(s){for(var r,c,i=s[0],a=s[1],l=s[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);u&&u(s);while(p.length)p.shift()();return n.push.apply(n,l||[]),t()}function t(){for(var e,s=0;s<n.length;s++){for(var t=n[s],r=!0,i=1;i<t.length;i++){var a=t[i];0!==o[a]&&(r=!1)}r&&(n.splice(s--,1),e=c(c.s=t[0]))}return e}var r={},o={app:0},n=[];function c(s){if(r[s])return r[s].exports;var t=r[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=r,c.d=function(e,s,t){c.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,s){if(1&s&&(e=c(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var r in e)c.d(t,r,function(s){return e[s]}.bind(null,r));return t},c.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(s,"a",s),s},c.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},c.p="/openeo-processes-docgen/demo/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=s,i=i.slice();for(var l=0;l<i.length;l++)s(i[l]);var u=a;n.push([0,"chunk-vendors"]),t()})({0:function(e,s,t){e.exports=t("56d7")},"02ca":function(e,s,t){"use strict";var r=t("622e"),o=t.n(r);o.a},"1ddb":function(e,s,t){"use strict";var r=t("8fa0"),o=t.n(r);o.a},"1ff4":function(e,s,t){"use strict";var r=t("b829"),o=t.n(r);o.a},"23f8":function(e,s,t){"use strict";var r=t("4d3e"),o=t.n(r);o.a},"28c4":function(e,s,t){"use strict";var r=t("8ffa"),o=t.n(r);o.a},"400e":function(e,s,t){"use strict";var r=t("8a89"),o=t.n(r);o.a},"4d3e":function(e,s,t){},"56d7":function(e,s,t){"use strict";t.r(s);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"docgen"},[!e.isLocalDocument||e.processes.length||e.links.length?t("div",{staticClass:"page-container"},[e.showTableOfContents?t("aside",{staticClass:"menu-container"},[t("TableOfContents",{attrs:{processes:e.processes,config:e.$props}}),t("RelatedLinks",{attrs:{links:e.links}})],1):e._e(),t("main",{staticClass:"content-container",class:{toc:e.showTableOfContents}},[t("Processes",{attrs:{processes:e.processes,config:e.$props}})],1)]):t("div",{staticClass:"fileChooser"},[t("p",[e._v(" Sorry, can't automatically read files from the local file system. Please specify the file to load here: "),t("input",{attrs:{type:"file"},on:{change:e.loadLocalFile}})])])])},n=[],c=(t("ac1f"),t("466d"),t("53ca")),i=t("bc3a"),a=t.n(i),l=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"toc"},[t("h2",[e._v(e._s(e.config.title))]),t("div",{staticClass:"search-box"},[t("span",{staticClass:"icon"},[e._v("🔎")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTerm,expression:"searchTerm"}],attrs:{type:"search",placeholder:"Search in process names"},domProps:{value:e.searchTerm},on:{input:function(s){s.target.composing||(e.searchTerm=s.target.value)}}})]),e.config.categorize?t("ProcessesListCategorized",{attrs:{processes:e.processes,searchTerm:e.searchTerm,config:e.config}}):t("ProcessesList",{attrs:{processes:e.processes,searchTerm:e.searchTerm,config:e.config}})],1)},u=[],f=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("nav",{staticClass:"list"},[t("ul",{staticClass:"processes-list"},e._l(e.filteredProcesses,(function(s,r){return t("li",{key:r},[t("a",{class:{experimental:s.experimental,deprecated:s.deprecated},attrs:{href:"#"+s.id}},[e._v(e._s(s.id))]),t("summary",[e._v(e._s(s.summary))])])})),0),0===e.filteredProcesses.length?t("strong",{staticClass:"no-processes-found"},[e._v("No processes found.")]):e._e()])},p=[],d=(t("4de4"),t("caad"),t("2532"),{name:"ProcessesList",props:["processes","searchTerm"],data:function(){return{filteredProcesses:this.processes||[]}},watch:{processes:function(){this.filteredProcesses=this.processes},searchTerm:function(){var e=this;this.searchTerm?this.filteredProcesses=this.processes.filter((function(s){return s.id.toLowerCase().includes(e.searchTerm.toLowerCase())})):this.filteredProcesses=this.processes}}}),h=d,g=(t("1ddb"),t("2877")),m=Object(g["a"])(h,f,p,!1,null,"b4abaabc",null),v=m.exports,y=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("nav",{staticClass:"categories"},[t("div",{staticClass:"toggle-all-controls"},[t("a",{on:{click:e.expandAll}},[e._v("Expand all")]),e._v(" | "),t("a",{on:{click:e.collapseAll}},[e._v("Collapse all")])]),e._l(e.sortedCategories,(function(s){return t("ProcessesListCategory",{key:s,ref:"categoryElements",refInFor:!0,attrs:{name:s,processIndices:e.categories[s],processes:e.filteredProcesses,config:e.config}})})),0===e.filteredProcesses.length?t("strong",{staticClass:"no-processes-found"},[e._v("No processes found")]):e._e()],2)},b=[],_=(t("b64b"),function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{class:{category:!0,expanded:e.expanded}},[t("strong",{on:{click:function(s){return e.toggle()}}},[t("span",{staticClass:"toggle"},[e._v("▸")]),e._v(" "+e._s(e.displayName)+" ("+e._s(e.processCount)+")")]),t("ul",{staticClass:"processes-list"},e._l(e.processIndices,(function(s){return t("li",{key:s},[t("a",{class:{experimental:e.processes[s].experimental,deprecated:e.processes[s].deprecated},attrs:{href:"#"+e.processes[s].id}},[e._v(e._s(e.processes[s].id))]),t("summary",[e._v(e._s(e.processes[s].summary))])])})),0)])}),P=[],C=(t("b0c0"),t("5319"),{name:"ProcessesListCategory",props:["processes","name","processIndices","config"],data:function(){return{expanded:!1}},computed:{sortedCategories:function(){var e=Object.keys(this.categories);return e.sort()},displayName:function(){return this.name.replace("_"," ")},processCount:function(){return this.processIndices.length}},methods:{toggle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.expanded=null===e?!this.expanded:e}}}),w=C,k=(t("400e"),Object(g["a"])(w,_,P,!1,null,"85a766a2",null)),T=k.exports,O={name:"ProcessesListCategorized",components:{ProcessesListCategory:T},props:["processes","searchTerm","config"],data:function(){return{categories:{},uncategorizedName:"uncategorized",filteredProcesses:this.processes||[]}},mounted:function(){this.filter()},computed:{sortedCategories:function(){var e=Object.keys(this.categories);return e.sort()}},watch:{processes:function(){Array.isArray(this.processes)&&this.filter()},searchTerm:function(){this.filter()}},methods:{expandAll:function(){this.toggleAll(!0)},collapseAll:function(){this.toggleAll(!1)},toggleAll:function(e){for(var s in this.$refs.categoryElements)this.$refs.categoryElements[s].toggle(e)},filter:function(){var e=this;this.searchTerm?(this.filteredProcesses=this.processes.filter((function(s){return s.id.toLowerCase().includes(e.searchTerm.toLowerCase())})),this.categorize(),this.$nextTick((function(){return e.expandAll()}))):(this.filteredProcesses=this.processes,this.categorize(),this.$nextTick((function(){return e.collapseAll()})))},categorize:function(){for(var e in this.categories={},this.filteredProcesses){var s=this.filteredProcesses[e];for(var t in Array.isArray(s.categories)||(s.categories=[this.uncategorizedName]),s.categories){var r=s.categories[t];"object"!==Object(c["a"])(this.categories[r])&&(this.categories[r]=[]),this.categories[r].push(e)}}}}},x=O,L=(t("28c4"),Object(g["a"])(x,y,b,!1,null,"6e65a53d",null)),j=L.exports,A={name:"TableOfContents",components:{ProcessesList:v,ProcessesListCategorized:j},props:["processes","config"],data:function(){return{searchTerm:""}}},$=A,z=(t("02ca"),Object(g["a"])($,l,u,!1,null,"0371a1d9",null)),S=z.exports,D=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"related-links"},[t("LinkList",{attrs:{links:e.links,heading:"Related Links",headingTag:"h3"}})],1)},E=[],I=t("4845"),B={name:"RelatedLinks",components:{LinkList:I["a"]},props:["links"]},N=B,R=(t("23f8"),Object(g["a"])(N,D,E,!1,null,"39a498a5",null)),V=R.exports,M=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"processes-container"},e._l(e.processes,(function(s,r){return t("Process",{key:r,attrs:{processData:s,version:e.config.apiVersion,provideDownload:e.config.provideDownload,processReferenceBuilder:e.buildProcessLinks}})})),1)},F=[],J=t("2b37"),U={name:"Processes",components:{Process:J["a"]},props:["processes","config"],methods:{buildProcessLinks:function(e){return'<code><a class="process-link" href="#'+e+'">'+e+"</a></code>"}}},q=U,G=(t("1ff4"),Object(g["a"])(q,M,F,!1,null,null,null)),H=G.exports,K=t("fbda"),Q={document:null,apiVersion:null,title:"Processes",sortProcessesById:!0,categorize:!0,provideDownload:!0,showTableOfContents:!0},W={name:"DocGen",components:{TableOfContents:S,RelatedLinks:V,Processes:H},props:{title:{type:String,default:Q.title},document:{type:String|Array|Object,default:Q.document},apiVersion:{type:String,default:Q.apiVersion},sortProcessesById:{type:Boolean,default:Q.sortProcessesById},categorize:{type:Boolean,default:Q.categorize},provideDownload:{type:Boolean,default:Q.provideDownload},showTableOfContents:{type:Boolean,default:Q.showTableOfContents}},data:function(){return{processes:[],links:[]}},watch:{processes:function(){var e=this;this.$nextTick((function(){e.moveToAnchor()}))}},computed:{isLocalDocument:function(){return"file:"===window.location.protocol&&!this.document.match(/^https?:/i)}},beforeMount:function(){this.changeDocument()},mounted:function(){document.title=this.title},methods:{loadLocalFile:function(e){var s=this,t=new FileReader;t.onload=function(){try{s.setProcesses(JSON.parse(t.result))}catch(e){alert(e.message),console.error(e)}},t.readAsText(e.target.files[0])},changeDocument:function(){var e=this;"string"===typeof this.document&&this.document.length>0?this.isLocalDocument||a.a.get(this.document).then((function(s){return e.setProcesses(s.data)})).catch((function(e){return console.error(e)})):"object"===Object(c["a"])(this.document)&&null!==this.document?this.setProcesses(this.document):console.error("Specified document is not a URL, array or object.")},setProcesses:function(e){this.links=[],Array.isArray(e)?this.processes=e:K["Utils"].isObject(e)&&Array.isArray(e.processes)?(this.processes=e.processes,Array.isArray(e.links)&&(this.links=e.links)):console.error("Invalid document specified, can't find processes."),!0===this.sortProcessesById&&this.processes.sort((function(e,s){var t=e.id.toLowerCase(),r=s.id.toLowerCase();return t<r?-1:t>r?1:0}))},moveToAnchor:function(){if("string"===typeof window.location.hash&&window.location.hash.length>1){var e=window.location.hash.substring(1),s=this.$el.querySelector("a[name="+e+"]");s&&s.scrollIntoView()}}}},X=W,Y=(t("8551"),Object(g["a"])(X,o,n,!1,null,null,null)),Z=Y.exports;r["a"].config.productionTip=!1,new r["a"]({el:"#app",render:function(e){return e(Z,{props:{document:"processes.json",apiVersion:"1.0.0"}})}})},"622e":function(e,s,t){},7862:function(e,s,t){},8551:function(e,s,t){"use strict";var r=t("7862"),o=t.n(r);o.a},"8a89":function(e,s,t){},"8fa0":function(e,s,t){},"8ffa":function(e,s,t){},b829:function(e,s,t){}});