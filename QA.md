# Q: 写一个 cli 需要使用到哪些库？

核心库：
commander: node cli 解决方案
inquirer: 交互式命令工具，给用户提供一个提问流方式

UI 优化库：
chalk: 颜色插件，用来修改命令行输出样式
ora: 用于显示加载中的效果，类似于前端页面的 loading 效果，想下载模版这种耗时的操作，有了 loading 效果，可以提示用户正在进行中，请耐心等待

工具库：
execa: 在 node 端执行 shell 执行的库,
fs-extra: node fs 文件系统模块的增强版
globby: 用于检索文件目录,
handlebars: 处理 package.json
pacote: 用于获取 node 包的最新信息

# cli 的原理

首先，cli 的本质就是我们使用了 node 执行了一个脚本；
例如，我们在写 cli 的时候，一般的我们会在 package.json 中定义一个 bin 指令

oulae-admin-cli create 的原理是：(即脚本执行做了些什么事情)

1. 使用 commander 完成指令的注册
2. 注册事件：当用户输入非法指令时，我们的脚本需要给出什么样的提示？
3. 使用 program.parseAsync(process.argv) 解析用户当前的输入指令

具体的指令 action 的执行流程：

1. 生成 project 存放的目标地址
2. 确认目标地址是否存在重名的内容？如果存在咨询问是否覆盖安装
3. 交互信息的弹出和输入，同时返回用户的选择信息
4. 拷贝项目到目标存放地址
5. 将用户输入的信息导入到 package.json 中
6. 运行 npm intall 指令
7. 提示用户项目运行成功
