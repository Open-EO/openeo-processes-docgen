import Vue from 'vue';
import DocGen from './DocGen.vue';

Vue.config.productionTip = false;

new Vue({
	el: '#app',
	render: h => h(DocGen, {})
});
