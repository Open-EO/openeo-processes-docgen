<template>
	<div class="categories navBlock">
		<div class="toggleAllControls"><a @click="expandAll">Expand all</a> | <a @click="collapseAll">Collapse all</a></div>
		<ProcessesListCategory v-for="category in sortedCategories" ref="categoryElements" :key="category" :name="category" :processIndices="categories[category]" :processes="filteredProcesses" />
		<strong class="noProcessesFound" v-if="filteredProcesses.length === 0">No processes found</strong>
	</div>
</template>

<script>
import ProcessesListCategory from './ProcessesListCategory.vue';

export default {
	name: 'ProcessesListCategorized',
	components: {
		ProcessesListCategory
	},
	props: ['processes', 'searchTerm'],
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
#doclinks h2 {
	margin-top: 2.5rem;
}
#toc ul {
    margin-top: 0em;
}
.toggleAllControls {
	text-align: center;
}
.categorizedProcessesList {
	display: none;
}
.expanded {
	display: block;
}
</style>
