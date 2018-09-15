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



[1]: https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/enterprise_network.png
[2]: https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/coaxial_cable.png
[3]: https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/twisted-pair_cables.png
[4]: https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/fiber_optic_cable.png
[5]: https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/screenshots/v.24_35_cable.png