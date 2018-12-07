<template>
	<div :class="{ category: true, expanded: expanded }">
		<h3 @click="toggle()"><span class="toggle">❯</span> {{ displayName }} ({{ processCount }})</h3>
		<ul class="processes-list">
			<li v-for="pi in processIndices" :key="pi">
				<a :href="'#' + processes[pi].id">{{ processes[pi].id }}</a>
				<summary>{{ processes[pi].summary }}</summary>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'ProcessesListCategory',
	props: ['processes', 'name', 'processIndices', 'config'],
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
.category h3 {
	text-transform: capitalize;
	margin: 0.5em 0 0.25em 0;
	font-size: 1.1em;
	cursor: pointer;
}
.category h3 .toggle {
	display: inline-block;
	width: 0.5em;
}
.category.expanded h3 .toggle {
	transform: rotate(90deg);
}
.category .processes-list {
	display: none;
	margin-left: 1.5em;
    margin-top: 0em;
}
.category.expanded .processes-list {
	display: block;
}
.category li {
	margin-left: 0.5em;
}
</style>
