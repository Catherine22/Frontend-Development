import React, {Component} from 'react';
import {Comment} from './';

class CommentList extends Component {

    static defaultProps = {
        comments: []
    };

    constructor(props) {
        super(props);
        this.state = {
            updateFlag: false
        }
    }

    componentDidMount() {
        // Update comments every 5 seconds
        setInterval(this._refresh.bind(this), 5000);
    }

    componentWillUnmount() {
        clearInterval();
    }

    _refresh() {
        this.setState({
            updateFlag: !this.state.updateFlag
        })
    }

    _onDeleteLabelPressed(commentProps) {
        this.props.onDeleteLabelPressed(commentProps);
    }

    render() {
        const {comments} = this.props;
        return (
            <div>
                {
                    comments.map((comment, index) =>
                        <Comment key={index}
                                 index={index}
                                 username={comment.username}
                                 content={comment.content}
                                 timestamp={comment.timestamp}
                                 onDeleteLabelPressed={this._onDeleteLabelPressed.bind(this)}
                        />
                    )
                }
            </div>
        );
    }
}

export {CommentList};
