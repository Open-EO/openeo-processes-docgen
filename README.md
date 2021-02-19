# openEO Processes DocGen
Library to generate a human-readable version of documents following the [specification for openEO processes](https://github.com/open-eo/openeo-api), either in version 0.4.x or 1.0.x.

* [Demo](https://open-eo.github.io/openeo-processes-docgen/demo/).

## Getting Started

You can simply create an HTML file and change the `document` and `apiVersion` (see below) prop to your needs:
```
<!DOCTYPE html>
<html>

	<head>
		<title>openEO Processes</title>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<script src="https://cdn.jsdelivr.net/npm/vue"></script>
		<script src="https://cdn.jsdelivr.net/npm/@openeo/processes-docgen@1/dist/DocGen.umd.min.js"></script>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@openeo/processes-docgen@1/dist/DocGen.css">
		<style>html, body { height: 100%; margin: 0; }</style>
	</head>

	<body>
		<div id="app"></div>
		<script>
		new Vue({
			el: '#app',
			render: h => h(DocGen, { 
				props: {
					// Either (1) a URL to the document as string
					// or (2) an array or object containing the processes.
					document: 'processes.json',
					// The version of the openEO API
					apiVersion: "1.0.0",
					// Title for the table of contents
					// title: "My processes",
					// Sorts the processes by id if set to true, otherwise keeps order of the document
					// sortProcessesById: true,
					// Categorize the processes in the menu if set to true, otherwise show a plain list
					// categorize: true,
					// Show/Hide table of contents, links and search box
					// showTableOfContents: true
				}
			})
		});
		</script>
		<noscript>Sorry, the documentation generator requires JavaScript to be enabled!</noscript>
	</body>

</html>
```

## Development

To build the files follow these steps:

1. Install [Node.js](https://nodejs.org/)
2. Clone or download this repository.
3. Open a command line window and go to the directory which contains the cloned/downloaded web editor files.
4. Optionally: Configure the generator by editing `vue.config.js` and `src/config.js` to suit your needs.
5. Install the dependencies by executing `npm install` on the command line
6. 
	* Development: Run the development server by executing `npm run serve`.
	* Deployment:
		* Standalone: Build the project by executing `npm run build_standalone`. Afterwards upload the content of the `dist` folder to your server.
		* Library: Build the project by executing `npm run build`. Afterwards you can publish the library to npm or so.

## License
This project is licensed under the Apache 2.0 license - see the [LICENSE](LICENSE) file for details.
