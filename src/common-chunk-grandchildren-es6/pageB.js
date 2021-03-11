async function pageB() {
	console.log("Page sB");
	const page = await (await import("./pageC" /* webpackChunkName: 'pageC' */)).default;
	page();
};
export default pageB
