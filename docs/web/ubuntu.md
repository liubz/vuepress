apt-get update 更新源索引信息和依赖对应关系等到/var/lib/apt/lists
apt-get upgrade 更新已安装并可更新的软件(一键升级)
apt-get dist-upgrade 升级系统到相应的发行版(如果有依赖变化会自己解决，比较危险)
apt-get install wget 安装包。
apt-get remove wget 卸载一个已安装的软件包（保留配置文件）
apt-get purge wget 移除软件包（删除配置信息）
apt-get autoclean 删除已经删掉的软件(定期运行优化磁盘空间)
apt-get clean 已安装的软件包 .deb文件会被一并删除 去/var/cache/apt/archives目录看执行结果
