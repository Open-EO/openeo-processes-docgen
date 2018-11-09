<template>
	<div class="processPanel">
		<a class="anchor" :name="process.name"></a><!-- ToDo: Replace name with id -->
		<h2>{{ process.name }}</h2>

		<div class="summary" v-if="process.summary || process.deprecated">
			<code :class="{ deprecated: process.deprecated }">{{ process.name }}</code><!-- ToDo: Replace name with id -->
			 — {{ process.summary }}
			<template v-if="process.deprecated === true"> — <strong class="deprecated">deprecated</strong></template>
		</div>

		<div class="description" v-if="process.description">
			<h3>Description</h3>
			<DescriptionElement :description="process.description"></DescriptionElement>
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
					<p class="mimeType" v-if="param.mime_type"><strong>Media type: </strong>{{ param.mime_type }}</p><!-- ToDo: Replace with media_type -->
					<SchemaPanel :schema="param.schema"></SchemaPanel>
				</div>
			</div>
			<p v-if="Object.keys(process.parameters).length === 0">This process has no parameters.</p>
		</div>

		<div class="returns">
			<h3>Return Value</h3>
			<DescriptionElement v-if="process.returns.description" :description="process.returns.description"></DescriptionElement>
			<p class="mimeType" v-if="process.returns.mime_type"><strong>MIME type: </strong>{{ process.returns.mime_type }}</p><!-- ToDo: Replace with media_type -->
			<SchemaPanel :schema="process.returns.schema"></SchemaPanel>
		</div>

		<div class="exceptions" v-if="process.exceptions">
			<h3>Errors/Exceptions</h3>
			<ul>
				<li class="exception" v-for="(exception, name) in process.exceptions" :key="name">
					<code>{{ name }}</code>
					<span class="errorCode" v-if="exception.code"> — {{ exception.code }}</span><!-- ToDo: Remove code and add new properties -->
					<DescriptionElement v-if="exception.description" :description="exception.description"></DescriptionElement>
				</li>
			</ul>
		</div>

		<div class="examples" v-if="process.examples">
			<h3>Examples</h3>
			<ProcessExampleElement v-for="(example, name) in process.examples" :key="name" :id="name" :example="example"></ProcessExampleElement>
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
import ProcessExampleElement from './ProcessExampleElement.vue';

export default {
	name: 'ProcessPanel',
	props: ['process'],
	components: {
		SchemaPanel,
		DescriptionElement,
		ProcessExampleElement
	}
}
</script>

<style>
#docgen h4 {
	margin: 1rem 0 0.5rem 0;
	font-size: 1.8rem;
}
#docgen h5 {
	margin: 1rem 0 0.5rem 0;
	font-size: 1.6rem;
}
#docgen h6 {
	margin: 1rem 0 0.5rem 0;
	font-size: 1.5rem;
}
</style>

<style scoped>
h2 {
	font-size: 2.5rem;
	padding: 0 0 0.75rem 0;
	margin: 0 0 1.5rem 0;
	border-bottom: 1px dotted #ccc;
}
h3 {
	font-size: 2rem;
	padding: 2.25em 0 0.75rem 0;
	margin: 0 0 0.75rem 0;
	border-bottom: 1px dotted #ccc;
}
h4 {
	padding: 0.5em 0 0.25rem 0;
}
.processPanel {
	margin: 1.5rem;
	margin-bottom: 6rem;
	padding: 0rem;
}
@media only screen and (min-width: 100em) {
	.processPanel {
		margin-bottom: 15rem;
	}
}
code.deprecated {
	text-decoration: line-through;
}
strong.deprecated {
	color: red;
}
h2 .deprecated {
	float: right;
}
.parameters .deprecated {
	margin-left: 1.5em;
}
.parameters .details {
	margin-left: 2rem;
}
.exception {
	margin-top: 0.5rem;
}
.exception code {
	font-family: monospace;
	font-weight: bold;
}
</style>