const path = require('path')
module.exports = {
	mode: "development",
	output: {
    path: path.resolve(__dirname, './dist'),
		chunkFilename: '[name].[chunkhash].js',
  },
	entry: {
		main: "./example.js"
	},
	optimization: {
		chunkIds: "named" // To keep filename consistent between different modes (for example building only)
	}
};
