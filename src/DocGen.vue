<template>
	<div id="docgen">
		<div id="toc">
			<h2>Processes</h2>
			<CategorizedProcessesList v-if="categorize" :processes="processes" />
			<ProcessesList v-else :processes="processes" />
			<div id="doclinks" v-if="links.length > 0">
				<h2>Related links</h2>
				<LinkList :links="links" />
			</div>
		</div>
		<div id="processes">
			<ProcessPanel v-for="(process, key) in processes" :key="key" :process="process" />
		</div>
	</div>
</template>

<script>
import EventBus from './eventbus.js';
import ProcessesList from './components/ProcessesList.vue';
import CategorizedProcessesList from './components/CategorizedProcessesList.vue';
import ProcessPanel from './components/ProcessPanel.vue';
import LinkList from './components/LinkList.vue';
import {fs} from 'fs';
import axios from 'axios';
import refParser from 'json-schema-ref-parser';
import Config from './config.js';

export default {
	name: 'DocGen',
	components: {
		ProcessesList,
		CategorizedProcessesList,
		ProcessPanel,
		LinkList
	},
	data() {
		var baseData = {
			document: null,
			sortProcessesByName: true,
			categorize: false,
			processes: null,
			links: []
		};
		var instanceData = {};
		for (var key in baseData) {
			if (typeof this.$parent.$options[key] !== 'undefined') {
				instanceData[key] = this.$parent.$options[key];
			}
		}
		var data = Object.assign(baseData, Config, instanceData);
		// For backward compatibility
		if (typeof window.processesDocument === 'string') {
			data.document = window.processesDocument;
		}
		return data;
	},
	created() {
		EventBus.$on('changeDocument', this.changeDocument);
	},
	mounted() {
		if (typeof this.document === 'string' && this.document.length > 0) {
			EventBus.$emit('changeDocument', this.document);
		}
		else if (typeof this.processes === 'object') {
			refParser.dereference(this.processes)
				.then(schema => {
					this.processes = this.prepare(schema);
					EventBus.$emit('dataChanged');
				})
				.catch(error => {
					console.log(error);
				});
		}
		else {
			console.error('No data specified.');
		}
	},
	methods: {

		changeDocument(uri) {
			axios.get(uri)
				.then(response => {
					return refParser.dereference(response.data);
				})
				.then(schema => {
					if (Array.isArray(schema)) {
						// Plain array with processes, convert to openEO API response object.
						schema = {
							processes: schema,
							links: []
						};
					}
					else if (typeof schema.processes == 'object' && typeof schema.links === 'object') {
						// Response from the openEO API, nothing to do
					}
					else {
						throw "Invalid document specified, can't find processes.";
					}
					this.processes = this.prepare(schema.processes);
					if (Array.isArray(schema.links)) {
						this.links = schema.links;
					}
					EventBus.$emit('dataChanged');
				})
				.catch(error => {
					console.log(error);
				});
		},

		prepare(processes) {
			if (this.sortProcessesByName === true) {
				processes.sort((a, b) => {
					var s1 = a.name.toLowerCase();
					var s2 = b.name.toLowerCase();
					return (s1 < s1 ? -1 : s1 > s2 ? 1 : 0);
				});
			}
			return processes;
		}

	}
}
</script>

<style>
html, body {
	height: 100%;
}
html {
	font-size: 62.5%;
}
body {
	margin: 0;
}
#docgen {
	font-family: sans-serif;
	font-size: 1.5rem;
	margin: 0;
	padding: 0;
}
#docgen table {
	font-size: 1.5rem;
}
#docgen h2 {
	font-size: 2.5rem;
	padding: 0.5rem 0 0.5rem 0;
	margin: 0 0 1.5rem 0;
	border-bottom: 1px dotted #ccc;
}
#docgen h3 {
	font-size: 2rem;
	margin: 1rem 0 0.5rem 0;
}
#docgen h4 {
	margin: 1rem 0 0.5rem 0;
	font-size: 1.7rem;
}
#docgen h5 {
	margin: 1rem 0 0.5rem 0;
	font-size: 1.6rem;
}
#docgen h6 {
	margin: 1rem 0 0.5rem 0;
	font-size: 1.5rem;
}
#docgen p {
	margin: 0 0 0.75rem 0;
}
#docgen td p {
	margin: 0.25rem 0;
}
#docgen li p {
	margin: 0;
}
#docgen a {
	color: #2F649A;
	text-decoration: none;
	cursor: pointer;
}
#docgen a:hover {
	color: black;
}
#docgen button {
	margin: 1px;
}
#docgen ul, #docgen ol {
	margin-bottom: 0;
	margin-top: 0;
	padding-bottom: 0;
	padding-top: 0;
}
#toc {
	border-right: 1px dotted #ccc;
}
#toc h2 {
	margin: 1.5rem;
}
#toc ul {
	list-style-type: circle;
	display: block;
	margin: 1.5rem;
	margin-bottom: 6rem;
	padding: 0;
}
#toc li {
	margin-left: 1.75rem;
}
#toc li a {
	font-weight: bold;
}
#toc li a {
	font-weight: bold;
}
#toc li span {
	display: block;
	margin-bottom: 0.75rem;
	font-size: 1.2rem;
}

@media only screen and (min-width: 64em) {
	#docgen, #toc {
		height: 100%;
	}

	#processes {
		float: right;
		width: 80%;
	}
	#toc {
		overflow-y: auto;
		width: 20%;
		float: left;
		position: fixed;
		z-index: 10;
		border-right: 1px dotted #ccc;
	}
	#toc ul {
		margin-bottom: 1.5em;
	}
}

@media only screen and (min-width: 100em) {
	html {
		font-size: 68.75%;
	}
}

@media only screen and (min-width: 125em) {
    html {
		font-size: 75%;
	}
}
.csList {
  display: inline;
  list-style: none;
  padding: 0;
}
.csList li {
  display: inline;
  padding: 0;
}
.csList li:after {
  content: ", ";
}
.csList li:last-child:after {
    content: "";
}
.required {
	color: blue;
	font-weight: bold;
}
</style>
