module.exports = {
	mode: "development",
	entry: "./example",
	output: {
		clean: true
	},
	optimization: {
		// concatenateModules: false,
		// usedExports: true,  // 收集是否使用信息 该信息会被production打包使用
		// providedExports: true
	}
};
