# openEO Processes DocGen
Library to generate a human-readable version of documents following the [specification for openEO processes](https://github.com/open-eo/openeo-api).

* [Demo](https://open-eo.github.io/openeo-processes-docgen/demo/).

## Getting Started

You can simply create an HTML file and modify the `document` prop to a URL of a document you'd like to show:
```
<!DOCTYPE html>
<html>

	<head>
		<title>openEO Processes</title>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
    	<script src="https://cdn.jsdelivr.net/npm/vue"></script>
		<script src="https://cdn.jsdelivr.net/npm/@openeo/processes-docgen/dist/DocGen.umd.min.js"></script>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@openeo/processes-docgen/dist/DocGen.css">
		<style>html, body { height: 100%; margin: 0; }</style>
	</head>

	<body>
		<div id="app"></div>
		<script>
		new Vue({
			el: '#app',
			render: h => h(DocGen, { 
				props: {
					// URL or path of the document to parse
					document: 'processes.json'
					// Sorts the processes by id if set to true, otherwise keeps order of the document
					// sortProcessesById: true,
					// Categorize the processes in the menu if set to true, otherwise show a plain list
					// categorize: true
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
