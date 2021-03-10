const svgToMiniDataURI = require("mini-svg-data-uri");
const path = require("path");
module.exports = {
	mode: "production",
	entry: {
		main: "./example.js"
	},
	output: {
		assetModuleFilename: "images/[hash][ext",
		path: path.join(__dirname, "./dist")
	},
	devServer: {
		publicPath: "/dist/"
	},
	module: {
		rules: [
			{
				test: /\.(png|jpg)$/,
				type: "asset"
			},
			{
				test: /\.svg$/,
				type: "asset",
				generator: {
					dataUrl: content => {
						if (typeof content !== "string") {
							content = content.toString();
						}

						return svgToMiniDataURI(content);
					}
				}
			}
		]
	}
};
