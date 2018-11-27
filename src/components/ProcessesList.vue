<template>
	<ul class="processesList uncategorizedProcessesList">
		<li v-for="(process, key) in processes" :key="key">
			<a :href="'#' + process.name">{{ process.name }}</a>
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