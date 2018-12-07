<template>
    <section class="related-links" v-if="links.length > 0">
        <h2>Related links</h2>
        <LinkList :links="links" />
    </section>
</template>

<script>
import LinkList from './LinkList.vue';

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
