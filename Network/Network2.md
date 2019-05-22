# 应用层
由于应用层是整个TCP/IP协议簇的最上层，只负责接收来自传输层协议的服务，不给上一层（根本没有）提供服务。所以这一层的协议可以随意的删除或新增，只要新加入的协议可以接收传输层的服务即可。

## 应用层协议
分为**标准协议**和不需要经过Internet管理机构审核的**非标准协议**。
![application_layer_protocols](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/application_layer_protocols.png)   

## 客户-服务器模式
传统模式。服务进程不停的运行，需要服务时就打开客户进程接收。    
![client_server](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/client_server.png)    
如图，一个服务进程可能会被多个客户进程同时连接，因此需要强大的服务器，并且服务能带来收益。例如：WWW（World Wide Web）、HTTP（HyberText Transfer Protocol）、FTP（File Transfer Protocol）、SSH（Secure Shell）、电子邮件等。

在此模式中，应用层的通信是在两个不同的process之间进行的。

### Process
应用层的程序成为进程（process）

### API
应用程序接口（Application Process Interface），在应用层中两进程为了通信，必须将指令集传给TCP/IP下面四层，打开连接、传送数据，再由另一端的进程接收数据并关闭连接。这样的指令集称为API。

三种常见的API：

#### socket
socket地址以ipv4来说，一个IP地址有四个bytes，也就是32bits，端口号则是从Internet管理机构定义的整数中分配，操作系统必须确定该端口号没有被其他进程占用。    
![socket_address](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/socket_address.png)    

一般标准应用则有标准接口，比如HTTP是80。服务器有一个唯一识别的名称，比如www.abc.com或abc@xxx.com，通过一个客户-服务器应用DNS（Domain Name System）可以将此URL映射到对应的IP地址

#### TLI
Transport Layer Interface, 传输层接口。   
在TCP/IP协议簇中有三个常见的传输层接口：UDP、TCP和SCTP。详见[传输层篇](https://github.com/Catherine22/Front-end-warm-up/blob/master/Network/Network3.md)

#### STREAM

## 标准客户-服务器模式

#### WWW
用户通过浏览器访问一个正在服务器上运行的程序。   
![browser](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/browser.png)    

### 浏览器
通过浏览器访问文档，控制程序（可以是HTTP、FTP等协议）使用解释程序（比如HTML􏳨、Java、JavaScript）显示文档。
```
protocol://host:port/path
```

- protocol: E.g. Http, FTP    
- host: 服务器的ip地址或域名   
- path：􏴔􏴕􏰤􏴞操作系统中文件的位置和名称    
- port: 常见端口如下：   

| port | name |
| ---- | ---- |
| 20/21 | FTP |
| 22 | SSH |
| 23 | Telnet |
| 25 | SMTP |
| 53 | DNS |
| 67/68 | DHCP |
| 69 | TFTP |
| 80 | HTTP |
| 110 | POP |
| 123 | NTP |
| 137/138/139 | NetBIOS |
| 143 | IMAP |
| 161/162 | SNMP |
| 179 | BGP |
| 389 | LDAP |
| 443 | HTTPS |
| 636 | LDAPS |
| 989/990 | FTP over TLS/SSL |


## 对等模式
P2P模式。一台计算机可同时提供和接收服务，不需要一个一直运行的服务进程。两个问题分别是安全问题和适用性，不是每个服务都能用对等模式操作。    
![p2p](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/p2p.png)    
例如：BitTorrent、Skype、IPTV和网络电话等。

## 混合模式
比如可以从客户-服务器模式来找到匹配的节点（peer）地址，再由该节点实际提供服务。
