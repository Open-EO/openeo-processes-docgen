<template>
	<div class="docgen">
		<div class="fileChooser" v-if="isLocalDocument && !processes.length && !links.length">
			<p>
				Sorry, can't automatically read files from the local file system.
				Please specify the file to load here:
				<input type="file" @change="loadLocalFile" />
			</p>
		</div>
		<div v-else class="page-container">
			<aside class="menu-container" v-if="showTableOfContents">
				<TableOfContents :processes="processes" :config="$props" />
				<RelatedLinks :links="links" />
			</aside>
			<main class="content-container" :class="{toc: showTableOfContents}">
				<Processes :processes="processes" :config="$props" />
			</main>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import TableOfContents from './components/TableOfContents.vue';
import RelatedLinks from './components/RelatedLinks.vue';
import Processes from './components/Processes.vue';
import { Utils } from '@openeo/js-commons';
import BaseConfig from './config.js';

export default {
	name: 'DocGen',
	components: {
		TableOfContents,
		RelatedLinks,
		Processes
	},
	props: {
		title: {
			type: String,
			default: BaseConfig.title
		},
		document: {
			type: String | Array | Object,
			default: BaseConfig.document
		},
		apiVersion: {
			type: String,
			default: BaseConfig.apiVersion
		},
		sortProcessesById: {
			type: Boolean,
			default: BaseConfig.sortProcessesById
		},
		categorize: {
			type: Boolean,
			default: BaseConfig.categorize
		},
		provideDownload: {
			type: Boolean,
			default: BaseConfig.provideDownload
		},
		showTableOfContents: {
			type: Boolean,
			default: BaseConfig.showTableOfContents
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
	computed: {
		isLocalDocument() {
			return window.location.protocol === 'file:' && !this.document.match(/^https?:/i);
		}
	},
	beforeMount() {
		this.changeDocument();
	},
	mounted() {
		document.title = this.title;
	},
	methods: {
		loadLocalFile(event) {
			const reader = new FileReader();
			reader.onload = () => {
				try {
					this.setProcesses(JSON.parse(reader.result));
				} catch (error) {
					alert(error.message);
					console.error(error);
				}
			};
			reader.readAsText(event.target.files[0]);
		},
		changeDocument() {
			if (typeof this.document === 'string' && this.document.length > 0) {
				if(!this.isLocalDocument) {
					axios.get(this.document)
						.then(response => this.setProcesses(response.data))
						.catch(error => console.error(error));
				}
			}
			else if (typeof this.document === 'object' && this.document !== null) {
				this.setProcesses(this.document);
			}
			else {
				console.error('Specified document is not a URL, array or object.');
			}
		},
		setProcesses(data) {
			this.links = [];
			if (Array.isArray(data)) {
				// Plain array with processes, convert to openEO API response object.
				this.processes = data;
			}
			else if (Utils.isObject(data) && Array.isArray(data.processes)) {
				this.processes = data.processes;
				if (Array.isArray(data.links)) {
					this.links = data.links;
				}
			}
			else {
				console.error("Invalid document specified, can't find processes.");
			}

			// Sort processes
			if (this.sortProcessesById === true) {
				this.processes.sort((a, b) => {
					var s1 = a.id.toLowerCase();
					var s2 = b.id.toLowerCase();
					return (s1 < s2 ? -1 : (s1 > s2 ? 1 : 0));
				});
			}
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

.docgen .fileChooser {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.docgen .fileChooser p {
	width: 25%;
}
.docgen .fileChooser input {
	margin-top: 0.5em;
	width: 100%;
}

.docgen .menu-container section {
	margin: 1em;
}
.docgen .menu-container ul {
	list-style-type: square;
	display: block;
	padding: 0;
}
.docgen .menu-container summary {
	font-size: 0.8em;
	margin-bottom: 0.5em;
}
.docgen .menu-container li {
	margin-left: 1em;
}
.docgen .menu-container li a {
	font-weight: bold;
}
.docgen .menu-container li a {
	font-weight: bold;
}
.docgen .content-container.toc {
	padding-top: 3em;
}

@media only screen and (min-width: 64em) {
	.docgen .page-container {
		display: flex;
		height: 100%;
	}
	.docgen .menu-container, .docgen .content-container {
		height: 100%;
		overflow-y: scroll;
	}
	.docgen .content-container.toc {
		flex: 6;
	}
	.docgen .content-container.toc {
		padding-top: 0;
	}
	.docgen .menu-container {
		flex: 2;
		border-right: 1px dotted #ccc;
	}
}

@media only screen and (min-width: 100em) {
	.docgen .content-container {
		flex: 4;
	}
	.docgen .menu-container {
		flex: 1;
	}
}
</style>