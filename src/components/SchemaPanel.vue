<template>
	<div class="schemaContainer">
		<div class="content">
			<SchemaElement :schema="schema"></SchemaElement>
		</div>
	</div>
</template>

<script>
import EventBus from '../eventbus.js';
import SchemaElement from './SchemaElement.vue';

export default {
	name: 'SchemaPanel',
	props: ['schema'],
	components: {
		SchemaElement
	}
}
</script>

<style>
.schemaContainer th {
	padding: 0.5rem;
	text-align: left;
}
.schemaContainer td {
	padding: 0.5rem;
}
</style>