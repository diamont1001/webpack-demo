# webpack-demo #
webpack构建前端项目，包含demo与目录规范

## 目录 ##
    my_app
		|- src					// 开发源码
			|- modules				// 模块（JS|LESS|图片等资源分散到各模块中）
				|- app					// 应用主页面模块目录，一个页面一个目录，对应有html主文档，比如detail, home
					|- app1					// 页面1
						|- index.html			// 页面1主文档
						|- index.less
						|- index.js
						|- block1_bg.png
					|- app2
						|- index.html			// 页面2主文档
						|- index.less
						|- index.js
						|- ...
					|- ...
				|- components			// 可视化的组件，比如header, footer, app-item
					|- component1
						|- index.(html|vue|tpl)
						|- index.less
						|- index.js
						|- component1_bg.png
						|- component.json
					|- component2
					|- ...
				|- extend				// 非可视化的模块，比如server, proxy
			|- static				// 公共静态资源
				|- script			// 公共脚本
				|- style				// 公共样式
				|- img				// 公共图片
		|- test					// 测试相关
		|- package.json			// package.json
		|- webpack.config.js		// webpack配置文件
		|- README.md				// 项目说明

# 编译

```bash
$ clone https://github.com/diamont1001/webpack-demo.git
$ cd webpack-demo/example1
$ npm i

# for dev version
$ npm run dev
# for release version
$ npm run prod
```

最后生成的发布代码在 `release/` 目录下。
