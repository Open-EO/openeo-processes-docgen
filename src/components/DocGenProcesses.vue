<template>
    <div id="docgen-processes">
		<ProcessPanel v-for="(process, key) in processes" :key="key" :process="process" />
	</div>
</template>

<script>
import ProcessPanel from './ProcessPanel.vue';

export default {
	name: 'DocGenProcesses',
	components: { ProcessPanel },
	props: ['processes']
}
</script>