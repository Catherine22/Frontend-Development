import React from 'react';
import './CommentInput.css';

const Comment = (props) => (
    <div className="commentView">
        <hr className="hr"/>
        <div>
            <label className="timeLabel">{convertTime(props.timestamp)}</label>
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
    let diff = now - timestamp;
    let unit = ['秒', '分钟', '小时', '天'];
    let diffArray = [0, 0, 0, 0];

    for (let i = 0; i < 4; i++) { //sec, min, h
        if (diff >= 60) {
            diffArray[i] = diff % 60;
            diff = Math.floor(diff / 60);
        } else {
            if (i < 2) {
                diffArray[i] = diff;
            } else { // h & day
                if (diff >= 24) {
                    diffArray[2] = diff % 24; // h
                    diffArray[3] = Math.floor(diff / 24); // d
                } else
                    diffArray[i] = diff; // h
            }
            break;
        }
    }

    // 只显示最大等2个时间单位，且由大到小排序，不包含0
    // 比如：1天0小时3分钟29秒，会显示1天3分钟
    let time = '';
    let max = 2;
    unit = unit.reverse();
    diffArray.reverse().map((value, index) => {
        // 跳过0分钟、0秒钟等
        if (value !== 0 && max !== 0) {
            max -= 1;
            time += value + unit[index];
        }
    });

    console.log(time);
    return (time.length > 0) ? `${time}前` : '刚刚';
};

export {Comment};
