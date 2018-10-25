import React, {Component} from 'react';

class Exercise1 extends Component {
    // -------------------version 1-------------------
    // getNotificationsCount() {
    //     return Math.floor(Math.random() * 4); // 0~3
    // }
    //
    // render() {
    //     let notifications = this.getNotificationsCount();
    //     return (
    //         <div>
    //             {notifications > 0 ?
    //                 <span>有{notifications}条未读消息</span> :
    //                 <span>没有未读消息</span>
    //             }
    //         </div>
    //     );
    // }
    // -------------------version 1-------------------


    // -------------------version 2-------------------
    getNotificationsCount() {
        return Math.floor(Math.random() * 4); // 0~3
    }

    renderNotificationText(notifications) {
        if (notifications > 0) {
            return (<span>有{notifications}条未读消息</span>);
        } else {
            return (<span>没有未读消息</span>);
        }
    }

    render() {
        let notifications = this.getNotificationsCount();
        return (
            <div>
                {this.renderNotificationText(notifications)}
            </div>
        );
    }
    // -------------------version 2-------------------
}

export default Exercise1;
