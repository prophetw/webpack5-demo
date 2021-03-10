# splitChunks 配置

## minChunks 
> 最少被共享过 指定次数 才会被提取出来


## cacheGroups.{groupName}.priority
> A module can belong to multiple cache groups
* default -20
* default value is 0 for custom groups
* The default groups have a negative priority

> default groups 和 custom groups 的区别

> 猜测 custom groups default groups
> 每个 entry 相当于是一个 队列/数组   default groups
> optimization 相当于是一个过滤器 
> splitChunks.cacheGroups 相当于是一个 自定义的过滤组  custom groups 
> 这个priority 默认值，cacheGroups 有很多，priority 决定了 不同的groups的匹配优先级

## 例子 代码结构
```bash
├── node_modules
│   ├── vendor1.js
│   └── vendor2.js
├── pageA.js
├── pageB.js
├── pageC.js
├── template.md
├── utility1.js
├── utility2.js
├── utility3.js
└── webpack.config.js
```
## 依赖关系
- `pageA`
  - `vendor1` 
  - `utility1`
  - `utility2`
- `pageB`
  - `vendor1`
  - `vendor2` 
  - `utility2`
  - `utility3`
- `pageC`
  - `vendor1`
  - `utility2`
  - `utility3`

> 总结下 也就是
* vendor1 被引用3次
* utility2 被引用3次
* utility3 被引用2次
* utility1 被引用1次
* vendor2 被引用1次

## webpack.config.js
```js
var path = require("path");

module.exports = {
	mode: "development",
	entry: {
		pageA: "./pageA",
		pageB: "./pageB",
		pageC: "./pageC"
	},
	optimization: {
		chunkIds: "named",
		splitChunks: {
			cacheGroups: {
				default: false,
				commons: {
					chunks: "initial",
					minChunks: 2, //The minimum times must a module be shared among chunks before splitting.
					maxInitialRequests: 5, // The default limit is too small to showcase the effect
					minSize: 0 // This is example is too small to create commons chunks
				},
				vendor: {
					test: /node_modules/,
					chunks: "initial",
					name: "vendor",
					enforce: true
				}
			}
		}
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].js"
	}
};

```

## 打包
```bash
dist
├── commons-node_modules_vendor1_js-utility2_js.js common 被引用3次的
├── commons-utility3_js.js 被引用2次的
├── pageA.js
├── pageB.js
├── pageC.js
└── vendor.js
```
## 修改 priority 重新打包
```js
vendor: {
    test: /node_modules/,
    chunks: "initial",
    name: "vendor",
    priority: 1,
    enforce: true
}
```
```bash
dist
├── commons-utility2_js.js 被引用3次的
├── commons-utility3_js.js 被引用2次的
├── pageA.js
├── pageB.js
├── pageC.js
└── vendor.js
```

### [priority 文档](https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkscachegroups)
> custom-groups priority 默认值是0 
* 未设置 priority 1
> node_modules/vendor1 被打包到 commons-node_modules_vendor1_js-utility2_js.js

* 在设置了 priority 
> node_modules/vendor1 被打包到 vendor.js  

> **这个就是 vendor 优先级高于 commons 的结果**