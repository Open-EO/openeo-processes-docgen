(function(e){function t(t){for(var o,r,i=t[0],c=t[1],l=t[2],u=0,d=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);h&&h(t);while(d.length)d.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],o=!0,r=1;r<s.length;r++){var i=s[r];0!==a[i]&&(o=!1)}o&&(n.splice(t--,1),e=c(c.s=s[0]))}return e}var o={},r={app:0},a={app:0},n=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-1a5e51b5":"0d285851","chunk-67d91f7d":"5caea924","chunk-6f89b2a8":"8c867cf9","chunk-9abe1ace":"22c3da18","chunk-f7828c92":"4a3d1d7f","chunk-912d53a6":"f27ee656"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var s=o[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(e){var t=[],s={"chunk-1a5e51b5":1,"chunk-67d91f7d":1,"chunk-6f89b2a8":1,"chunk-9abe1ace":1,"chunk-f7828c92":1,"chunk-912d53a6":1};r[e]?t.push(r[e]):0!==r[e]&&s[e]&&t.push(r[e]=new Promise((function(t,s){for(var o="css/"+({}[e]||e)+"."+{"chunk-1a5e51b5":"9dbf94ca","chunk-67d91f7d":"10fe5a6b","chunk-6f89b2a8":"11c37d03","chunk-9abe1ace":"502968d0","chunk-f7828c92":"72f92fa8","chunk-912d53a6":"e032ea86"}[e]+".css",a=c.p+o,n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var l=n[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===o||u===a)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var o=t&&t.target&&t.target.src||a,n=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=o,delete r[e],h.parentNode.removeChild(h),s(n)},h.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise((function(t,s){o=a[e]=[t,s]}));t.push(o[2]=n);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(h);var s=a[e];if(0!==s){if(s){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,s[1](d)}a[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(s,o,function(t){return e[t]}.bind(null,o));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/openeo-processes-docgen/demo/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var h=u;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"56d7":function(e,t,s){"use strict";s.r(t);var o=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"docgen"},[!e.isLocalDocument||e.processes.length||e.links.length?s("div",{staticClass:"page-container"},[e.showTableOfContents?s("aside",{staticClass:"menu-container"},[s("section",{staticClass:"toc"},[s("h2",[e._v(e._s(e.title))]),s("SearchBox",{attrs:{placeholder:"Search in processes"},model:{value:e.searchTerm,callback:function(t){e.searchTerm=t},expression:"searchTerm"}}),s("ul",{staticClass:"controls"},[e.showCategories?s("li",[s("a",{attrs:{title:"Expand all"},on:{click:e.expandAll}},[s("i",{staticClass:"fas fa-angle-double-down"})])]):e._e(),e.showCategories?s("li",[s("a",{attrs:{title:"Collapse all"},on:{click:e.collapseAll}},[s("i",{staticClass:"fas fa-angle-double-up"})])]):e._e(),e.showCategories?s("li",[s("a",{attrs:{title:"Hide Categories"},on:{click:e.switchCategoryView}},[s("i",{staticClass:"fas fa-list-ol"})])]):s("li",[s("a",{attrs:{title:"Show Categories"},on:{click:e.switchCategoryView}},[s("i",{staticClass:"fas fa-folder"})])])]),e.showCategories?[e._l(e.categories,(function(t){return s("Processes",{key:t.id,ref:"categories",refInFor:!0,staticClass:"categories",attrs:{processes:t.processes,searchTerm:e.searchTerm,offerDetails:!1,heading:t.id,collapsed:e.allCollapsedState},scopedSlots:e._u([{key:"summary",fn:function(t){var o=t.summary;return[s("a",{attrs:{href:"#"+o.identifier}},[s("strong",[e._v(e._s(o.identifier))])]),o.summary?s("small",[e._v(e._s(o.summary))]):e._e()]}}],null,!0)})})),e.hasResults?e._e():s("p",[e._v("No search results found.")])]:s("Processes",{attrs:{processes:e.processes,searchTerm:e.searchTerm,offerDetails:!1,heading:null},scopedSlots:e._u([{key:"summary",fn:function(t){var o=t.summary;return[s("a",{attrs:{href:"#"+o.identifier}},[s("strong",[e._v(e._s(o.identifier))])]),o.summary?s("small",[e._v(e._s(o.summary))]):e._e()]}}],null,!1,3961841355)})],2),s("section",{staticClass:"related-links"},[s("LinkList",{attrs:{links:e.links,heading:"Related Links",headingTag:"h3"}})],1)]):e._e(),s("main",{staticClass:"content-container",class:{toc:e.showTableOfContents}},[!e.hideNotice&&e.notice?s("div",{staticClass:"notice"},[s("Description",{attrs:{description:e.notice}}),s("button",{staticClass:"close",attrs:{type:"button",title:"Close"},on:{click:function(t){e.hideNotice=!0}}},[e._v("×")])],1):e._e(),e._l(e.processes,(function(t){return s("Process",{key:t.id,attrs:{process:t,provideDownload:e.provideDownload,sort:!1,processUrl:"#${}"}})}))],2)]):s("div",{staticClass:"fileChooser"},[s("p",[e._v(" Sorry, can't automatically read files from the local file system. Please specify the file to load here: "),s("input",{attrs:{type:"file"},on:{change:e.loadLocalFile}})])])])},a=[],n=s("bc3a"),i=s.n(n),c=s("60a2"),l={document:null,apiVersion:null,title:"Processes",sortProcessesById:!0,categorize:!0,uncategorizedName:"Uncategorized",provideDownload:!0,showTableOfContents:!0,notice:""},u=s("8088"),d=s("4845"),h=s("2b37"),f=s("9b5d"),p=s("d79f"),g=s("2979"),m=s("fbda"),y={name:"DocGen",components:{Description:u["default"],LinkList:d["default"],Process:h["default"],Processes:f["a"],SearchableList:p["default"],SearchBox:g["default"]},props:{title:{type:String,default:l.title},document:{type:[String,Array,Object],default:l.document},apiVersion:{type:String,default:l.apiVersion},sortProcessesById:{type:Boolean,default:l.sortProcessesById},categorize:{type:Boolean,default:l.categorize},provideDownload:{type:Boolean,default:l.provideDownload},showTableOfContents:{type:Boolean,default:l.showTableOfContents},uncategorizedName:{type:String,default:l.uncategorizedName},notice:{type:String,default:l.notice}},data(){return{hideNotice:!1,searchTerm:"",allCollapsedState:!0,hasResults:!0,showCategories:this.categorize,processes:[],categories:[],links:[],protocol:null}},watch:{document(){this.changeDocument()},async processes(){await this.$nextTick(),this.moveToAnchor()},searchTerm(){this.updateCategoryView()},showCategories(){this.updateCategoryView()}},computed:{isLocalDocument(){return"file:"===this.protocol&&!this.document.match(/^https?:/i)}},mounted(){document.title=this.title,this.loadLink("https://use.fontawesome.com/releases/v5.13.0/webfonts/fa-solid-900.woff2",{rel:"preload",crossorigin:!0,as:"font",type:"font/woff2"}),this.loadLink("https://use.fontawesome.com/releases/v5.13.0/css/all.css",{rel:"stylesheet",media:"all",type:"text/css"}),this.protocol=window?window.location.protocol:null,this.changeDocument()},methods:{loadLink(e,t={}){t.href=e;let s=document.createElement("link");for(let o in t)s.setAttribute(o,t[o]);document.head.appendChild(s)},loadLocalFile(e){const t=new FileReader;t.onload=()=>{try{this.setProcesses(JSON.parse(t.result))}catch(e){alert(e.message),console.error(e)}},t.readAsText(e.target.files[0])},changeDocument(){"string"===typeof this.document&&this.document.length>0?this.isLocalDocument||i.a.get(this.document).then(e=>this.setProcesses(e.data)).catch(e=>console.error(e)):"object"===typeof this.document&&null!==this.document?this.setProcesses(this.document):console.error("Specified document is not a URL, array or object.")},setProcesses(e){e=m["MigrateProcesses"].convertProcessesToLatestSpec(e,this.apiVersion),this.links=[],Array.isArray(e)?this.processes=e:c["a"].isObject(e)&&Array.isArray(e.processes)?(this.processes=e.processes,Array.isArray(e.links)&&(this.links=e.links)):console.error("Invalid document specified, can't find processes."),!0===this.sortProcessesById&&this.processes.sort((e,t)=>c["a"].compareStringCaseInsensitive(e.id,t.id)),this.categories=[];for(let t of this.processes){let e=Array.isArray(t.categories)&&t.categories.length>0?t.categories:[this.uncategorizedName];for(let s of e){s=s.replace("_"," ");let e=this.categories.findIndex(e=>e.id===s);e>=0?this.categories[e].processes.push(t):this.categories.push({id:s,processes:[t]})}}this.categories.sort((e,t)=>c["a"].compareStringCaseInsensitive(e.id,t.id))},moveToAnchor(){if("string"===typeof window.location.hash&&window.location.hash.length>1){var e=window.location.hash.substring(1),t=this.$el.querySelector("a[name="+e+"]");t&&t.scrollIntoView()}},switchCategoryView(){this.showCategories=!this.showCategories},expandAll(){this.toggleAll(!0)},collapseAll(){this.toggleAll(!1)},toggleAll(e){this.allCollapsedState=!e},async updateCategoryView(){await this.$nextTick(),this.hasResults=!0,this.toggleAll(this.searchTerm.length>=2),this.searchTerm.length>=2&&Array.isArray(this.$refs.categories)&&(this.hasResults=!!this.$refs.categories.find(e=>!e.$children[0].$el.classList.contains("noResults")))}}},w=y,v=(s("8551"),s("2877")),b=Object(v["a"])(w,r,a,!1,null,null,null),k=b.exports;o["a"].config.productionTip=!1,new o["a"]({el:"#app",render:e=>e(k,{props:{document:"processes.json",apiVersion:"1.0.0"}})})},7862:function(e,t,s){},8551:function(e,t,s){"use strict";s("7862")}});
//# sourceMappingURL=app.48205100.js.map