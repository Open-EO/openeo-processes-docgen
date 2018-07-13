<template>
	<div class="schemaElement">
		<SchemaObjectElement v-if="schema.type == 'object'" :schema="schema" :components="components" />
		<!-- ToDo: Circular references lead to endless loop -->
		<table class="schemaAttrs" v-else>
			<tr v-for="(val, key) in schema" :key="key">
				<td class="key">{{ key }}</td>
				<td class="value">
					<i class="fas fa-check" v-if="key != 'default' && key != 'example' && val === true" title="true"></i>
					<i class="fas fa-times" v-else-if="key != 'default' && key != 'example' && val === false" title="false"></i>
					<ul v-else-if="Array.isArray(val)" class="csList">
						<li v-for="(v, k) in val" :key="k">{{ v }}</li>
					</ul>
					<div v-else-if="key == 'description'" class="description" v-html="$utils.markup(val)"></div>
					<code v-else-if="key == 'pattern'">{{ val }}</code>
					<SchemaElement v-else-if="typeof val === 'object'" :schema="val" :components="components" />
					<span v-else>{{ val }}</span>
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
import EventBus from '../eventbus.js';
import SchemaObjectElement from './SchemaObjectElement.vue';

export default {
	name: 'SchemaElement',
	props: ['schema'],
	components: {
		SchemaObjectElement
	}
}
</script>

<style>
.schemaElement {
	background-color:rgba(0, 0, 0, 0.1);
	padding: 0.25%;
	width: 99%;
}
.schemaName {
	display: inline-block;
	border-bottom: 1px dotted black;
}
.schemaAttrs {
	width: 100%;
}
.schemaAttrs .key {
	min-width: 80px;
	width: 8%;
	font-family: monospace;
}
.schemaAttrs .value {
	width: 90%;
}
</style>