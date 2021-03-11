var path = require("path");
module.exports = {
	mode: "development",
	// mode: "production",
	entry: {
		main: "./example"
	},
	optimization: {
		// runtimeChunk: true
	},
	output: {
		clean: true
	}
};
