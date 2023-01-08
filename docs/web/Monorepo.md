# Monorepo 架构

## 什么是 Monorepo

Monorepo 是一种代码组织思想，它要求我们只用一个代码仓库来管理一个大项目的所有资源、子项目。简单来说以前放在多个 repo 里的代码现在就放在一个 repo 就行了。
Multirepo (传统多repo 项目)会将一个项目按照职责、业务模块进行拆分，然后创建不同的代码仓库进行管理。不同的团队可以专注于负责某一个代码仓库代码提交、编译、发布。

## lerna

Lerna 是一个管理工具，用于管理包含多个软件包 (package)的JavaScript 项目，使用git和npm管理多软件包代码仓库的工作流程进行优化。

## 安装

```
npm install --global lerna
```

## 初始化仓库/项目