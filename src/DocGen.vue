<template>
	<div id="docgen">
		<div id="docgen-toc-and-links-container">
			<DocGenTOC :processes="processes" :categorize="categorize"></DocGenTOC>
			<DocGenLinks :links="links"></DocGenLinks>
		</div>
		<div id="docgen-processes-container">
			<DocGenProcesses :processes="processes"></DocGenProcesses>
		</div>
	</div>
</template>

<script>
import EventBus from './eventbus.js';
import axios from 'axios';
import Config from './config.js';
import DocGenTOC from './components/DocGenTOC.vue';
import DocGenLinks from './components/DocGenLinks.vue';
import DocGenProcesses from './components/DocGenProcesses.vue';
import { convertProcessToLatestSpec } from './utils.js';

export default {
	name: 'DocGen',
	components: {
		DocGenTOC,
		DocGenLinks,
		DocGenProcesses
	},
	props: {
		document: {
			default: function() { return this.$parent.$options.document || Config.document || null; }
		},
		sortProcessesById: {
			default: function() { return this.$parent.$options.sortProcessesById || Config.sortProcessesById || true; }
		},
		categorize: {
			default: function() { return this.$parent.$options.categorize || Config.categorize || false; }
		}
	},
	data() {
		return {
			processes: null,
			links: []
		};
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
				.then(response => response.data)
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
			// Compatibility for openEO API v0.3 and v0.4
			processes = processes.map(convertProcessToLatestSpec);
			if (this.sortProcessesById === true) {
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
#docgen-toc-and-links-container {
	border-right: 1px dotted #ccc;
}
#docgen-toc-and-links-container .navBlock {
	margin: 1.5rem;
}
#docgen-toc .noProcessesFound {
	text-align: center;
	display: block;
	margin: 1rem;
}
#docgen-toc #searchBox input, #docgen-toc #searchBox button {
	height: 1.9rem;
	font-size: 1.3rem;
	margin: 0;
	padding: 0.3rem;
	vertical-align: bottom;
	display: inline-block;
	border: 1px solid #cccc;
	box-sizing: content-box;
	background-color: #fff;

}
#docgen-toc #searchBox input {
	width: calc(100% - 3.4rem);
}
#docgen-toc #searchBox button {
	width: 1.9rem;
	border-left: 0;
}
#docgen-toc-and-links-container ul {
	list-style-type: square;
	display: block;
	padding: 0;
}
#docgen-toc-and-links-container li {
	margin-left: 1.75rem;
}
#docgen-toc-and-links-container li a {
	font-weight: bold;
}
#docgen-toc-and-links-container li a {
	font-weight: bold;
}
#docgen-toc-and-links-container li span {
	display: block;
	margin-bottom: 0.75rem;
	font-size: 1.2rem;
}

@media only screen and (min-width: 64em) {
	#docgen {
		display: flex;
	}
	#docgen, #docgen-toc-and-links-container {
		height: 100%;
	}
	#docgen-toc-and-links-container, #docgen-processes-container {
		height: 100vh;
		overflow-y: auto;
	}
	#docgen-processes-container {
		flex: 4;
	}
	#docgen-toc-and-links-container {
		flex: 1;
		height: 100vh;
		border-right: 1px dotted #ccc;
	}
	#docgen-toc-and-links-container #docgen-links {
		margin-top: 6rem;
	}
}

#docgen .csList {
  display: inline;
  list-style: none;
  padding: 0;
}
#docgen .csList li {
  display: inline;
  padding: 0;
}
#docgen .csList li:after {
  content: ", ";
}
#docgen .csList li:last-child:after {
    content: "";
}
#docgen .required {
	color: blue;
	font-weight: bold;
}
</style>
