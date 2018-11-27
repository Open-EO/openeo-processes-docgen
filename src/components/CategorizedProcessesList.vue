<template>
	<div class="categories">
		<div class="category" v-for="category in sortedCategories" :key="category">
			<h3>{{ category }}</h3>
			<ul class="processesList categorizedProcessesList">
				<li v-for="(pi, key) in categories[category]" :key="key">
					<a :href="'#' + processes[pi].name">{{ processes[pi].name }}</a>
					<span>{{ processes[pi].summary }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CategorizedProcessesList',
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
			console.log(this.categories);
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
</style>
