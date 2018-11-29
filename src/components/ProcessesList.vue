<template>
	<div class="list navBlock">
		<ul class="processesList uncategorizedProcessesList">
			<li v-for="(process, key) in filteredProcesses" :key="key">
				<a :href="'#' + process.id">{{ process.id }}</a>
				<span>{{ process.summary }}</span>
			</li>
		</ul>
		<strong class="noProcessesFound" v-if="filteredProcesses.length === 0">No processes found.</strong>
	</div>
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