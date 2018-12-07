<template>
	<div class="page-container">
		<aside class="menu-container">
			<TableOfContents :processes="preparedProcesses" :config="config" />
			<RelatedLinks :links="links" :config="config" />
		</aside>
		<main class="content-container">
			<Processes :processes="preparedProcesses" :config="config" />
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
	props: ['processes', 'links', 'config'],
	data() {
		return {
			preparedProcesses: []
		};
	},
	watch: {
		processes() {
			this.preparedProcesses = this.prepare(this.processes);
		}
	},
	methods: {
		prepare(processes) {
			console.log(Utils.convertProcessToLatestSpec);
			// Compatibility for openEO API v0.3 and v0.4
			processes = processes.map(Utils.convertProcessToLatestSpec);
			if (this.config.sortProcessesById === true) {
				processes.sort((a, b) => {
					var s1 = a.id.toLowerCase();
					var s2 = b.id.toLowerCase();
					return (s1 < s2 ? -1 : (s1 > s2 ? 1 : 0));
				});
			}
			return processes;
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
.content-container {
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
