var Config = {

	// Path where this instance of the Functio UI is hosted (string)
	clientPath: '/',
	// Port where the dev server runs (int)
	devPort: 8000

};

module.exports = {
	publicPath: process.env.CLIENT_URL || Config.clientPath,
	devServer: {
		port: Config.devPort
	},
	productionSourceMap: false,
    configureWebpack: {
        externals: {
			// We don't include ajv as the library is only used for process graph parsing etc, but we don't need this currently in vue-components
            ajv: 'ajv'
        }
    }
}