<template>
	<article class="process">

		<a class="anchor" :name="process.id"></a>
		<h2 :class="{deprecated: process.deprecated}">{{ process.id }}</h2>

		<slot name="process-before-summary"></slot>

		<div class="summary" v-if="process.summary || process.deprecated || process.categories">
			<ul class="categories" v-if="process.categories">
				<li class="category" v-for="(value, key) in process.categories" :key="key" v-text="formatCategory(value)"></li>
			</ul>
			<summary>
				{{ process.summary }}
				<template v-if="process.deprecated === true">
					<template v-if="process.summary"> — </template>
					<strong class="deprecated">deprecated</strong>
				</template>
			</summary>
		</div>

		<slot name="process-after-summary"></slot>

		<button v-if="config.processesInitiallyCollapsed" class="show-more-button" @click="toggle()">Show {{collapsed ? 'more' : 'less'}}</button>

		<div v-show="!collapsed">

			<slot name="process-before-details"></slot>

			<section class="description" v-if="process.description">
				<h3>Description</h3>
				<code class="signature" v-html="signature(process)"></code>
				<Description :description="process.description" />
			</section>

			<section class="parameters">
				<h3>Parameters</h3>
				<div v-for="(param, i) in process.parameters" :key="i">
					<h4>
						<code>{{ param.name }}</code>
						<strong class="required" v-if="param.required === true" title="required">*</strong>
						<strong class="deprecated" v-if="param.deprecated === true">deprecated</strong>
					</h4>
					<div class="details">
						<Description v-if="param.description" :description="param.description" />
						<p class="media-type" v-if="param.media_type"><strong>Media type: </strong>{{ param.media_type }}</p>
						<div class="json-schema-container" v-if="param.schema">
							<JsonSchema :schema="param.schema" />
						</div>
					</div>
				</div>
				<p v-if="Object.keys(process.parameters).length === 0">This process has no parameters.</p>
			</section>

			<section class="returns">
				<h3>Return Value</h3>
				<Description v-if="process.returns.description" :description="process.returns.description" />
				<p class="media-type" v-if="process.returns.media_type"><strong>Media (MIME) type: </strong>{{ process.returns.media_type }}</p>
				<div class="json-schema-container" v-if="process.returns.schema">
					<JsonSchema :schema="process.returns.schema" />
				</div>
			</section>

			<section class="exceptions" v-if="process.exceptions">
				<h3>Errors/Exceptions</h3>
				<ul>
					<li class="exception" v-for="(exception, name) in process.exceptions" :key="name">
						<code>{{ name }}</code>
						<span class="http-code" v-if="exception.http"> — HTTP {{ exception.http }}</span>
						<span class="error-code" v-if="exception.code"> — {{ exception.code }}</span>
						<Description v-if="exception.description" :description="exception.description" />
						<div v-if="exception.message" class="message">Message: <em>{{ exception.message }}</em></div>
					</li>
				</ul>
			</section>

			<section class="examples" v-if="process.examples">
				<h3>Examples</h3>
				<ProcessExample v-for="(example, key) in process.examples" :key="key" :id="key" :example="example" :process="process" />
			</section>

			<section class="links" v-if="process.links">
				<h3>See Also</h3>
				<LinkList :links="process.links" />
			</section>

			<slot name="process-after-details"></slot>

		</div>

	</article>
</template>

<script>
import JsonSchema from './JsonSchema.vue';
import Description from './Description.vue';
import ProcessExample from './ProcessExample.vue';
import LinkList from './LinkList.vue';
import Utils from '../utils.js';

export default {
	name: 'Process',
	components: {
		JsonSchema,
		Description,
		ProcessExample,
		LinkList
	},
	props: ['process', 'baseConfig'],
	computed: {
		config() {
			return Utils.setDefaults(this.baseConfig);
		}
	},
	data() {
		return {
			collapsed: false
		}
	},
	beforeMount() {
		this.collapsed = this.config.processesInitiallyCollapsed;
	},
	methods: {
		toggle() {
			this.collapsed = !this.collapsed;
		},
		formatCategory(name) {
			return name.replace('_', ' ');
		},
		signature(process) {
			return Utils.signature(process, true);
		}
	}
}
</script>

<style scoped>
.required {
	color: red;
	font-weight: bold;
}
.process h3 {
	margin: 1.5em 0 0.75em 0;
	padding: 0.25em 0 0.25em 0;
	border-bottom: 1px dotted #ccc;
}
.process {
	margin: 1em;
	margin-bottom: 4em;
	padding: 0em;
}
@media only screen and (min-width: 100em) {
	.process {
		margin-bottom: 10em;
	}
	.process h3 {
		margin-top: 2em;
	}
}
.categories {
	margin: 0 0 0.75em 0;
	padding: 0;
	list-style-type: none;
}
.categories .category {
	display: inline-block;
	padding: 0.3em 0.5em;
	margin: 0 0.5em 0.5em 0;
	font-size: 0.8em;
	line-height: 1;
	text-align: center;
	white-space: nowrap;
	text-transform: uppercase;
	vertical-align: baseline;
	border-radius: 3px;
	color: #fff;
	background-color: #6c757d;
}
h2.deprecated {
	text-decoration: line-through;
}
strong.deprecated {
	color: red;
}
.signature {
	display: block;
	margin: 1em 0;
}
.parameters .deprecated {
	margin-left: 1.5em;
}
.parameters .details {
	margin-left: 1.5em;
}
.exception {
	margin-top: 0.5em;
}
.exception code {
	font-weight: bold;
}
.exception .styled-description {
	margin: 0.5em 0;
}
.exception .message {
	margin: 0.5em 0;
	font-size: 0.8em;
}
</style>