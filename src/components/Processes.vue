<template>
    <div class="processes-container">
		<Process v-for="(process, key) in processes" :key="key" :processData="process" :version="config.apiVersion" :provideDownload="config.provideDownload" :processReferenceBuilder="buildProcessLinks" />
	</div>
</template>

<script>
import Process from '@openeo/vue-components/components/Process.vue';
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
	methods: {
		buildProcessLinks(pid) {
			return '<code><a class="process-link" href="#'+pid+'">'+pid+'</a></code>';
		}
	}
}
</script>

<style>
.docgen .process {
	margin: 1em;
	margin-bottom: 5em;
	padding: 0em;
}
@media only screen and (min-width: 100em) {
	.docgen .process {
		margin-bottom: 10em;
	}
	.docgen .process h3 {
		margin-top: 2em;
	}
}
</style>