<template>
	<nav class="categories">
		<div class="toggle-all-controls"><a @click="expandAll">Expand all</a> | <a @click="collapseAll">Collapse all</a></div>
		<ProcessesListCategory v-for="category in sortedCategories" ref="categoryElements" :key="category" :name="category" :processIndices="categories[category]" :processes="filteredProcesses" :config="config" />
		<strong class="no-processes-found" v-if="filteredProcesses.length === 0">No processes found</strong>
	</nav>
</template>

<script>
import ProcessesListCategory from './ProcessesListCategory.vue';

export default {
	name: 'ProcessesListCategorized',
	components: {
		ProcessesListCategory
	},
	props: ['processes', 'searchTerm', 'config'],
	data() {
		return {
			categories: {},
			uncategorizedName: 'uncategorized',
			filteredProcesses: this.processes || []
		};
	},
	computed: {
		sortedCategories() {
			var c = Object.keys(this.categories);
			return c.sort();
		}
	},
	watch: {
		processes() {
			if (typeof this.processes !== 'object') {
				return;
			}
			this.filter();
		},
		searchTerm() {
			this.filter();
		}
	},
	methods: {
		expandAll() {
			this.toggleAll(true);
		},
		collapseAll() {
			this.toggleAll(false);
		},
		toggleAll(expand) {
			for(var i in this.$refs.categoryElements) {
				this.$refs.categoryElements[i].toggle(expand);
			}
		},
		filter() {
			if (this.searchTerm) {
				this.filteredProcesses = this.processes.filter(process => process.id.toLowerCase().includes(this.searchTerm.toLowerCase()));
				this.categorize();
				this.$nextTick(() => this.expandAll());
			}
			else {
				this.filteredProcesses = this.processes;
				this.categorize();
				this.$nextTick(() => this.collapseAll());
			}
		},
		categorize() {
			this.categories = {};
			for(var pi in this.filteredProcesses) {
				var process = this.filteredProcesses[pi];
				if (!Array.isArray(process.categories)) {
					process.categories = [this.uncategorizedName];
				}
				for(var ci in process.categories) {
					var category = process.categories[ci];
					if (typeof this.categories[category] !== 'object') {
						this.categories[category] = [];
					}
					this.categories[category].push(pi);
				}
			}
		}
	}
}
</script>

<style scoped>
.toggle-all-controls {
	text-align: center;
	margin: 1em;
}
</style>
