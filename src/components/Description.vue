<template>
	<div class="styled-description" v-html="markup(description)"></div>
</template>

<script>
import commonmark from 'commonmark';

export default {
	name: 'Description',
	props: ['description'],
	methods: {
		markup(text) {
			var reader = new commonmark.Parser();
			var writer = new commonmark.HtmlRenderer();
			var parsed = reader.parse(text);
			return writer.render(parsed);
		},
	}
}
</script>

<style>
.styled-description pre {
	background-color: #eee; 
	width: 100%;
	border: 1px solid #ccc;
	max-height: 15em;
	overflow-y: auto;
}
.styled-description pre code {
	display: block;
	margin: 0.5em;
}
</style>
