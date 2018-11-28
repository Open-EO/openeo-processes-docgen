<template>
	<ul class="processesList uncategorizedProcessesList">
		<li v-for="(process, key) in processes" :key="key">
			<a :href="'#' + process.id">{{ process.id }}</a>
			<span>{{ process.summary }}</span>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'ProcessesList',
	props: ['processes']
}
</script>