var Config = {

	// Path where this instance of the the DocGen UI is hosted (string)
	clientPath: '/',
	// Port where the dev server runs (int)
	devPort: 8000

};

module.exports = {
	publicPath: process.env.CLIENT_URL || Config.clientPath,
	devServer: {
		port: Config.devPort
	},
	productionSourceMap: false
}