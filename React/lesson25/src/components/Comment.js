import React, {Component} from 'react';
import './CommentInput.css';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteLabel: false,
            timestamp: this.convertTime(this.props.timestamp),
            comment: this.commentFilter(this.props.content)
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            timestamp: this.convertTime(nextProps.timestamp),
            comment: this.commentFilter(nextProps.content)
        });
    }

    render() {
        return (
            <div className="commentView" onMouseOver={() => {
                this.setState({
                    showDeleteLabel: true
                });
            }} onMouseLeave={() => {
                this.setState({
                    showDeleteLabel: false
                });
            }}>
                <hr className="hr"/>
                <div>
                    <label className="timeLabel">{this.state.timestamp}</label>
                </div>
                <div>
                    <label className="commentUser">{`${this.props.username}: `}</label>
                    <label className="commentContent"
                           dangerouslySetInnerHTML={{__html: this.state.comment}}/>
                </div>
                <div style={{height: 10}}>
                    <label className="deleteLabel"
                           hidden={!this.state.showDeleteLabel}
                           onClick={this.props.onDeleteLabelPressed.bind(this, this.props)}>删除
                    </label>
                </div>
            </div>);
    }

    convertTime(timestamp) {
        // console.log(timestamp);
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

        // console.log(time);
        return (time.length > 0) ? `${time}前` : '刚刚';
    }

    commentFilter(comments) {
        let tag = -1;
        let newComments = comments.split('');
        for (let i = 0; i < newComments.length; i++) {
            if (newComments[i] === '`') {
                if (tag !== -1) {
                    newComments[tag] = '<code class="codeBlock">';
                    newComments[i] = '</code>';
                    tag = -1;
                } else {
                    tag = i;
                }
            }
        }
        return newComments.join('');
    }
}

export {Comment};
