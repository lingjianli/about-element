#### Commit Message 规范格式

1. 安装

```
npm install -g @commitlint/cli @commitlint/config-conventional
```


2. commit 格式：

```
<commit-type>[(commit-scope)]:<commit-message>
```

* `<commit-type>`常见为：
- chore：构建配置相关
- docs：文档相关
- feat：添加新功能
- fix：添加新功能
- pref：性能相关
- refactor：代码重构
- revert：分支回溯
- style：样式相关
- test：测试相关

例如：
```bash {cmd=true}
git add .
git commit -m "feat: 添加commitlint校验"
```