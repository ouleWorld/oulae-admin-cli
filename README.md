# 写在前面

该项目是脚手架的联系项目，如果想要学习实现一个脚手架，请看下面的： **如何设计并实现一个脚手架？**

# 如何设计并实现一个脚手架？

1. [中高级前端必备：如何设计并实现一个脚手架](https://juejin.cn/post/7021097811491946503)
2. [cli-template](https://github.com/zxyue25/cli-template)

# 发布

```
$ npm run lint
$ npm run build
$ npm publish
```

# 如何使用

```
$ npm install oulae-admin-cli -g

# 创建项目：./Test
$ oulae-admin-cli create Test

# 创建项目: ./admin/Test
$ oulae-admin-cli create Test --context=admin
```

# npm 发布问题

在发布这个包时，遇到下面这个问题：

```
npm ERR! 403 403 Forbidden - PUT https://registry.npmjs.org/oulae-admin-cli - You cannot publish over the previously published versions: 0.1.3.
npm ERR! 403 In most cases, you or one of your dependencies are requesting
npm ERR! 403 a package version that is forbidden by your security policy, or
npm ERR! 403 on a server you do not have access to.
```

查询了这个链接：[You cannot publish over the previously published versions](https://stackoverflow.com/questions/53731510/you-cannot-publish-over-the-previously-published-versions)

解决方案是，我要将下面这条指令删掉：

```
script: {
  "publish": "npm run build && npm publish",
}
```

这样就解决问题了
