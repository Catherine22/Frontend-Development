# 互联网
互联网是由链路（LAN或WAN）和交换机所组成，最著名的互联网为Internet。

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

### TCP/IP, 􏱓Transmission Control Protocol/Internet Protocol
基本上全部都是用此协议。        
把OSI的前三层（应用、表示、会话）合并以及后两层（数据链路层和物理层）合并。

| TCP/IP五层 | 数据类型 | 行为 | 
|------------|-------------------------------------------|-----|
| 应用层 | message或称PDU（协议数据单元） | 两进程之间的通信 |
| 传输层 | 传输层的header + message，此时成为segment（数据段） | 在此有两个协议——TCP、UDP和SCTP *注1 |
| 网络层 | 其他定位信息如原IP + segment，成为packet（数据包） | 单播、多播的路由协议、因特网协议与其他辅助协议 *注2 |
| 数据链路层 | frame（数据帧） | 没有被定义协议，可支援所有标准或私有的协议。路由器与链路说明 *注3 |
| 硬件设备 | bit，也就是高低电压或光信号 | 传输介质为电缆或大气，将bit转换为信号包含多种协议。 |

E.g. 两台主机之间的通信，由三个LAN组成的小型互联网，每个LAN有个链路层交换机，三个LAN都连接到一个路由器。       
![TCPIP](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/TCPIP.png)    

路由器由三层协议，链路层交换机只有两层。      
范例中路由器拥有三条链接，由主机A到B涉及两条链接，每一条链接可以有不同的链路层和物理协议层。        
路由器接收到链路1的packet并投递到链路2

应用、传输、网络层的任务是end-to-end，任务范围是Internet。     
数据链路和物理层是hop-to-hop，任务范围是链路。     
也就是高三层的数据单元（packet）不应该被链路层交换机或路由器改变。在低两层，主机创建的packet仅仅被路由器改变，链路层交换机不加以干涉。

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
>**APR**     
地址解析协议，Address Resolution Protocol，ARP      
帮助IP寻找一台主机或路由器链路层地址。      

>注3     
>**路由器**      
Packet从源主机到目的主机中可能含有多个链路集，路由器选择最好的链路进行传输。       
>
>**链路**        
可以是具有链路层交换机的有线LAN、无线LAN、有线WAN或无线WAN。

## OSI 
规范性的框架、标准      

| OSI七层 | 定义 | 解释 |
|------------|------------------------------|------------------------------------------------------------------|
| 应用层 | 为应用程序提供网站服务 | （软件工程师）提供人机交互的界面 |
| 表示层 | 数据格式化、加解密 | （软件工程师）编译 |
| 会话层 | 建立、维护、管理会话 | （软件工程师） |
| 传输层 | 建立、维护、管理端到端连接 | （网络工程师）把不同的应用根据端口来区分 |
| 网络层 | IP寻址和路由选择 | （网络工程师）提供IP地址，网络层的协议例如：TCP/IP、IPX/SPX、SNA |
| 数据链路层 | 控制物理层与网络层之间的通信 | （网络工程师）把数据包变成0和1 |
| 物理层 | 比特流传输 | （网络工程师）把0和1变成高低电压穿出去 |

3. IPX/SPX      
4. SNA      

## 传输介质
---
两个终端，只要通过一条能承载数据传输的物理介质连接，就能构成一个简单的网络      
- 同轴电缆      
![screenshot](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/coaxial_cable.png)        
- 双绞线        
![screenshot](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/twisted-pair_cables.png)        
- 光纤      
![screenshot](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/fiber_optic_cable.png)        
- 串口电缆      
![screenshot](https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/v.24_35_cable.png)        

比如企业网络中部署千兆以太网时，可以用双绞线或光纤。

### 冲突域
几台终端连上相同介质（同一条线路、hub等），同时发送数据包，电流信号叠加，也就是数据包发生碰撞（冲突），此时两个数据包就会丢失。       

### 双工模式
支持数据双向传输。         
1. 全双工：收发之间不发生冲突
2. 半双工：一部分线路收，一部分发。为解决收发之间产生的冲突，采**CSMA/CD**技术   

### CSMA/CD
- 冲突检测      
- 冲突避免      
- 先听后发、边发边听      
比如A发一个电流信号出去，其实后面的BCD都可以收到，BCD一旦知道有人在发信号，就先退避等待。若两个主机已经产生碰撞，发送阻断信号给其他主机，按时间轮流占用线路。

# 参考来源
计算机网络 自顶向下方法

[Ethernet2.png]:
https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/Ethernet2.png
[IEEE802.3.png]:
https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/IEEE802.3.png