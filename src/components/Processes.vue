<template>
    <div class="processes-container">
		<Process v-for="(process, key) in processes" :key="key" :process="process" :config="config" />
	</div>
</template>

<script>
import Process from './Process.vue';

export default {
	name: 'Processes',
	components: {
		Process
	},
	props: ['processes', 'config']
}
</script>