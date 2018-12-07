<template>
	<div class="process-example">
		<h4>
			<code>{{ id }}</code>
			<template v-if="example.summary"> — {{ example.summary }}</template>
		</h4>

		<div class="content">
			<Description :description="example.description" />

			<div class="process-graph">
				<Description :description="toMarkdown(example.process_graph)" />
			</div>
		</div>
	</div>
</template>

<script>
import Description from './Description.vue';

export default {
	name: 'ProcessExample',
	props: ['id', 'example'],
	components: {
		Description
	},
	methods: {
		toMarkdown(process_graph) {
			return "```json\n" + JSON.stringify(process_graph, null, 2) + "\n```";
		}
	}
}
</script>

<style scoped>
.content {
	border-left: 0.5em solid #ccc;
	border-bottom: 1px dotted #ccc;
	padding: 0.5em;
	margin-left: 1.5em;
}
.process-graph {
	background-color: #eee; 
	width: 100%;
	border: 1px solid #ccc;
	max-height: 15em;
	overflow-y: auto;
}
</style>