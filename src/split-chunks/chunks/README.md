
## splitChunks.chunks
> [一篇不错的文章](https://medium.com/dailyjs/webpack-4-splitchunks-plugin-d9fbbe091fd0) 
> There are 3 values possible ”initial”, ”async” and ”all”. When configured the optimization only selects initial chunks, on-demand chunks or all chunks.” — Github History
> Select chunks for determining shared modules (defaults to “async”, “initial” and “all” requires adding these chunks to the HTML) ”
— WebpackOptions Schema

## 目录结构
```bash
.
├── app.js
├── app2.js
├── my-dynamic-module.js
├── node_modules
│   ├── jquery.js
│   ├── lodash.js
│   └── my-statis-module.js
└── webpack.config.js
```
## 依赖关系
- app.js
    - import my-statis-module
    - import jquery
    - import lodash 
    - import(my-dynamic-module)
- app2.js
    - import my-statis-module
    - import(jquery)
    - import lodash 
    - import(my-dynamic-module)

## webpack.config.js
```js
"use strict";
const path = require("path");

module.exports = {
	mode: "development",
	entry: {
		app1: "./app.js",
		app2: "./app2.js",
	},
	optimization: {
		splitChunks: {
			minSize: 0, // This example is too small, in practice you can use the defaults
      // chunks: 'initial'
      cacheGroups: {
        node_vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "initial",
          // priority: 1,
          name: 'vendors',
        }
      }
    },
		chunkIds: "deterministic" // To keep filename consistent between different modes (for example building only)
	},
	output: {
		path: path.resolve(__dirname, "dist"),
    chunkFilename: '[name].js'
	}
};

```

## 如果没有 splitChunks配置 打包结果如下 
```bash
dist
├── app1.js (app.js+node_modules/jquery+node_modules/lodash+my-static-module)
├── app2.js (app2.js+my-static-module+node_modules/lodash)
├── jquery.js
└── my-dynamic-module.js
```
## splitChunks.chunks = async 打包如下
> 其实和上面的一样的结果 在上面的基础上 
> 加了两个过滤条件 
> 1.node_modules 里面的
> 2.所有动态加载的 import("module_name")
> 合并到一个包里面 而非动态加载的就按照默认方式处理 也就是上面那个步骤的结果
>chunks : ‘async’ tells webpack that,
>Hey, webpack ! I only care about optimization of modules imported dynamically. You can just leave non-dynamic modules as they are.”
```bash
dist
├── app1.js (所有的静态加载js+app.js + node_modules静态加载)
├── app2.js (所有的静态加载js+app2.js + node_modules静态加载)
├── my-dynamic-module.js
└── vendors.js(node_modules里面通过 import("")方式加载进来的)
```

## splitChunks.chunks = initial 打包如下
> chunks : ‘initial’ tells webpack that,
> Hey, webpack ! I don’t care about the dynamically imported modules, you can have separate files for each one of them. However, I want all my non-dynamically imported modules in one bundle, although I am ready to share and chunk my non-dynamically imported modules with other files if they also want non-dynamically imported modules.”
```bash
dist
├── app1.js
├── app2.js
├── jquery.js
├── my-dynamic-module.js
└── vendors.js
```

## splitChunks.chunks = async 打包如下
> chunks : ‘all’ tells webpack that,
> Hey, webpack ! I don’t care if it is a dynamically imported module or non-dynamically imported module. Apply optimization over all of them. But make sure that…naah, you are smart enough to do that !”
```bash
dist
├── app1.js
├── app2.js
├── jquery.js
├── my-dynamic-module.js
└── vendors.js
```
### chunks async 默认
> async 选项
> 把所有的 动态加载 import('') 单独拿出来


### chunks initial
> 除 import('') 全部打到一个包里
> import('') 每个单独拿出来

### chunks all
