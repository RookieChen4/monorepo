# 安装依赖相关
## 安装依赖到root
`pnpm add typescript -W -D`
## 安装依赖到指定packages
`pnpm add [name] --filter web`
`pnpm remove [name] --filter web`
## 如果安装指定被依赖的项目时
`pnpm add [name]@* --filter web *可以依赖实时更新最新版本当我们pnpm publish某个项目时会转成真实路径依赖，保证package.json依赖是最新的`
`pnpm publish 注意区分dependencies和devDependencies如果放在依赖放在dependencies中记得打包时external掉`
`如果不是要 npm publish的包，可以通过cdn 打包时external掉，区分开发和生产环境html动态插入地址`
`或者发布成npm包，npm i下下来再npm i安装依赖再build再发布当然这个还是会打包进去`

todo eslint husky lint-staged