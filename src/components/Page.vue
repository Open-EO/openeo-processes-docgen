<template>
	<div class="page-container">
		<aside class="menu-container" v-if="config.showTableOfContents">
			<TableOfContents :processes="preparedProcesses" :baseConfig="config" />
			<RelatedLinks :links="links" :baseConfig="config" />
		</aside>
		<main class="content-container" :class="{toc: config.showTableOfContents}">
			<Processes :processes="preparedProcesses" :baseConfig="config" />
		</main>
	</div>
</template>

<script>
import TableOfContents from './TableOfContents.vue';
import RelatedLinks from './RelatedLinks.vue';
import Processes from './Processes.vue';
import Utils from '../utils.js';

export default {
	name: 'DocGen',
	components: {
		TableOfContents,
		RelatedLinks,
		Processes
	},
	props: ['processes', 'links', 'baseConfig'],
	mounted() {
		document.title = this.config.title;
	},
	computed: {
		config() {
			return Utils.setDefaults(this.baseConfig);
		},
		preparedProcesses() {
			return Utils.normalizeProcesses(this.processes, this.config.apiVersion, this.config.sortProcessesById);
		}
	}
}
</script>

<style>
.menu-container section {
	margin: 1em;
}
.menu-container ul {
	list-style-type: square;
	display: block;
	padding: 0;
}
.menu-container summary {
	font-size: 0.8em;
	margin-bottom: 0.5em;
}
.menu-container li {
	margin-left: 1em;
}
.menu-container li a {
	font-weight: bold;
}
.menu-container li a {
	font-weight: bold;
}
.content-container.toc {
	padding-top: 3em;
}
</style>

<style scoped>
@media only screen and (min-width: 64em) {
	.page-container {
		display: flex;
		height: 100%;
	}
	.menu-container, .content-container {
		height: 100%;
		overflow-y: scroll;
	}
	.content-container {
		flex: 6;
		padding-top: 0;
	}
	.menu-container {
		flex: 2;
		border-right: 1px dotted #ccc;
	}
}

@media only screen and (min-width: 100em) {
	.content-container {
		flex: 4;
	}
	.menu-container {
		flex: 1;
	}
}
</style>
