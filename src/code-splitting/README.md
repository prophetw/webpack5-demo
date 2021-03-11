This example illustrates a very simple case of Code Splitting with `require.ensure`.

- `a` and `b` are required normally via CommonJS
- `c` is made available(,but doesn't get execute) through the `require.ensure` array.
  - webpack will load it on demand
- `b` and `d` are required via CommonJs in the `require.ensure` callback
  - webpack detects that these are in the on-demand-callback and
  - will load them on demand
  - webpack's optimizer can optimize `b` away
    - as it is already available through the parent chunks

You can see that webpack outputs two files/chunks:

- `output.js` is the entry chunk and contains
  - the module system
  - chunk loading logic
  - the entry point `example.js`
  - module `a`
  - module `b`
- `1.output.js` is an additional chunk (on-demand loaded) and contains
  - module `c`
  - module `d`

You can see that chunks are loaded via JSONP. The additional chunks are pretty small and minimize well.


# require 
* require("b").xyz();
* const x = require("b"); x.xyz()
> 以上会导致打包不太一样 下面是一个具体的例子

## require.ensure 的分包策略 
```js 
// test.js 
var a = require("a");
var p = require("./p");
require.ensure(["c"], function(require) {
    var d = require("d")
});
require.ensure([], function(require) {
    const b = require('b')
    const q = require('./q')
});
```
> 以上 每一个 require.ensure 动态加载包 里面包含的都会打到一个包里面
> 而 require() 同步加载的 如 a p  会和 test.js 打到一个包里面
```bash
dist
├── main.js test.js + a + p
├── node_modules_b_js-q_js.js  b + q
└── node_modules_c_js-node_modules_d_js.js  c + d
```


## 代码结构
```bash
├── example.js
├── node_modules
│   ├── a.js
│   ├── b.js
│   ├── c.js
│   └── d.js
└── webpack.config.js
```
## example.js
```js
var a = require("a");
require.ensure(["c"], function(require) {
    require("b").xyz();
    var d = require("d")
    d.xxx()
});
```
## webpack.config.js
```js
module.exports = {
	mode: "development",
	output: {
		clean: true
  },
	entry: "./example.js",
};
```

## 打包结果
```bash
dist
├── main.js (example.js+a.js+b.js)
└── node_modules_c_js-node_modules_d_js.js
```

> 理论上应该是 b.js 是动态加载的应该打包到独立的包里面去的 