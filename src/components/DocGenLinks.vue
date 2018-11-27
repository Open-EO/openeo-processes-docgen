<template>
    <div id="docgen-links" v-if="links.length > 0">
        <h2>Related links</h2>
        <LinkList :links="links" />
    </div>
</template>

<script>
import LinkList from './LinkList.vue';

export default {
	name: 'DocGenLinks',
	components: { LinkList },
	props: ['links']
}
</script>