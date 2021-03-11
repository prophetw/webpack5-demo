module.exports = {
	mode: "development",
	entry: "./example.js",
	optimization: {
		// splitChunks: {
		// 	// chunks: "all",
		// 	minSize: 0 // This example is too small
		// }
	},
	output: {
		clean: true // clean dist folder
	}
};
