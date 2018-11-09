<template>
	<div class="processExample">
		<h4>
			<code>{{ id }}</code>
			<template v-if="example.summary"> — {{ example.summary }}</template>
		</h4>

		<div class="content">
			<DescriptionElement :description="example.description"></DescriptionElement>

			<div class="processGraph">
				<DescriptionElement :description="toMarkdown(example.process_graph)"></DescriptionElement>
			</div>
		</div>
	</div>
</template>

<script>
import DescriptionElement from './DescriptionElement.vue';

export default {
	name: 'ProcessExampleElement',
	props: ['id', 'example'],
	components: {
		DescriptionElement
	},
	methods: {
		toMarkdown(process_graph) {
			return "```json\n" + JSON.stringify(process_graph, null, 2) + "\n```";
		}
	}
}
</script>

<style scoped>
h4 {
	padding: 1em 0 0.25rem 0;
}
.content {
	border-left: 0.5rem solid #ccc;
	border-bottom: 1px dotted #ccc;
	padding: 0.5em;
}
.processGraph {
	background-color: #eee; 
	width: 100%;
	border: 1px solid #ccc;
	max-height: 300px;
	overflow-y: auto;
	font-size: 1.2rem;
}
</style>