修改centos7.4 静态ip（ifcfg-ens33为网卡驱动文件）
vi /etc/sysconfig/network-scripts/ifcfg-ens33

TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=static #静态ip
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=ens33
UUID=fe9acbc4-5787-4875-8a26-9fd1e02b3459
DEVICE=ens33
ONBOOT=yes #重启时自动执行该文件
IPADDR=192.168.0.88 #固定ip
GATEWAY=192.168.0.1
NETMASK=255.255.255.0
DNS1=8.8.8.8

$ service network restart




搭建ftp服务

cat /etc/redhat-release 查看系统版本
centos 7.4
rpm -qa | grep vsftpd
vsftpd-3.0.2-22.el7.x86_64

一、通过yum安装vsftpd


yum install -y vsftpd


二、修改vsftpd的配置文件
vi /etc/vsftpd/vsftpd.conf


修改配置文件如下：

1.不允许匿名访问


anonymous_enable=NO


2.允许使用本地帐户进行FTP用户登录验证


local_enable=YES


3.设定支持ASCII模式的上传和下载功能。


ascii_upload_enable=YES

ascii_download_enable=YES

4.使用户不能离开主目录

chroot_list_enable=YES，chroot_local_user=YES，在/etc/vsftpd.chroot_list文件中列出的用户，可以切换到其他目录；未在文件中列出的用户，不能切换到其他目录。


chroot_local_user=YES

chroot_list_enable=YES

chroot_list_file=/etc/vsftpd/chroot_list

5.
配置文件最后添加


allow_writeable_chroot=YES 
最后 :wq保存修改

6.如果/etc/vsftpd/chroot_list不存在，则需要创建该文件


vi /etc/vsftpd/chroot_list
:wq直接保存并退出就行。


7.重启vsftpd


systemctl restart vsftpd.service


三、新建用户

新建分组
groupadd dev
修改/root目录用户组为dev
chgrp -R dev /root

新建用户
useradd jianghe
修改用户密码


passwd jianghe

将新用户加入分组
gpasswd -a jianghe dev

设置root文件夹权限
chmod 770 /root

这样只要创建用户，加入dev分组 ftp就可以访问/root文件