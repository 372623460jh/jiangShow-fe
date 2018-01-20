# linux下node环境搭建
## 前言
- 环境：centos 7.4,node v6.12.2.2,npm 3.10.10,pm2 
## nodejs，npm安装部分：
- 获取nodejs6.*+资源：
    ```
    curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
    ```
- 使用yum安装nodejs和npm
    ```
    yum -y install nodejs
    ```
- 查看node所在路径(非安装)
    ```
    which nodejs
    whereis -b nodejs
    ```
- 设置npm的全局安装路径和缓存路径(非安装)
    ```
    cd /usr/local/nodejs6
    mkdir node_global
    mkdir node_cache
    npm config set prefix "node_global" #设置全局路径为/usr/local/nodejs6/node_global
    npm config set cache "node_cache" #设置全局路径为/usr/local/nodejs6/node_cache
    ```
## 使用pm2进程管理来管理node进程

- 安装pm2
    ```
    npm install pm2 -g   						# 安装
    ```
- 常用指令
    ```
    pm2 start app.js -i 1 						# 后台运行pm2，启动1个app.js
    pm2 list               						# 显示所有进程状态
    pm2 stop 0             						# 停止指定的进程
    pm2 stop all           						# 停止所有进程
    pm2 delete 0           						# 杀死指定的进程
    pm2 delete all         						# 杀死全部进程
    ```