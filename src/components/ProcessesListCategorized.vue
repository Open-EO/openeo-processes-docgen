<template>
	<div class="categories">
		<div class="toggleAllControls"><a @click="expandAll">Expand all</a> | <a @click="collapseAll">Collapse all</a></div>
		<ProcessesListCategory v-for="category in sortedCategories" ref="categoryElements" :key="category" :name="category" :processIndices="categories[category]" :processes="processes" />
	</div>
</template>

<script>
import ProcessesListCategory from './ProcessesListCategory.vue';

export default {
	name: 'ProcessesListCategorized',
	components: {
		ProcessesListCategory
	},
	props: ['processes'],
	data() {
		return {
			categories: {},
			uncategorizedName: 'uncategorized'
		};
	},
	computed: {
		sortedCategories() {
			var c = Object.keys(this.categories);
			return c.sort();
		}
	},
	watch: {
		processes(newProcesses, old) {
			if (typeof newProcesses !== 'object') {
				return;
			}
			this.categories = {};
			for(var pi in newProcesses) {
				var process = newProcesses[pi];
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
		}
	}
}
</script>

<style scoped>
#doclinks h2 {
	margin-top: 2.5rem;
}
#docgen h3 {
	text-transform: capitalize;
	font-size: 1.75rem;
	margin-left: 1.5rem;
	margin-right: 1.5rem;
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
