import React, {Component} from 'react';
import {Comment} from './';

class CommentList extends Component {

    render() {
        return (
            <div>
                <Comment user="user1" content="comment1"/>
                <Comment user="user2" content="comment2"/>
            </div>
        );
    }
}

export {CommentList};
