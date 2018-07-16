import Vue from 'vue';
import DocGen from './DocGen.vue';

Vue.config.productionTip = false;

new Vue({
	render: h => h(DocGen)
}).$mount('#app');