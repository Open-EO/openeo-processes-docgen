export default {


	// Either (1) a URL to the document as string
	// or (2) an array or object containing the processes.
	document: 'processes.json',
	// Version of the openEO API
	apiVersion: "1.1.0",
	// Title for the table of contents
	title: "Processes",
	// Sorts the processes by id if set to true, otherwise keeps order of the document
	sortProcessesById: true,
	// Categorize the processes in the menu if set to true, otherwise show a plain list
	categorize: true,
	// Set the category name for all processes without a category assigned
	uncategorizedName: 'Uncategorized',
	// Whether 'Download JSON' buttons are displayed or not
	provideDownload: true,
	// Show/Hide table of contents, links and search box
	showTableOfContents: true,
	// A message that is shown to users
	notice: '',
	// Show or hide experimental and/or deprecated entites by default (e.g. processes, collections)
	showExperimentalByDefault: true,
	showDeprecatedByDefault: false,

};