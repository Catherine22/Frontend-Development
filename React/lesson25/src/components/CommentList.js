import React, {Component} from 'react';
import {Comment} from './';

class CommentList extends Component {

    static defaultProps = {
        comments: []
    };

    render() {
        const {comments} = this.props;
        return (
            <div>
                {
                    comments.map((comment, index) => <Comment key={index}
                                                              username={comment.username}
                                                              content={comment.content}
                                                              timestamp={comment.timestamp}
                        />
                    )
                }
            </div>
        );
    }
}

export {CommentList};
