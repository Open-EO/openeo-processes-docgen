<template>
	<div :class="{ category: true, expanded: expanded }">
		<strong @click="toggle()"><span class="toggle">❯</span> {{ displayName }} ({{ processCount }})</strong>
		<ul class="processes-list">
			<li v-for="pi in processIndices" :key="pi">
				<a :href="'#' + processes[pi].id" :class="{experimental: processes[pi].experimental, deprecated: processes[pi].deprecated}">{{ processes[pi].id }}</a>
				<summary>{{ processes[pi].summary }}</summary>
			</li>
		</ul>
	</div>
</template>

<script>
import Utils from '../utils.js';

export default {
	name: 'ProcessesListCategory',
	props: ['processes', 'name', 'processIndices', 'baseConfig'],
	data() {
		return {
			expanded: false
		};
	},
	computed: {
		config() {
			return Utils.setDefaults(this.baseConfig);
		},
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
.category strong {
	display: block;
	text-transform: capitalize;
	margin: 0.25em 0 0.25em 0;
	padding-left: 0.6em;
	font-size: 1em;
	cursor: pointer;
}
.category strong .toggle {
	display: inline-block;
	width: 0.6em;
	margin-left: -0.6em;
}
.category.expanded strong .toggle {
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

.experimental {
	color: blueviolet;
}
.deprecated {
	text-decoration: line-through;
}

</style>
