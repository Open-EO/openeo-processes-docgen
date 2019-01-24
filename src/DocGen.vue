<template>
	<div class="docgen">
		<Page :processes="processes" :links="links" :baseConfig="$props" />
	</div>
</template>

<script>
import axios from 'axios';
import BaseConfig from './config.js';
import Page from './components/Page.vue';

export default {
	name: 'DocGen',
	components: {
		Page
	},
	props: {
		document: {
			default: BaseConfig.document
		},
		sortProcessesById: {
			default: BaseConfig.sortProcessesById
		},
		categorize: {
			default: BaseConfig.categorize
		}
	},
	data() {
		return {
			processes: [],
			links: []
		};
	},
	watch: {
		processes() {
			this.$nextTick(() => {
				this.moveToAnchor();
			});
		}
	},
	beforeMount() {
		if (typeof this.document === 'string' && this.document.length > 0) {
			this.changeDocument(this.document);
		}
		else if (typeof this.processes !== 'object') {
			console.error('No data specified.');
		}
	},
	methods: {
		changeDocument(uri) {
			axios.get(uri)
				.then(response => response.data)
				.then(container => {
					this.links = [];
					if (Array.isArray(container)) {
						// Plain array with processes, convert to openEO API response object.
						this.processes = container;
					}
					else if (typeof container === 'object' && typeof container.processes === 'object') {
						this.processes = container.processes;
						if (Array.isArray(container.links)) {
							this.links = container.links;
						}
					}
					else {
						throw "Invalid document specified, can't find processes.";
					}
				})
				.catch(error => {
					console.log(error);
				});
		},
		moveToAnchor() {
			if (typeof window.location.hash === 'string' && window.location.hash.length > 1) {
				var fragment = window.location.hash.substring(1);
				var element = this.$el.querySelector("a[name="+fragment+"]");
				if (element) {
					element.scrollIntoView();
				}
			}
		}

	}
}
</script>

<style>
.docgen {
	height: 100%;
	font-family: "Roboto Sans", sans-serif;
	margin: 0;
	padding: 0;
}

.docgen code, .docgen pre .docgen kbd {
	font-family: "Roboto Mono", Consolas, monospace;
}

.docgen h2 {
	font-size: 1.75em;
	padding: 0.25em 0 0.25em 0;
	margin: 0 0 0.75em 0;
	border-bottom: 1px solid #ccc;
}
.docgen h3 {
	font-size: 1.4em;
	margin: 1.5em 0 0.75em 0;
	padding: 0.25em 0 0.25em 0;
	border-bottom: 1px dotted #ccc;
}
.docgen h4 {
	margin: 1.5em 0 0.25em 0;
	font-size: 1.2em;
}
.docgen h5 {
	margin: 0.5em 0 0.25em 0;
	font-size: 1.1em;
}
.docgen h6 {
	margin: 0.5em 0 0.25em 0;
	font-size: 1em;
}
.docgen p {
	margin: 0 0 0.75em 0;
}
.docgen td p {
	margin: 0.25em 0;
}
.docgen li p {
	margin: 0 0 0.25em 0;
}
.docgen a {
	color: #2F649A;
	text-decoration: none;
	cursor: pointer;
}
.docgen a:hover {
	color: black;
}

.docgen .no-processes-found {
	text-align: center;
	display: block;
}
</style>