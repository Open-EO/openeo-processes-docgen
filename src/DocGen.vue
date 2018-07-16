<template>
	<div id="container">
		<h1>Processes</h1>
		<div id="toc">
			<ul>
				<li v-for="(process, key) in processes" :key="key">
					<a :href="'#' + process.name">{{ process.name }}</a>
					<span>{{ process.summary }}</span>
				</li>
			</ul>
		</div>
		<div id="content">
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
		return {
			document: window.processesDocument || Config.document,
			processes: {}
		};
	},
	created() {
		EventBus.$on('changeDocument', this.changeDocument);
	},
	mounted() {
		if (typeof this.document === 'string' && this.document.length > 0) {
			EventBus.$emit('changeDocument', this.document);
		}
	},
	methods: {

		changeDocument(uri) {
			axios.get(uri)
				.then(response => {
					refParser.dereference(response.data)
						.then(schema => {
							this.processes = schema;
							EventBus.$emit('documentChanged');
						})
						.catch(error => {
							console.error(error);
						});
				})
				.catch(error => {
					console.log(error);
				});
		}

	}
}
</script>

<style>
html, body, #app, #container {
	height: 100%;
}
body {
	font-family: sans-serif;
	font-size: 11pt;
	margin: 0;
	padding: 0;
}
h1 {
	position: fixed;
	z-index: 100;
	width: 100%;
	font-size: 2rem;
	padding: 0.5rem;
	margin: 0;
	background-color: #3f51b5;
	color: white;
}
h2 {
	font-size: 1.75rem;
	margin: 0.5rem 0;
}
h2 .summary {
	font-size: 1.5rem;
	margin-left: 1.5rem;
	font-style: italic;
}
h3, h4, h5, h6 {
	margin: 1rem 0 0.5rem 0;
}
h3 {
	font-size: 1.3rem;
}
h4 {
	font-size: 1.2rem;
}
h5 {
	font-size: 1.1rem;
}
h6 {
	font-size: 1rem;
}
#toc {
	height: calc(100% - 3.25rem);
	margin-top: 3.25rem;
	overflow-y: auto;
	width: 20%;
	float: left;
	position: fixed;
	z-index: 10;
}
#toc ul {
	display: block;
	margin: 0.5rem;
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
#content {
	float: right;
	width: 80%;
	margin-top: 3.25rem;
}
p {
	margin: 0 0 0.5rem 0;
}
li p {
	margin: 0;
}
a {
	color: #2F649A;
	text-decoration: none;
	cursor: pointer;
}
a:hover {
	color: black;
}
.anchor {
	position: relative;
	display: block;
	top: -4rem;
	visibility: hidden;
}
button {
	margin: 1px;
}
ul, ol {
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
