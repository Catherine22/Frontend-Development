import React from 'react';
import './CommentInput.css';

const Comment = (props) => (
    <div className="commentView">
        <hr className="hr"/>
        <div>
            <label className="timeLabel">{`${convertTime(props.timestamp)}前`}</label>
        </div>
        <div>
            <label className="commentUser">{`${props.username}: `}</label>
            <label className="commentContent">{props.content}</label>
        </div>
    </div>
);

const convertTime = timestamp => {
    console.log(timestamp);
    let now = Math.round((new Date()).getTime() / 1000);
    // let diff = now - timestamp;
    let diff = 3600;
    let unit = ['秒', '分钟', '小时', '天'];
    let diffArray = [];

    for (let i = 0; i < 4; i++) { //sec, min, h
        if (diff >= 60) {
            diffArray.push(diff % 60);
            diff = Math.floor(diff / 60);
        } else {
            if (i < 3) {
                diffArray.push(diff);
            }
            else { // day
                console.log('day', diff);
                if (diff >= 24) {
                    diffArray.push(diff % 24); // h
                    diffArray.push(Math.floor(diff / 24)); // d
                }
            }
            break;
        }
    }

    // 29秒3分钟4小时1天前
    let time = '';
    // diffArray.map((value, index) => {
    //     // 跳过0分钟、0秒钟等
    //     if (value !== 0) {
    //         time = value + unit[index] + time;
    //     }
    // });
    // 1天4小时3分钟29秒前

    // 只显示最大等2个时间单位，不包含0
    let max = 2;
    let process = 0;
    diffArray.reverse().map((value, index) => {
        console.log('value', value);
        console.log('index', index);
        // 跳过0分钟、0秒钟等
        process += 1;
        if (value !== 0 && max !== 0) {
            max -= 1;
            time = value + unit[unit.length - 1 - process] + time;
        }
    });
    //1天4小时前
    console.log(time);
    return time;
};

export {Comment};
