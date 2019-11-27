import Vue from 'vue';
import DocGen from './DocGen.vue';

Vue.config.productionTip = false;

new Vue({
	el: '#app',
	render: h => h(DocGen, { 
		props: {
			document: 'processes.json',
			apiVersion: '1.0.0'
		}
	})
});
