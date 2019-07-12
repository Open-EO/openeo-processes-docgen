<template>
    <section class="toc">
        <h2>Processes</h2>
        <div class="search-box">
            <span class="icon">🔎</span>
            <input type="search" v-model="searchTerm" placeholder="Search in process names" />
        </div>
        <ProcessesListCategorized v-if="config.categorize" :processes="processes" :searchTerm="searchTerm" :baseConfig="config" />
        <ProcessesList v-else :processes="processes" :searchTerm="searchTerm" :baseConfig="config" />
    </section>
</template>

<script>
import ProcessesList from './ProcessesList.vue';
import ProcessesListCategorized from './ProcessesListCategorized.vue';
import Utils from '../utils.js';

export default {
    name: 'TableOfContents',
    components: {
        ProcessesList,
        ProcessesListCategorized
    },
    props: ['processes', 'baseConfig'],
	computed: {
		config() {
			return Utils.setDefaults(this.baseConfig);
		}
	},
    data() {
        return {
            searchTerm: ''
        }
    }
}
</script>

<style scoped>
.search-box {
    margin: 1em 0;
    position: relative;
}
.search-box input, .search-box .icon {
	height: 1.5em;
	font-size: 1em;
	margin: 0;
}

.search-box input {
    padding: 0.25em 0.3em;
    padding-left: 1.9em;
    z-index: 1;
	display: inline-block;
	border: 1px solid #ccc;
	box-sizing: content-box;
	background-color: #fff;
	width: calc(100% - 2.2em);
}
.search-box .icon {
    user-select: none;
    margin-top: 0.3em;
    margin-left: 0.3em;
    width: 1em;
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
}
</style>