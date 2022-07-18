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
				<section class="toc">
					<h2>{{ title }}</h2>
					<SearchBox v-model="searchTerm" placeholder="Search in processes" />
					<ul class="controls">
						<li v-if="showCategories"><a @click="expandAll" title="Expand all"><i class="fas fa-angle-double-down"></i></a></li>
						<li v-if="showCategories"><a @click="collapseAll" title="Collapse all"><i class="fas fa-angle-double-up"></i></a></li>
						<li v-if="showCategories"><a @click="switchCategoryView" title="Hide Categories"><i class="fas fa-list-ol"></i></a></li>
						<li v-else><a @click="switchCategoryView" title="Show Categories"><i class="fas fa-folder"></i></a></li>
					</ul>
					<template v-if="showCategories">
						<Processes class="categories" v-for="category in categories" :key="category.id" ref="categories" :processes="category.processes" :searchTerm="searchTerm" :offerDetails="false" :heading="category.id" :collapsed="allCollapsedState">
							<template #summary="{ summary }">
								<a :href="'#' + summary.identifier"><strong>{{ summary.identifier }}</strong></a>
								<small v-if="summary.summary">{{ summary.summary }}</small>
							</template>
						</Processes>
						<p v-if="!hasResults">No search results found.</p>
					</template>
					<Processes v-else :processes="processes" :searchTerm="searchTerm" :offerDetails="false" :heading="null">
						<template #summary="{ summary }">
							<a :href="'#' + summary.identifier"><strong>{{ summary.identifier }}</strong></a>
							<small v-if="summary.summary">{{ summary.summary }}</small>
						</template>
					</Processes>
				</section>
				<section class="related-links">
					<LinkList :links="links" heading="Related Links" headingTag="h3" />
				</section>
			</aside>
			<main class="content-container" :class="{toc: showTableOfContents}">
				<div class="notice" v-if="!hideNotice && notice">
					<Description :description="notice" />
					<button type="button" class="close" title="Close" @click="hideNotice = true">×</button>
				</div>
				<Process ref="processes" v-for="process in processes" :key="process.id" :process="process" :provideDownload="provideDownload" :sort="false" processUrl="#${}">
					<template #title="p">
						<a class="anchor" :name="process.id"></a>
						<h2>
							{{ process.id }}
							<template v-if="canCopy">
								<span v-if="copied === process.id" class="copy success" title="Copied to clipboard"><i class="fas fa-clipboard-check"></i></span>
								<span v-else class="copy" @click="copyLink(process.id)" title="Copy link for this process"><i class="fas fa-clipboard"></i></span>
							</template>
							<span class="namespace" v-if="p.displayableNamespace"> — {{ p.displayableNamespace }}</span>
						</h2>
					</template>
				</Process>
			</main>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import Utils from '@openeo/vue-components/utils';
import BaseConfig from './config.js';
import Description from '@openeo/vue-components/components/Description.vue';
import LinkList from '@openeo/vue-components/components/LinkList.vue';
import Process from '@openeo/vue-components/components/Process.vue';
import Processes from '@openeo/vue-components/components/Processes.vue';
import SearchableList from '@openeo/vue-components/components/SearchableList.vue';
import SearchBox from '@openeo/vue-components/components/SearchBox.vue';
import { MigrateProcesses } from '@openeo/js-commons';

