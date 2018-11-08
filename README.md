# openEO Processes DocGen
Library to generate a humen-readable version of documents following the [specification for openEO processes](https://github.com/open-eo/openeo-api).

* [Demo](https://open-eo.github.io/openeo-processes-docgen/demo/).

## Getting Started

You can simply create an HTML file and modify the `document` option to a URL of a document you'd like to show:
```
<!DOCTYPE html>
<html>

	<head>
		<title>openEO Processes</title>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<script src="https://unpkg.com/vue"></script>
		<script src="https://unpkg.com/@openeo/processes-docgen/dist/DocGen.umd.min.js"></script>
		<link rel="stylesheet" href="https://unpkg.com/@openeo/processes-docgen/dist/DocGen.css">
	</head>

	<body>
		<div id="app"></div>
		<script>
			new Vue({
				el: '#app',
				document: 'processes.json',
				render: h => h(DocGen)
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
6. Install the dependencies by executing `npm install` on the command line
7. 
    * Development: Run the development server by executing `npm run serve`.
    * Deployment: Build the project by executing `npm run build`. Afterwards upload the content of the `dist` folder to your server.

## License
This project is licensed under the Apache 2.0 license - see the [LICENSE](LICENSE) file for details.
