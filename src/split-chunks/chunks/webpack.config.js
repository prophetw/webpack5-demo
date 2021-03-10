"use strict";
const path = require("path");

module.exports = {
	mode: "development",
	entry: {
		app1: "./app.js",
		app2: "./app2.js",
	},
	optimization: {
		splitChunks: {
			minSize: 0, // This example is too small, in practice you can use the defaults
      // chunks: 'initial'
      cacheGroups: {
        node_vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "async",
          // priority: 1,
          name: 'vendors',
        }
      }
    },
		chunkIds: "deterministic" // To keep filename consistent between different modes (for example building only)
	},
	output: {
		path: path.resolve(__dirname, "dist"),
    chunkFilename: '[name].js'
	}
};
