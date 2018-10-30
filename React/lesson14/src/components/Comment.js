import React from 'react';
import './CommentInput.css';

const Comment = (props) => (
    <div className="commentView">
        <hr className="hr"/>
        <div>
            <label className="commentUser">{`${props.user}: `}</label>
            <label className="commentContent">{props.content}</label>
        </div>
    </div>
);

export {Comment};
