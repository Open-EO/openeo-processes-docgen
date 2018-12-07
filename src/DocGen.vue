<template>
	<div class="docgen">
		<Page :processes="processes" :links="links" :config="$props" />
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
			processes: null,
			links: []
		};
	},
	mounted() {
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
				.then(schema => {
					this.links = [];
					if (Array.isArray(schema)) {
						// Plain array with processes, convert to openEO API response object.
						this.processes = schema;
					}
					else if (typeof schema === 'object' && typeof schema.processes === 'object') {
						this.processes = schema.processes;
						if (Array.isArray(schema.links)) {
							this.links = schema.links;
						}
					}
					else {
						throw "Invalid document specified, can't find processes.";
					}
				})
				.catch(error => {
					console.log(error);
				});
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
	border-bottom: 1px dotted #ccc;
}
.docgen h3 {
	margin: 0.75em 0 0.25em 0;
	font-size: 1.4em;
}
.docgen h4 {
	margin: 0.5em 0 0.25em 0;
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
	margin: 0;
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

.docgen .signature .data-type {
	color: #693;
}
.docgen .signature .process-name, .docgen .signature .param-name {
	color: #369;
}
</style>