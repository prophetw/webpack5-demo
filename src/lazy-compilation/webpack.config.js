// const { HotModuleReplacementPlugin } = require("../../");
const webpack = require('webpack')
module.exports = {
	mode: "development",
	entry: {
		main: "./example.js"
	},
	cache: {
		type: "filesystem",
		idleTimeout: 5000
	},
	experiments: {
		// lazyCompilation: true,
		lazyCompilation: {
			entries: false
		},
		// lazyCompilation: {
    //   // disable lazy compilation for dynamic imports
    //   imports: false,

    //   // disable lazy compilation for entries
    //   entries: false,

    //   // do not lazily compile moduleB
    //   test: (module) => !/moduleB/.test(module.nameForCondition()),
    // },
	},
	devServer: {
		hot: true,
		publicPath: "/dist/"
	},
	plugins: [new webpack.HotModuleReplacementPlugin()]
};
