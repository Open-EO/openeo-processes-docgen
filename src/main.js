import Vue from 'vue';
import Config from './config.js';
import DocGen from './DocGen.vue';
import utils from './utils.js';
import SchemaElement from './components/SchemaElement.vue';

Vue.prototype.$config = Config;
Vue.prototype.$utils = utils;

Vue.config.productionTip = false;

Vue.component('SchemaElement', SchemaElement);

window.App = new Vue({
	render: h => h(DocGen)
}).$mount('#app');