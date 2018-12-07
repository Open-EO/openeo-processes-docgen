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
	margin: 0.5em;
}
</style>
