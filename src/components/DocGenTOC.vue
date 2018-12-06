<template>
    <div id="docgen-toc">
        <h2 class="navBlock">Processes</h2>
        <div id="searchBox" class="navBlock">
            <input type="search" v-model="searchTerm" placeholder="Search in process names" /><button>🔎</button>
        </div>
        <ProcessesListCategorized v-if="categorize" :processes="processes" :searchTerm="searchTerm" />
        <ProcessesList v-else :processes="processes" :searchTerm="searchTerm" />
    </div>
</template>

<script>
import ProcessesList from './ProcessesList.vue';
import ProcessesListCategorized from './ProcessesListCategorized.vue';

export default {
    name: 'DocGenTOC',
    components: {
        ProcessesList,
        ProcessesListCategorized
    },
    props: ['processes', 'categorize'],
    data() {
        return {
            searchTerm: ''
        }
    }
}
</script>