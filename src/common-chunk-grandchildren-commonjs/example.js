var main = function() {
	console.log("Main class");
	require.ensure([], () => {
		const page = require("./pageA" /* webpackChunkName: "chunk-bar-baz" */);
		page();
	});
	require.ensure([], () => {
		const page = require("./pageB");
		page();
	});
};

main();
