# The Internet
互联网是由链路（LAN或WAN）和交换机所组成，最著名的互联网为Internet。  

Internet有各式各样的标准，一份Internet draft经由Internet管理机构建议，作为RFC（Request for Command）文档发布。   


## 交换
---
两种交换方式，分组交换网络为主流。
### 电路交换网络（Circuit Switched Network）
两台交换机之间的的粗线必须能同时处理四路语音通信，成本高而且浪费。       
![circuit_switched_network](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/circuit_switched_network.png)

### 分组交换网络 （Packet Switched Network）
路由器具备存储和转发分组的功能，假设线路负载只有2，同时又有四路语音要处理，就分组并依序发送，可能会有延迟。      
![packet_switched_network](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/packet_switched_network.png)

## 访问Internet
---
### 1. 电话网络
只要由电话服务就能利用电话网络连接到Internet，有两种方法可以实现：     
- 拨号服务：利用软件拨打电话到ISP，速度非常慢。一旦建立电话连接，一旦线路用于Internet时，电话不能用。       
- DSL服务：DSL允许语音与数据通信同时进行。

### 2. 有线电视网络
利用有线电视服务代替天线接收电视广播，有线电视公司升级其有线电视网络并连接到Internet。速度则与接到同一电缆的用户数量有关。

### 3. 无线网络
利用有线和无线混合连接的方式访问Internet。

### 4. 直接连接到Internet
大结构或大公司直接变成一个本地ISP，直接从线路提供者租用高速WAN并接入地区的ISP。

案例：企业网络架构
![screenshot](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/enterprise_network.png)

## 局域网（local area network，LAN）
---
通常是私有的，连接公司或学校内的主机。在以前，所有主机共用一条电缆，当一主机发送数据包时，所有主机都会收到，目标接收者保存，而其他主机抛弃数据包。现在则用交换机，主机之间通过交换机直接沟通。      
![LAN](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/LAN.png)      
LAN之间的通信（比如东岸和西岸的分公司）则通过电信公司租用点对点通信的WAN以连接两个LAN。

| 以太网II  | ![screenshot][Ethernet2.png] | 64≤数据帧长度≤1518 (byte)，一旦<64byte，表示数据遗失  |
|-----------|------------------|---|
| IEEE802.3 | ![screenshot][IEEE802.3.png] |   |

>
D.MAC: 目的MAC地址      
S.MAC: 自己的MAC地址       
一旦length/type的值≤1500(0x05DC)，肯定是IEEE802.3，若≥1536(0x0600)则为以太网2

### MAC 地址    
由两部分组成，前24 bits 为 OUI（厂商代码，由IEEE管理和分配），剩下24位由厂商自己分配。      
第一个 byte 的最后一位 bit（也就是第八个 bit ）有特殊含义，表示该数据包是单播、组播还是广播。1: 组播或广播（全部48 bit 都是1） 2：单播      

### 数据帧的发送与接收       
1. 主机A发送数据帧      
2. 主机B发现A的数据帧 D.MAC 包含自己的 MAC 地址，拆开数据帧，把data的部分向上传输。

## 广域网（wide area network，WAN）
---
通常范围是一个城市甚至国家，由通信公司运维。
1. 帧中继       
2. PPP      
3. HDLC

## 协议
---
定义接收者、发送者与中间设备通信的规范，一旦通信变得复杂，我们需要把任务划分到不同的阶层，每一层定义不同的协议。

# TCP/IP, Transmission Control Protocol/Internet Protocol
基本上全部都是用此协议。        
把OSI的前三层（应用、表示、会话）合并。

| TCP/IP五层 | 数据类型 | 行为 | 地址 |
|------------|-------------------------------------------|-----|-----|
| 应用层 | message或称PDU（协议数据单元） | 两进程之间的通信，例如HTTP、FTP、DNS和SNMP | abc.com 或 xxx@mail.com |
| 传输层 | 传输层的header + message，此时成为segment（数据段） | 在此有几个协议——TCP、UDP和SCTP *注1 | 端口号， 用来区别同一时间运行的几个应用程序 |
| 网络层 | 其他定位信息如原IP + segment，成为packet（数据包） | 单播、多播的路由协议、因特网协议与其他辅助协议 *注2 | 全局地址，遍布整个Internet |
| 数据链路层 | frame（数据帧） | 没有被定义协议，可支援所有标准或私有的协议。路由器与链路说明 *注3 | MAC address |
| 硬件设备 | bit，也就是高低电压或光信号 | 传输介质为电缆或大气，将bit转换为信号包含多种协议。 |

