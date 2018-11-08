<template>
	<div id="docgen">
		<div id="toc">
			<ul>
				<li v-for="(process, key) in processes" :key="key">
					<a :href="'#' + process.name">{{ process.name }}</a>
					<span>{{ process.summary }}</span>
				</li>
			</ul>
		</div>
		<div id="processes">
			<ProcessPanel v-for="(process, key) in processes" :key="key" :process="process" />
		</div>
	</div>
</template>

<script>
import EventBus from './eventbus.js';
import ProcessPanel from './components/ProcessPanel.vue';
import {fs} from 'fs';
import axios from 'axios';
import refParser from 'json-schema-ref-parser';
import Config from './config.js';

export default {
	name: 'DocGen',
	components: {
		ProcessPanel
	},
	data() {
		var baseData = {
			document: null,
			sortProcessesByName: true,
			processes: {}
		};
		var data = Object.assign(baseData, Config.document, this.$parent.$options);
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
		else {
			console.error('No document specified.');
		}
	},
	methods: {

		changeDocument(uri) {
			axios.get(uri)
				.then(response => {
					refParser.dereference(response.data)
						.then(schema => {
							this.processes = this.prepare(schema);
							EventBus.$emit('documentChanged');
						})
						.catch(error => {
							console.error(error);
						});
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
html, body, #docgen, #toc {
	height: 100%;
}
body {
	margin: 0;
}
#docgen {
	font-family: sans-serif;
	font-size: 11pt;
	margin: 0;
	padding: 0;
}
#toc {
	margin: 1rem 0;
	overflow-y: auto;
	width: 20%;
	float: left;
	position: fixed;
	z-index: 10;
	border-right: 1px dotted #ccc;
}
#toc ul {
	list-style-type: none;
	display: block;
	margin: 1rem;
	padding: 0;
}
#toc li a {
	font-weight: bold;
}
#toc li a {
	font-weight: bold;
}
#toc li span {
	display: block;
	margin-bottom: 0.5rem;
	font-size: 0.8rem;
}
#processes {
	float: right;
	width: 80%;
}
#docgen p {
	margin: 0 0 0.5rem 0;
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
