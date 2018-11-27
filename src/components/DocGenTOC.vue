<template>
    <div id="docgen-toc">
        <h2>Processes</h2>
        <ul>
            <li v-for="(process, key) in processes" :key="key">
                <a :href="'#' + process.name">{{ process.name }}</a>
                <span>{{ process.summary }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
	name: 'DocGenTOC',
	props: ['processes']
}
</script>