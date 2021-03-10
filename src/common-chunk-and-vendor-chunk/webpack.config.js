var path = require("path");

module.exports = {
	mode: "development",
	entry: {
		pageA: "./pageA",
		pageB: "./pageB",
		pageC: "./pageC"
	},
	optimization: {
		chunkIds: "named",
		splitChunks: {
			cacheGroups: {
				default: false,
				commons: {
					chunks: "initial",
					minChunks: 2, //The minimum times must a module be shared among chunks before splitting.
					maxInitialRequests: 5, // The default limit is too small to showcase the effect
					minSize: 1 // This is example is too small to create commons chunks
				},
				vendor: {
					test: /node_modules/,
					chunks: "initial",
					name: "vendor",
					priority: 10,
					enforce: true
				}
			}
		}
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].js"
	}
};
