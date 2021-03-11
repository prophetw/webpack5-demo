var main =async function() {
	console.log("Main s class");
	const pageA = await (await import('./pageA' /* webpackChunkName: 'pageA' */)).default
	console.log('12dsa3sd2a', pageA);
	const pageB = await (await import('./pageB' /* webpackChunkName: 'pageA' */)).default
	pageA()
	pageB()
};
window.onload=()=>{

const body = document.body
const btn = document.createElement('button')
btn.innerHTML='hello'
btn.onclick=()=>{
	main()
}
body.appendChild(btn)
}

