<template>
	<div class="category">
		<h3 @click="toggle()"><span class="toggle" v-text="expanded ? '-' : '+'"></span> {{ displayName }} ({{ processCount }})</h3>
		<ul :class="{ processesList: true, categorizedProcessesList: true, expanded: expanded }">
			<li v-for="pi in processIndices" :key="pi">
				<a :href="'#' + processes[pi].id">{{ processes[pi].id }}</a>
				<span>{{ processes[pi].summary }}</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'ProcessesListCategory',
	props: ['processes', 'name', 'processIndices'],
	data() {
		return {
			expanded: false
		};
	},
	computed: {
		sortedCategories() {
			var c = Object.keys(this.categories);
			return c.sort();
		},
		displayName() {
			return this.name.replace('_', ' ');
		},
		processCount() {
			return this.processIndices.length;
		}
	},
	methods: {
		toggle(expand = null) {
			this.expanded = expand === null ? !this.expanded : expand;
		}
	}
}
</script>

<style scoped>
#docgen h3 {
	text-transform: capitalize;
	font-size: 1.6rem;
	margin-left: 1.5rem;
	margin-right: 1.5rem;
	cursor: pointer;
}
#docgen h3 .toggle {
	display: inline-block;
	width: 1rem;
}
#toc ul {
	display: none;
    margin-top: 0em;
}
#toc ul.expanded {
	display: block;
}
</style>