E.g. 两台主机之间的通信，由三个LAN组成的小型互联网，每个LAN有个链路层交换机，三个LAN都连接到一个路由器。       
![TCPIP](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/TCPIP.png)    

路由器由三层协议，链路层交换机只有两层。      
范例中路由器拥有三条链接，由主机A到B涉及两条链接，每一条链接可以有不同的链路层和物理协议层。        
路由器接收到链路1的packet并投递到链路2

应用、传输、网络层的任务是end-to-end，任务范围是Internet。     
数据链路和物理层是hop-to-hop，任务范围是链路。     
也就是高三层的数据单元（packet）不应该被链路层交换机或路由器改变。在低两层，主机创建的packet仅仅被路由器改变，链路层交换机不加以干涉。   

## Multiplexing，多路复用；Demultiplexing，多路分解
由于TCP/IP允许同一层使用多种协议，需要一个头部字段来识别被封装的packet是属于那个协议。好比在传输层，TCP和UDP可收到多个应用层的message；而在网络层，则可收到TCP或UDP的segment，以及ICMP、IGMP等协议。   

![Multiplexing](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/multiplexing.png)

>注1     
>**TCP协议**        
传输控制协议，Transmission Control Protocol，TCP        
在传输数据之前，首先在两主机的逻辑层建立逻辑连接。以提供：      
>1. 流量控制：匹配源主机的数据发送速率和目的主机的数据接收速率，以防目的主机溢出。       
>2. 差错控制：保证segment无损到达，比如重新发送受损segment。     
>3. 拥塞控制：减少由网络拥塞造成的segment丢失。     
>
>**UDP协议**       
User Datagram Protocol，UDP     
无连接协议，在传输segment前不用建立逻辑连接。所谓的无连接就是每个segment之间没有关系，由于少了TCP的三个功能，能减少开销，也就是较快。     
>
>**SCTP协议**       
Stream Control Transmission Protocol，SCTP

>注2     
>**IP**      
因特网协议，Internet Protocol，IP       
定义segment的分组（packet）格式，负责把packet从源主机路送到目的主机。再路由器负责将packet发送到路径上的下个路由器。     
>
>**路由协议**        
不参与路由，但为路由器创建转发路由表。      
>
>**ICMP**        
Internet Control Message Protocol，ICMP     
帮助IP报告遇到的问题。     
>
>**IGMP**        
Internet Group Management Protocol，IGMP        
协助IP多任务处理。        
>
>**DHCP**        
Dynamic Host Configuration Protocol，DHCP       
帮助IP获取一台主机的网络层地址。        
>
>**ARP**     
地址解析协议，Address Resolution Protocol，ARP      
帮助IP寻找一台主机或路由器链路层地址（MAC Address）。      

>注3     
>**路由器**      
Packet从源主机到目的主机中可能含有多个链路集，路由器选择最好的链路进行传输。       
>
>**链路**        
可以是具有链路层交换机的有线LAN、无线LAN、有线WAN或无线WAN。

## 应用层

# OSI
由ISO定义的框架、标准。      

| OSI七层 | 定义 | 解释 |
|------------|------------------------------|------------------------------------------------------------------|
| 应用层 | 为应用程序提供网站服务 | （软件工程师）提供人机交互的界面 |
| 表示层 | 数据格式化、加解密 | （软件工程师）编译 |
| 会话层 | 建立、维护、管理会话 | （软件工程师） |
| 传输层 | 建立、维护、管理端到端连接 | （网络工程师）把不同的应用根据端口来区分 |
| 网络层 | IP寻址和路由选择 | （网络工程师）提供IP地址，网络层的协议例如：TCP/IP、IPX/SPX、SNA |
| 数据链路层 | 控制物理层与网络层之间的通信 | （网络工程师）把数据包变成0和1 |
| 物理层 | 比特流传输 | （网络工程师）把0和1变成高低电压穿出去 |

