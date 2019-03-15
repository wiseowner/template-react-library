## hello~

react 组件开发示例


## scripts

### dev

`npm start`

然后等待大概几秒钟，浏览器自动打开


### publish

`npm run mypublsih`



## tips

1. 为什么本地开发不同样使用 rollup

   因为我发现 rollup 用来打包是在是太弱了，各种不满足需求。还是用 webpack 更好用，并且模拟真实的开发场景。
2. 为什么不使用 prepublish

   prepublish 钩子在特别情况下，执行 npm i 会执行此钩子，所以自己写 publish 命令即可。


