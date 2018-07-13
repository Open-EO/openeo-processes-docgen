<template>
	<div class="schemaObjectElement">
		<table class="objectProperties">
			<template v-if="filteredSchema !== null">
				<tr v-if="schema.properties">
					<th colspan="2">Schema Attributes:</th>
				</tr>
				<tr>
					<td colspan="2" class="inlineSchemaAttrs">
						<SchemaElement :schema="filteredSchema" />
					</td>
				</tr>
			</template>
			<tr v-if="schema.properties">
				<th colspan="2">Object Properties:</th>
			</tr>
			<tr v-for="(val, key) in schema.properties" :key="key">
				<td class="propKey">
					{{ key }}
					<strong class="required" v-if="schema.required && schema.required.indexOf(key) !== -1" title="required">*</strong>
				</td>
				<td class="value">
					<SchemaElement :schema="val" />
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
import EventBus from '../eventbus.js';

export default {
	name: 'SchemaObjectElement',
	props: ['schema'],
	computed: {
		filteredSchema() {
			var filtered = null;
			for(var key in this.schema) {
				if (key == 'required' || key == 'properties' || key == 'type') {
					continue;
				}
				if (filtered === null) {
					filtered = {};
				}
				filtered[key] = this.schema[key];
			}
			return filtered;
		}
	}
}
</script>

<style>
.inlineSchemaAttrs .schemaElement {
	background-color: transparent;
}
.objectProperties {
	margin: 0.5% 0.5% 0.5% 1%;
	width: 99%;
}
.objectProperties .propKey {
	font-style: italic;
	font-weight: bold;
	min-width: 80px;
	width: 8%;
}
</style>