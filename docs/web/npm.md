# npm

## 登录

```bash
npm login
```

## 发布

```bash
npm publish
```

## 版本管理

```bash
# patch：补丁号，修复bug，小变动，如 v1.0.0->v1.0.1
npm version patch
# minor：小版本，新增功能，如 v1.0.0->v1.1.0
npm version minor
# major：大版本，重大更新，如 v1.0.0->v2.0.0
npm version major
```

## 钩子

- `prepublish`：发布前
- `prepare`：准备
- `postpublish`：发布后