export default {
	name: 'DocGen',
	components: {
		Description,
		LinkList,
		Process,
		Processes,
		SearchableList,
		SearchBox
	},
	props: {
		title: {
			type: String,
			default: BaseConfig.title
		},
		document: {
			type: [String, Array, Object],
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
		},
		uncategorizedName: {
			type: String,
			default: BaseConfig.uncategorizedName,
		},
		notice: {
			type: String,
			default: BaseConfig.notice
		}
	},
	data() {
		return {
			hideNotice: false,
			searchTerm: '',
			allCollapsedState: true,
			hasResults: true,
            showCategories: this.categorize,
			processes: [],
			categories: [],
			links: [],
			protocol: null,
			copied: null,
			canCopy: navigator.clipboard && typeof navigator.clipboard.writeText === 'function'
		};
	},
	watch: {
		document() {
			this.changeDocument();
		},
		async processes() {
			await this.$nextTick();
			this.moveToAnchor();
		},
		searchTerm() {
			this.updateCategoryView();
		},
		showCategories() {
			this.updateCategoryView();
		}
	},
	computed: {
		isLocalDocument() {
			return this.protocol === 'file:' && !this.document.match(/^https?:/i);
		}
	},
	mounted() {
		document.title = this.title;
		this.loadLink('https://use.fontawesome.com/releases/v5.13.0/webfonts/fa-solid-900.woff2', {
			rel: 'preload',
			crossorigin: true,
			as: 'font',
			type: 'font/woff2'
		});
		this.loadLink('https://use.fontawesome.com/releases/v5.13.0/css/all.css', {
			rel: 'stylesheet',
			media: 'all',
			type: 'text/css'
		});
		this.protocol = window ? window.location.protocol : null;
		this.changeDocument();
	},
	methods: {
		copyLink(process_id) {
			if (this.canCopy) {
				let url = new URL(window.location.href);
				url.hash = process_id;
				navigator.clipboard.writeText(url.toString())
					.then(() => {
						this.copied = process_id;
						setTimeout(() => this.copied = null, 2000);	
					})
					.catch(() => canCopy = false)
			}
		},
		loadLink(href, params = {}) {
			params.href = href;
			let link = document.createElement('link');
			for (let key in params) {
				link.setAttribute(key, params[key]);
			}
			document.head.appendChild(link);
		},
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
			// Plain array with processes, convert to openEO API response object.
			if (Array.isArray(data)) {
				data = {processes: data};
			}

			if (!Utils.isObject(data) || !Array.isArray(data.processes)) {
				console.error("Invalid document specified, can't find processes.");
			}

			data = MigrateProcesses.convertProcessesToLatestSpec(data, this.apiVersion);

			this.processes = data.processes;
			this.links = Array.isArray(data.links) ? data.links : [];

			// Sort processes
			if (this.sortProcessesById === true) {
				this.processes.sort((a,b) => Utils.compareStringCaseInsensitive(a.id, b.id));
			}

			// Map by categories
			this.categories = [];
			for(let process of this.processes) {
				let processCategories = (Array.isArray(process.categories) && process.categories.length > 0) ? process.categories : [this.uncategorizedName];
				for(let category of processCategories) {
					category = category.replace('_', ' ');
					let index = this.categories.findIndex(c => c.id === category);
					if (index >= 0) {
						this.categories[index].processes.push(process);
					}
					else {
						this.categories.push({
							id: category,
							processes: [
								process
							]
						});
					}
				}
			}

			// Sort categories
			this.categories.sort((a,b) => Utils.compareStringCaseInsensitive(a.id, b.id));
		},
		moveToAnchor() {
			if (typeof window.location.hash === 'string' && window.location.hash.length > 1) {
				var fragment = window.location.hash.substring(1);
				var element = this.$el.querySelector("a[name="+fragment+"]");
				if (element) {
					element.scrollIntoView();
				}
			}
		},
        switchCategoryView() {
            this.showCategories = !this.showCategories;
        },
		expandAll() {
			this.toggleAll(true);
		},
		collapseAll() {
			this.toggleAll(false);
		},
		toggleAll(expand) {
			this.allCollapsedState = !expand;
		},
		async updateCategoryView() {
			await this.$nextTick();
			this.hasResults = true;
			this.toggleAll(this.searchTerm.length >= 2);
			if (this.searchTerm.length >= 2 && Array.isArray(this.$refs.categories)) {
				this.hasResults = !!this.$refs.categories.find(vm => !vm.$children[0].$el.classList.contains('noResults'));
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
.docgen h2 .copy {
	color: #856404;
	cursor: pointer;
}
.docgen h2 .copy.success {
	color: #008000;
	cursor: auto;
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

.docgen .notice {
	margin: 0rem 3rem 1rem 2rem;
    padding: 1rem 3.5rem 1rem 1rem;
    border: 1px solid transparent;
    border-radius: .25rem;
	position: fixed;
	bottom: 0;
	color: #856404;
    background-color: #fff3cd;
    border-color: #856404;
}
.docgen .notice p:last-of-type {
	margin-bottom: 0;
}
.docgen .notice .close {
	position: absolute;
	top: 0;
	right: 0;
    font-size: 1.5em;
    padding: 0.5rem;
    margin: 0.5rem;
    font-weight: 700;
    line-height: 1;
    opacity: .5;
	background-color: transparent;
    border: 0;
    color: inherit;
	cursor: pointer;
}
.docgen .notice .close:hover {
	opacity: 1;
	outline: 0;
}

.docgen .categories h2 {
	display: block;
	text-transform: capitalize;
	font-size: 1em;
	cursor: pointer;
	border: 0;
	margin-top: 0;
	margin-bottom: 0;
}
.docgen .categories ul.list {
	margin-left: 0.5em;
    margin-top: 0.25em;
}
.docgen .categories ul.list li {
	margin-left: 0.5em;
}
.docgen .categories .noResults {
	display: none;
}

.docgen .process {
	margin: 1em;
	margin-bottom: 5em;
	padding: 0em;
}
@media only screen and (min-width: 1280px) {
	.docgen .process {
		margin-bottom: 10em;
	}
	.docgen .process h3 {
		margin-top: 2em;
	}
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
	margin-bottom: 0.5em;
}

.docgen .menu-container .controls {
	text-align: center;
	display: block;
	margin: 1em 0;
	padding: 0;
	list-style-type: none;
}
.docgen .menu-container .controls li {
	display: inline-block;
}
.docgen .menu-container .controls li a {
	font-weight: normal;
	background-color: chocolate;
	color: white;
	display: inline-block;
	margin: 0.25em 0.35em;
	padding: 0.25em 0.5em;
	border-radius: 3px;
}
.docgen .menu-container .controls li a:hover {
	background-color: black;
}

.docgen .vue-component.searchable-list ul.list > li > summary {
	line-height: inherit;
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
.docgen .related-links {
	margin-top: 4em;
	margin-bottom: 2em;
}

@media only screen and (min-width: 800px) {
	.docgen .related-links {
		margin-top: 3em;
		margin-bottom: 0;
	}
	.docgen .page-container {
		display: flex;
		height: 100%;
	}
	.docgen .menu-container, .docgen .content-container {
		height: 100%;
		overflow-y: scroll;
	}
	.docgen .content-container.toc {
		flex: 1;
	}
	.docgen .content-container.toc {
		padding-top: 0;
	}
	.docgen .menu-container {
		flex: 1;
		min-width: 250px;
		max-width: 25%;
		border-right: 1px dotted #ccc;
	}
}

@media only screen and (min-width: 1280px) {
	.docgen .menu-container {
		max-width: 20%;
	}
}
</style>