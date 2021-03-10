async function getTemplate(templateName) {
	try {
		let template = await import(
			/* webpackChunkName: "[request]" */
			`./templates/${templateName}`
			);
		console.log(template);
	} catch(err) {
		console.error("template error");
		return new Error(err);
	}
}

getTemplate("foo");
getTemplate("bar");
getTemplate("baz");


