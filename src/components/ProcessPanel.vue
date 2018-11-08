<template>
	<div class="processPanel">
		<a class="anchor" :name="process.name"></a>
		<h2>
			<strong class="deprecated" v-if="process.deprecated === true">deprecated</strong>
			<code>{{ process.name }}</code>
		</h2>

		<div class="summary" v-if="process.summary">
			{{ process.name }} — {{ process.summary }}
		</div>

		<div class="description">
			<h3>Description</h3>
			<DescriptionElement v-if="process.description" :description="process.description"></DescriptionElement>
		</div>

		<div class="parameters">
			<h3>Parameters</h3>
			<em class="min_parameters" v-if="process.min_parameters > 0">Minimum number of parameters to be used: {{ process.min_parameters }}</em>
			<div v-for="(param, name) in process.parameters" :key="name">
				<h4>
					<code>{{ name }}</code>
					<strong class="required" v-if="param.required === true" title="required">*</strong>
					<strong class="deprecated" v-if="param.deprecated === true">deprecated</strong>
				</h4>
				<div class="details">
					<!-- ToDo: Dependencies -->
					<DescriptionElement v-if="param.description" :description="param.description"></DescriptionElement>
					<p class="mimeType" v-if="param.mime_type"><strong>Media type: </strong>{{ param.mime_type }}</p>
					<SchemaPanel :schema="param.schema"></SchemaPanel>
				</div>
			</div>
			<p v-if="Object.keys(process.parameters).length === 0">This process has no parameters.</p>
		</div>

		<div class="returns">
			<h3>Return Value</h3>
			<DescriptionElement v-if="process.returns.description" :description="process.returns.description"></DescriptionElement>
			<p class="mimeType" v-if="process.returns.mime_type"><strong>MIME type: </strong>{{ process.returns.mime_type }}</p>
			<SchemaPanel :schema="process.returns.schema"></SchemaPanel>
		</div>

		<div class="exceptions" v-if="process.exceptions">
			<h3>Errors/Exceptions</h3>
			<ul>
				<li class="exception" v-for="(exception, name) in process.exceptions" :key="name">
					<strong class="name">{{ name }}</strong>
					<span class="code" v-if="exception.code">({{ exception.code }})</span>
					<DescriptionElement v-if="exception.description" :description="exception.description"></DescriptionElement>
				</li>
			</ul>
		</div>

		<div class="examples" v-if="process.examples">
			<h3>Examples</h3>
			<p>Sorry, displaying examples is not implemented yet.</p>
		</div>

		<div class="links" v-if="process.links">
			<h3>See Also</h3>
			<ul>
				<li v-for="(link, key) in process.links" :key="key">
					<a :href="link.href" target="_blank">
						<span v-if="link.title">{{ link.title }}</span>
						<span v-else>{{ link.href }}</span>
					</a>
					<span v-if="link.rel"> ({{ link.rel }})</span>
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
import EventBus from '../eventbus.js';
import SchemaPanel from './SchemaPanel.vue';
import DescriptionElement from './DescriptionElement.vue';

export default {
	name: 'ProcessPanel',
	props: ['process'],
	components: {
		SchemaPanel,
		DescriptionElement
	}
}
</script>

<style>
#docgen h4 {
	margin: 1rem 0 0.5rem 0;
	font-size: 1.2rem;
}
#docgen h5 {
	margin: 1rem 0 0.5rem 0;
	font-size: 1.1rem;
}
#docgen h6 {
	margin: 1rem 0 0.5rem 0;
	font-size: 1rem;
}
</style>

<style scoped>
h2 {
	font-size: 2rem;
	padding: 0 0 0.5rem 0;
	margin: 0 0 1rem 0;
	border-bottom: 1px dotted #ccc;
}
h3 {
	font-size: 1.4rem;
	padding: 1.5em 0 0.5rem 0;
	margin: 0 0 0.5rem 0;
	border-bottom: 1px dotted #ccc;
}
h4 {
	font-size: 1.2rem;
	padding: 0.5em 0 0.25rem 0;
}
.processPanel {
	margin: 1rem;
	margin-bottom: 15%;
	padding: 0rem;
}
.deprecated {
	color: red;
}
h2 .deprecated {
	float: right;
}
.parameters .deprecated {
	margin-left: 1em;
}
.parameters .details {
	margin-left: 2rem;
}
.exception {
	margin-top: 0.25rem;
}
.exception .name {
	display: inline-block;
	font-family: monospace;
}
.exception .code {
	margin-left: 1em;
	display: inline-block;
}
</style>