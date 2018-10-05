# 网络知识点

## 企业网络架构
![screenshot][1] 

## 传输介质
两个终端，只要通过一条能承载数据传输的物理介质连接，就能构成一个简单的网络      
- 同轴电缆      
![screenshot][2]        
- 双绞线        
![screenshot][3]        
- 光纤      
![screenshot][4]        
- 串口电缆      
![screenshot][5]        

比如企业网络中部署千兆以太网时，可以用双绞线或光纤。


## 冲突域
几台终端连上相同介质（同一条线路、hub等），同时发送数据包，电流信号叠加，也就是数据包发生碰撞（冲突），此时两个数据包就会丢失。       

## 双工模式
支持数据双向传输。         
1. 全双工：收发之间不发生冲突
2. 半双工：一部分线路收，一部分发。为解决收发之间产生的冲突，采**CSMA/CD**技术   

## CSMA/CD
- 冲突检测      
- 冲突避免      
- 先听后发、边发边听      
比如A发一个电流信号出去，其实后面的BCD都可以收到，BCD一旦知道有人在发信号，就先退避等待。若两个主机已经产生碰撞，发送阻断信号给其他主机，按时间轮流占用线路。

## 网络通信协议        
1. OSI 规范性的框架、标准      

| OSI七层 | 定义 | 解释 |
|------------|------------------------------|------------------------------------------------------------------|
| 应用层 | 为应用程序提供网站服务 | （软件工程师）提供人机交互的界面 |
| 表示层 | 数据格式化、加解密 | （软件工程师）编译 |
| 会话层 | 建立、维护、管理会话 | （软件工程师） |
| 传输层 | 建立、维护、管理端到端连接 | （网络工程师）把不同的应用根据端口来区分 |
| 网络层 | IP寻址和路由选择 | （网络工程师）提供IP地址，网络层的协议例如：TCP/IP、IPX/SPX、SNA |
| 数据链路层 | 控制物理层与网络层之间的通信 | （网络工程师）把数据包变成0和1 |
| 物理层 | 比特流传输 | （网络工程师）把0和1变成高低电压穿出去 |

2. TCP/IP 基本上全部都是用此协议        
把OSI的前三层（应用、表示、会话）合并以及后两层（数据链路层和物理层）合并。

| TCP/IP四层 | 数据类型 | 
|------------|-----------------------------------------------------|
| 应用层 | message或称PDU（协议数据单元） |
| 传输层 | 传输层的header + message，此时成为segment（数据段） |
| 网络层 | 其他定位信息如原IP + segment，成为packet（数据包） |
| 网络接口层 | frame（数据帧），往后变成bit，也就是高低电压了 |

3. IPX/SPX      
4. SNA      

### 局域网

| 以太网II  | ![screenshot][6] | 64≤数据帧长度≤1518 (byte)，一旦<64byte，表示数据遗失  |
|-----------|------------------|---|
| IEEE802.3 | ![screenshot][7] |   |

>
D.MAC: Destination MAC      
S.MAC: Source MAC       
一旦length/type的值≤1500(0x05DC)，肯定是IEEE802.3，若≥1536(0x0600)则为以太网2

### 广域网
1. 帧中继       
2. PPP      
3. HDLC



[1]: https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/enterprise_network.png
[2]: https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/coaxial_cable.png
[3]: https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/twisted-pair_cables.png
[4]: https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/fiber_optic_cable.png
[5]: https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/v.24_35_cable.png
[6]:
https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/Ethernet2.png
[7]:
https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/IEEE802.3.png