## cacheGroups
```js
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
    priority: 1,
    enforce: true
  }
}
```
### priority 
> 不设置的话 默认 cacheGroups 每个子项都是0 
> 一个entry 进入了 optimization流程 比如 commons 和 vendor 两个cacheGroup 会先走哪个呢  