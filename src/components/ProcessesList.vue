<template>
	<nav class="list">
		<ul class="processes-list">
			<li v-for="(process, key) in filteredProcesses" :key="key">
				<a :href="'#' + process.id" :class="{experimental: processes[pi].experimental, deprecated: processes[pi].deprecated}">{{ process.id }}</a>
				<summary>{{ process.summary }}</summary>
			</li>
		</ul>
		<strong class="no-processes-found" v-if="filteredProcesses.length === 0">No processes found.</strong>
	</nav>
</template>

<script>
export default {
	name: 'ProcessesList',
	props: ['processes', 'searchTerm'],
	data() {
		return {
			filteredProcesses: this.processes || []
		};
	},
	watch: {
		processes() {
			this.filteredProcesses = this.processes;
		},
		searchTerm() {
			if (this.searchTerm) {
				this.filteredProcesses = this.processes.filter(process => process.id.toLowerCase().includes(this.searchTerm.toLowerCase()));
			}
			else {
				this.filteredProcesses = this.processes;
			}
		}
	}
}
</script>

<style scoped>
.experimental {
	color: blueviolet;
}
.deprecated {
	text-decoration: line-through;
}
</style>
