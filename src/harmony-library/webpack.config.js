var path = require("path");
module.exports = {
	mode: "production",
	entry: "./example",
	output: {
		path: path.join(__dirname, "dist"),
		filename: "MyLibrary.umd.js",
		library: "MyLibrary",
		libraryTarget: "umd",
		clean: true
	},
	// experiments: {
		// outputModule: true
	// }
};
