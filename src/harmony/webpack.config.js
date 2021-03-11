module.exports = {
	mode: 'development',
	entry: './example.js',
	optimization: {
		// chunkIds: "deterministic" // To keep filename consistent between different modes (for example building only)
		splitChunks: {
			minSize: 0
		}
	},
	output: {
		clean: true
	}
};
