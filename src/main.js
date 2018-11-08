import Vue from 'vue';
import DocGen from './DocGen.vue';

Vue.config.productionTip = false;

new Vue({
	el: '#app',
	document: 'processes.json',
	render: h => h(DocGen)
});