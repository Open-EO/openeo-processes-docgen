<template>
	<div class="schemaElement">
		<div v-if="schema.type == 'object'" class="schemaObjectElement">
			<table class="objectProperties">
				<template v-if="filteredObjectSchema !== null">
					<tr v-if="schema.properties">
						<th colspan="2">Schema Attributes:</th>
					</tr>
					<tr>
						<td colspan="2" class="inlineSchemaAttrs">
							<SchemaElement :schema="filteredObjectSchema"></SchemaElement>
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
						<SchemaElement :schema="val"></SchemaElement>
					</td>
				</tr>
			</table>
		</div>
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
					<DescriptionElement v-else-if="key == 'description'" :description="val"></DescriptionElement>
					<code v-else-if="key == 'pattern'">{{ val }}</code>
					<SchemaElement v-else-if="typeof val === 'object'" :schema="val"></SchemaElement>
					<span v-else>{{ val }}</span>
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
import EventBus from '../eventbus.js';
import DescriptionElement from './DescriptionElement.vue';

export default {
	name: 'SchemaElement',
	props: ['schema'],
	components: {
		DescriptionElement
	},
	computed: {
		filteredObjectSchema() {
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