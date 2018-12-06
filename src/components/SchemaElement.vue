<template>
	<div class="schemaElement" v-if="typeof schema === 'object' && schema !== null">
		<template v-if="visible">
			<div v-if="schema.type == 'object' && typeof schema.properties =='object'" class="schemaObjectElement">
				<table class="objectProperties">
					<tr>
						<td class="key">Type:</td>
						<td class="value">{{ formatType() }}</td>
					</tr>
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
						<th colspan="2" class="objectPropHeading">Object Properties:</th>
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
				<tr v-if="showAnyType()">
					<td class="key">Type:</td>
					<td class="value"><em>Any</em></td>
				</tr>
				<tr v-for="(val, key) in schema" :key="key">
					<template v-if="showRow(key)">
						<td class="key">{{ key }}:</td>
						<td class="value">
							<span v-if="key == 'type'">{{ formatType() }}</span>
							<div v-else-if="(key == 'oneOf' || key == 'anyOf' || key == 'allOf') && Array.isArray(val)" class="schemaContainer">
								<SchemaElement v-for="(v, k) in val" :key="k" :schema="v" />
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
							<code v-else-if="key == 'default' && (typeof val === 'object' || typeof val === 'boolean')">{{ JSON.stringify(val) }}</code>
							<code v-else-if="key == 'pattern'">{{ val }}</code>
							<SchemaElement v-else-if="typeof val === 'object'" :schema="val" :initShown="false"></SchemaElement>
							<span v-else>{{ val }}</span>
						</td>
					</template>
				</tr>
			</table>
		</template>
		<div class="schemaExpand" v-else><a @click="show()">> ...</a></div>
	</div>
</template>

<script>
import EventBus from '../eventbus.js';
import DescriptionElement from './DescriptionElement.vue';

export default {
	name: 'SchemaElement',
	props: {
		schema: {},
		initShown: {
			default: true
		}
	},
	data() {
		return {
			visible: this.initShown
		};
	},
	watcher: {
		initShown(newVal, oldVal) {
			this.visible = newVal;
		}
	},
	components: {
		DescriptionElement
	},
	computed: {
		filteredObjectSchema() {
			var filtered = null;
			for(var key in this.schema) {
				if (key == 'required' || key == 'properties' || key == 'type' || key == 'format') {
					continue;
				}
				if (filtered === null) {
					filtered = {};
				}
				filtered[key] = this.schema[key];
			}
			return filtered;
		}
	},
	methods: {
		show() {
			this.visible = true;
		},
		formatType(schema, type, level = 0) {
			if (typeof schema === 'undefined') {
				schema = this.schema;
			}
			if (typeof type === 'undefined') {
				type = schema.type;
			}
			if (Array.isArray(type)) {
				var types = [];
				for(var i in type) {
					types.push(this.formatType(schema, type[i], level+1));
				}
				return types.join(', ');
			}
			else if (type.toLowerCase() === 'array' && typeof schema.items === 'object' && typeof schema.items.type !== 'undefined') {
				var arrType = "array<"+this.formatType(schema.items, undefined, level+1)+">";
				if (typeof schema.format === 'string') {
					if (level == 0) {
						return schema.format + " ("+arrType+")";
					}
					else {
						return schema.format;
					}
				}
				else {
					return arrType;
				}
			}
			else if (type.toLowerCase() === 'object' && typeof schema.format === 'string') {
				return schema.format + " (object)";
			}
			return type;
		},
		showRow(key) {
			if (key == 'format' && typeof this.schema.type === 'string' && ['object', 'array'].includes(this.schema.type.toLowerCase())) {
				// If format has been added to the type, don't show again
				return false;
			}
			else if (key == 'items' && Object.keys(this.schema.items).length === 1 && typeof this.schema.items.type !== 'undefined') {
				// If items hold only the type (is added to type anyway)
				return false;
			}

			return true;
		},
		showAnyType() {
			return (typeof this.schema.type === 'undefined' && typeof this.schema.oneOf === 'undefined' && typeof this.schema.allOf === 'undefined' && typeof this.schema.anyOf === 'undefined');
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
.objectPropHeading {
	text-align: left;
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
.objectProperties th {
	padding-top: 1.5rem;
}
</style>