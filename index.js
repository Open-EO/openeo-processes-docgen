module.exports = {
    DocGen: require('./src/DocGen.vue').default,
    Page: require('./src/components/Page.vue').default,
    TableOfContents: require('./src/components/TableOfContents.vue').default,
    RelatedLinks: require('./src/components/RelatedLinks.vue').default,
    Processes: require('./src/components/Processes.vue').default,
    
    Description: require('./src/components/Description.vue').default,
    LinkList: require('./src/components/LinkList.vue').default,
    ProcessesList: require('./src/components/ProcessesList.vue').default,
    ProcessesListCategorized: require('./src/components/ProcessesListCategorized.vue').default,
    ProcessesListCategory: require('./src/components/ProcessesListCategory.vue').default,
    ProcessExample: require('./src/components/ProcessExample.vue').default,
    Process: require('./src/components/Process.vue').default,
    JsonSchema: require('./src/components/JsonSchema.vue').default,

    Utils: require('./src/utils.js').default
}