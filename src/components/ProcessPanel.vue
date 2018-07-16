<template>
	<div class="processPanel">
		<a class="anchor" :name="process.name"></a>
		<h2>
			<strong class="deprecated" v-if="process.deprecated === true">deprecated</strong>
			<code>{{ process.name }}</code>
			<span class="summary" v-if="process.summary">{{ process.summary }}</span>
		</h2>
		<div class="content">
			<DescriptionElement v-if="process.description" :description="process.description"></DescriptionElement>
			<div class="links" v-if="process.links">
				<strong>Additional links:</strong>
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

			<div class="parameters">
				<h3>Parameters</h3>
				<em class="min_parameters" v-if="process.min_parameters > 0">Required: {{ process.min_parameters }}</em>
				<div class="content" v-for="(param, name) in process.parameters" :key="name">
					<h6>
						<code>{{ name }}</code>
						<strong class="required" v-if="param.required === true" title="required">*</strong>
						<strong class="deprecated" v-if="param.deprecated === true">deprecated</strong>
					</h6>
					<div class="content">
						<!-- ToDo: Dependencies -->
						<DescriptionElement v-if="param.description" :description="param.description"></DescriptionElement>
						<p class="mimeType" v-if="param.mime_type"><strong>MIME type: </strong>{{ param.mime_type }}</p>
						<SchemaPanel :schema="param.schema"></SchemaPanel>
					</div>
				</div>
				<p class="content" v-if="Object.keys(process.parameters).length === 0">None</p>
			</div>

			<div class="returns">
				<h3>Returns</h3>
				<div class="content">
					<DescriptionElement v-if="process.returns.description" :description="process.returns.description"></DescriptionElement>
					<p class="mimeType" v-if="process.returns.mime_type"><strong>MIME type: </strong>{{ process.returns.mime_type }}</p>
					<SchemaPanel :schema="process.returns.schema"></SchemaPanel>
				</div>
			</div>

			<div class="exceptions" v-if="process.exceptions">
				<h3>Exceptions</h3>
				<ul>
					<li class="exception" v-for="(exception, name) in process.exceptions" :key="name">
						<strong class="name">{{ name }}</strong>
						<span class="code" v-if="exception.code">({{ exception.code }})</span>
						<DescriptionElement v-if="exception.description" :description="exception.description"></DescriptionElement>
					</li>
				</ul>
			</div>

			<!-- ToDo: Examples -->
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

<style scoped>
h4 {
	margin: 0;
}
.processPanel {
	margin: 0.5rem;
	margin-bottom: 3rem;
	padding: 0rem;
}
.processPanel .content {
	clear: both;
	margin-top: 0.75rem;
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
.parameters .content, .returns .content {
	padding-left: 40px;
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