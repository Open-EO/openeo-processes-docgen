<template>
    <div class="processes-container">
		<Process v-for="(process, key) in processes" :key="key" :process="process" :baseConfig="config" />
	</div>
</template>

<script>
import Process from './Process.vue';
import Utils from '../utils.js';

export default {
	name: 'Processes',
	components: {
		Process
	},
	props: ['processes', 'baseConfig'],
	computed: {
		config() {
			return Utils.setDefaults(this.baseConfig);
		}
	},
}
</script>