# 常用网络管理工具
- 具有GUI如Wireshark、Ping Plotter、OmniPeek    
- traceroute、nslookup、dig、ipconfig和ifconfig

# Packet Sniffing   
利用Packet Sniffing（数据包嗅探）捕捉并分析送出或接受的packet。    
![Packet Sniffing 1](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/packet_sniffing_1.png)    
![Packet Sniffing 2](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/packet_sniffing_2.png)

## Wireshark
一个免费、开源的网络数据包分析软件。操作说明如下：   

### 捕获接口配置
1. 安装Wireshark后开启，点击Capture options，选择Input   
![Wireshark](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/Wireshark1.png)   

2. 取消不必要的接口，激活混杂模式    
> **Promiscuous Mode（混杂模式）**    
接收所有经过网卡的数据包，包括不是发给本机的包。一般模式只接收发给本机的包，包括广播包，其他一律丢弃。    
**捕获过滤器**：    
捕获指定包

![Wireshark](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/Wireshark2.png)  

3. 点击Start开始捕获包，可搭配Stop停止并储存。或是让Wireshark自动保存，此时需切换到Output。在Options则可选择是否解析网络名称（因消耗不少资源，不推荐）或Port等。

![Wireshark](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/Wireshark3.png)  

### Preference 配置
- 加入新的栏位，例如想要查看ttl    
![Wireshark](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/Wireshark4.png)  
或者直接找出ttl值，右键添加至栏位    
![Wireshark](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/Wireshark5.png)  

- 设置默认接口，点选左边Capture，右边Default Interface设置    
- 过滤器   
![Wireshark](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/Wireshark6.png)   
之后会在右上角出现自定义过滤器   
![Wireshark](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/Wireshark7.png)   

### 常用Protocol设置
![Wireshark](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/Wireshark8.png)
- IPv4    
  - 不用传统的TOS位的解析，改用DiffServ栏位
  - 不让Wireshark对IPv4的碎片做重组    
  - GeoLocation需另外添加数据库才能看到相应的信息

![Wireshark](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/Wireshark9.png)
- TCP   
  - 不要用相对序列号，用真实的

### 查找、标记和导出数据包
用指令查询，首先点击查找按钮，调整过滤方式再输入条件，三个范例如下：    

1. 查找目的或来源ip地址为74.125.10.153的包    
![Wireshark](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/Wireshark10.png)    

2. 寻找ARP请求的广播    
![Wireshark](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/Wireshark11.png)    

3. 以字符串搜寻   
![Wireshark](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/Wireshark12.png)  

标记（鼠标右键，选择Mark/Unmark Packet）   
导出特定分组（暂停，上方File栏位，选择Export Specific Packets，在Packet Range中选择Marked Packets Only）

### 设置GeoLocation
- Preferences中选择Protocol，让IPv4允许GeoLocation   
![Wireshark](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/Wireshark13.png)  

