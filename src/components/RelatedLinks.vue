<template>
	<section class="related-links">
    	<LinkList :links="links" heading="Related Links" headingTag="h3" />
	</section>
</template>

<script>
import LinkList from '@openeo/vue-components/components/LinkList.vue';

export default {
	name: 'RelatedLinks',
	components: {
		LinkList
	},
	props: ['links']
}
</script>

<style scoped>
.related-links {
	margin-top: 4em;
	margin-bottom: 2em;
}

@media only screen and (min-width: 64em) {
	.related-links {
		margin-top: 3em;
		margin-bottom: 0;
	}
}
</style>
