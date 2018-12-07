<template>
    <section class="toc">
        <h2>Processes</h2>
        <div class="search-box">
            <input type="search" v-model="searchTerm" placeholder="Search in process names" /><button>🔎</button>
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
}
.search-box input, .search-box button {
	height: 1.4em;
	font-size: 1em;
	margin: 0;
	padding: 0.3em;
	vertical-align: bottom;
	display: inline-block;
	border: 1px solid #cccc;
	box-sizing: content-box;
	background-color: #fff;
}
.search-box input {
	width: calc(100% - 2.8em);
}
.search-box button {
	width: 1.4em;
	border-left: 0;
}
</style>