- 下载MaxMind的地理信息数据库，注意Wireshark支援的数据库类型是[.mmdb](https://dev.maxmind.com/zh-hans/geoip/geoip2/geolite2/)还是[.dat](https://dev.maxmind.com/zh-hans/geoip/legacy/geolite/)    
![Wireshark](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/Wireshark14.png)    

- 下载完所有.mmdb或.dat文件后放入同一个目录底下，Preferences中选择Name Resolution，MaxMind栏位选择Edit，添加刚才创建的目录   
![Wireshark](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/Wireshark15.png)    

- 在Ethernet II中看到地理信息   
![Wireshark](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/Wireshark16.png)  

### 时间设置
View - Time Display Format，选择适合的时间显示，比如绝对时间或相对时间（Seconds Since Beginning of Capture）。

### 数据包捕获   
一般来说，直接用内建的过滤器，不用特地学习过滤器的语法。   
![Wireshark](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/Wireshark17.png)   
也可以从列表选择 Manage Capture Filters 添加自定义过滤器，[官网范例](https://wiki.wireshark.org/CaptureFilters#Examples)。  

![Wireshark](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/Wireshark18.png)    
>格式    
1. Type，类型    
   例如：host, net, port, portrange   
2. dir，方向   
   例如：src, dst, src or dst, src and dst, ra, ta   
3. Proto，协议   
   例如：ether, fddi, tr, wlan, ip, ip6, arp, rarp, decnet, tcp and udp

>逻辑运算符    
与：```and``` 或 ```&&```    
或：```or``` 或 ```||```   
非：```！``` 或 ```not```   
等于：```==``` 或 ```eq```    
不等于：```!=``` 或 ```ne```   
大于：```>``` 或 ```gt```   
小于：```<``` 或 ```lt```     
大于等于：```>=``` 或 ```ge```   
小于等于：```<=``` 或 ```le```   

例子：   
**过滤ipv6**    
```
ip6
```
**过滤192.168.0.11网络流量，限制长度为24bits**    
```
net 192.168.0.11/24
```

**过滤arp协议**    
```
arp
```
或   
```
ether proto 0x0806
```    
更多以太网协议见[wiki](https://zh.wikipedia.org/wiki/%E4%BB%A5%E5%A4%AA%E7%B1%BB%E5%9E%8B)    

**ICMP过滤**

echo请求(type = 8)或echo回复(type = 0)
```
icmp[icmptype] == 0 or icmp[icmptype] == 8
```
测试指令    
```
$ping www.baidu.com
```

**ICMP6过滤**
```
icmp[icmp6type] == 0
```

**过滤port从10到100**
```
portrange 10-100
```

**通过协议字节偏移值（Offsets）获取数据**   
IPv4 packet header的格式   
![Wireshark](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/Wireshark19.png)    
比如我们要找出1000bits的packet，就看Total Length栏位（位于第2字节，占2字节）    
```
ip[2:2] == 1000
```
或者找出TTL（位于第8字节）为64的packet   
```
ip[8:1] == 64
```
也可以省略为   
```
ip[8] == 64
```

**捕捉主机196.21.5.254的Telnet数据包**    
```
host 196.21.5.254 and tcp port 23
```   

**捕捉主机196.21.5.254的ping数据包**   
```
host 192.168.0.11 and (icmp[icmptype] == 0 or icmp[icmptype] == 8)
```

**捕捉单播流量**    
非广播、非组播   
```
not broadcast and not multicast
```

**捕捉非本地流量**   
```
not src and dst net 196.21.5.254
```
### 数据包过滤   
可以直接输入语法，或点击Express查找所有指令。   
![Wireshark](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/Wireshark20.png)    
另一种常用方式则是直接从结果中找出感兴趣的包，并且指定特定栏位作为过滤条件。    
比如我想找来源为151.101.108.133的packet，则    
![Wireshark](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/Wireshark21.png)    
Wireshark自动生成过滤条件   
![Wireshark](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/Wireshark22.png)    

另一个实例，改用複製的方式获取过滤条件   
![Wireshark](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/Wireshark23.png)    
黏贴至过滤栏位   
![Wireshark](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/Wireshark24.png)    

***注意：显示过滤器和捕获过滤器的语法不同***   
比如捕获ip为192.168.0.1用```ip host 192.168.0.1```或可省略为```host 192.168.0.1```，但在显示过滤器中则用```ip.addr == 192.168.0.1```，显示过滤器的功能更多。    

***[Wireshark显示过滤器列表](https://www.wireshark.org/docs/dfref/)***
### 其他
#### 追踪流    

查看TCP流，可以捕获明码内容    
![Wireshark](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/Wireshark25.png)    
![Wireshark](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/Wireshark26.png)    

# 参考来源
计算机网络 自顶向下方法    
[教主技术进化论 2018 第10期 Wireshark使用技巧](https://www.youtube.com/watch?v=5QkcjgWAAxU)

[Ethernet2.png]:
https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/Ethernet2.png
[IEEE802.3.png]:
https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/IEEE802.3.png
