"use strict";
const path = require("path");

module.exports = {
	mode: "development",
	entry: {
		main: ["./example.js"]
	},
	optimization: {
		splitChunks: {
			minSize: 0 // This example is too small, in practice you can use the defaults
		},
		chunkIds: "deterministic" // To keep filename consistent between different modes (for example building only)
	},
	devServer: {
		hot: true,
		// https: true,
		// http2: true, not support above nodejs 10  nodejs thing
		// contentBase: path.join(__dirname, 'dist'),
		publicPath: '/dist/',
		compress: true,
    port: 9000,
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		chunkFilename: '[name].js',
		filename: '[name].js',
	}
};
