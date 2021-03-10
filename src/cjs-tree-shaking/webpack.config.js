const path = require('path')
module.exports = [
	{
		mode: "production",
	// mode: "development",
		entry: "./example.js",
		output: {
			pathinfo: true,
			filename: "output.js",
			path: path.resolve(__dirname, './dist'),
		},
		optimization: {
			moduleIds: "size",
			usedExports: true,
			mangleExports: true
		}
	},
	{

		mode: "production",
	// mode: "development",
		entry: "./example.js",
		output: {
			pathinfo: true,
			filename: "without.js",
			path: path.resolve(__dirname, './dist'),
		},
		optimization: {
			moduleIds: "size",
			usedExports: false,
			mangleExports: false
		}
	}
];
