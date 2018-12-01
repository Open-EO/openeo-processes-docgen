module.exports = {
    DocGen: require('./src/DocGen.vue').default,
    DocGenTOC: require('./src/components/DocGenTOC.vue').default,
    DocGenLinks: require('./src/components/DocGenLinks.vue').default,
    DocGenProcesses: require('./src/components/DocGenProcesses.vue').default,
    
    DescriptionElement: require('./src/components/DescriptionElement.vue').default,
    LinkList: require('./src/components/LinkList.vue').default,
    ProcessesList: require('./src/components/ProcessesList.vue').default,
    ProcessesListCategorized: require('./src/components/ProcessesListCategorized.vue').default,
    ProcessesListCategory: require('./src/components/ProcessesListCategory.vue').default,
    ProcessExampleElement: require('./src/components/ProcessExampleElement.vue').default,
    ProcessPanel: require('./src/components/ProcessPanel.vue').default,
    SchemaElement: require('./src/components/SchemaElement.vue').default,

    utils: require('./src/utils.js')
}