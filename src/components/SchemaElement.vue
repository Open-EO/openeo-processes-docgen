<template>
	<div class="schemaElement" v-if="typeof schema === 'object' && schema !== null">
		<div v-if="schema.type == 'object' && typeof schema.properties =='object'" class="schemaObjectElement">
			<table class="objectProperties">
				<template v-if="filteredObjectSchema !== null">
					<tr v-if="schema.properties">
						<th colspan="2">Attributes:</th>
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
		<table v-else class="schemaAttrs">
			<tr v-for="(val, key) in schema" :key="key">
				<td class="key">{{ key }}:</td>
				<td class="value">
					<div v-if="Array.isArray(schema.oneOf)" class="schemaContainer">
						<SchemaElement v-for="(val, key) in schema.oneOf" :key="key" :schema="val" />
					</div>
					<div v-else-if="Array.isArray(schema.anyOf)" class="schemaContainer">
						<SchemaElement v-for="(val, key) in schema.anyOf" :key="key" :schema="val" />
					</div>
					<div v-else-if="Array.isArray(schema.allOf)" class="schemaContainer">
						<SchemaElement v-for="(val, key) in schema.allOf" :key="key" :schema="val" />
					</div>
					<span v-else-if="key != 'default' && key != 'examples' && val === true" title="true">✓ Yes</span>
					<span v-else-if="key != 'default' && key != 'examples' && val === false" title="false">✕ No</span>
					<ul v-else-if="key != 'examples' && Array.isArray(val)" class="csList">
						<li v-for="(v, k) in val" :key="k">{{ v }}</li>
					</ul>
					<ul v-else-if="key == 'examples' && Array.isArray(val) && val.length > 1">
						<li v-for="(v, k) in val" :key="k"><code>{{ v }}</code></li>
					</ul>
					<code v-else-if="key == 'examples' && Array.isArray(val) && val.length === 1">{{ val[0] }}</code>
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
		},
		normalizedSchema() {

		}
	}
}
</script>

<style>
.schemaElement {
	border-left: 0.5rem solid #ccc;
	border-bottom: 1px dotted #ccc;
	padding: 0.25%;
	width: 99%;
}
.inlineSchemaAttrs .schemaElement {
	border: 0;
}
.schemaName {
	display: inline-block;
	border-bottom: 1px dotted black;
}
.schemaAttrs {
	width: 100%;
}
.schemaAttrs .key {
	text-transform: capitalize;
	min-width: 80px;
	width: 8%;
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