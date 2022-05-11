# git

### Git 基本操作命令

```js
git config --global user.name "xuhaiyan"
git config --global user.email "haiyan.xu.vip@gmail.com"
生成秘钥：ssh-keygen -t rsa -C “haiyan.xu.vip@gmail.com”
查看秘钥： cat ~/.ssh/id_rsa.pub
切换分支：git checkout 分支名称  
移除文件：git rm 文件名  
提交到本地仓库：git commit -m '描述'
提交到远程仓库：git push orgin 分支名称
合并代码：git merge 分支名称 git push origin 分支名称
指定回到某一个版本：git rest --hard 版本号
1. 删除本地分支: git push origin --delete 分支名
2. 删除远程分支: git branch -d 分支名
3. 使用远程分支覆盖本地分支： git reset --hard origin/master(分支名)
4. 创建本地分支： git checkout -b dev(分支名)
git branch test   			// 新建分支（test）
git branch -d test 			// 删除分支（test）
git branch -D test			// 强制删除分支（test）
git checkout test			// 切换到test分支（test）
git branch				    // 查看本地分支
git branch -r 				// 查看服务器远程分支 
git branch -a				// 查看本地和远程分支
git branch -b develop
```

### Git stash

```
1.git stash: 现在想要切换分支，但是还不想要提交之前的工作；所以储藏修改。 将新的储藏推送到栈上，运行 git stash 或 git stash save

2.git stash list: 查看缓存列表
$ git stash list
stash@{0}: WIP on master: 049d078 added the index file
stash@{1}: WIP on master: c264051 Revert "added file_size"
stash@{2}: WIP on master: 21d80a5 added number to log

3.git stash apply 、git stash apply index(git stash apply stash@{2})
 可以通过原来 stash 命令的帮助提示中的命令将你刚刚储藏的工作重新应用：git stash apply。 如果想要应用其中一个更旧的储藏，可以通过名字指定它，像这样：git stash apply stash@{2}。 如果不指定一个储藏，Git 认为指定的是最近的储藏：
 
4. git stash drop、git stash pop
应用选项只会尝试应用暂存的工作——在堆栈上还有它。 可以运行 git stash drop 加上将要移除的储藏的名字来移除它
也可以运行 git stash pop 来应用储藏然后立即从栈上扔掉它。

5.git stash clear ：删除所有缓存的stash
```
### 提交规范
```
feat: 一个新特性
fix: 修复bug
docs: 文档修改
style: 不影响代码含义的更改（空格、格式、缺少分号等）
refactor: 代码重构
perf: 优化性能
test: 测试用例修改
chore: 对构建过程或辅助工具和库的更改，例如文档生成

作者：不要秃头啊
链接：https://juejin.cn/post/7085257325165936648
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```