import React, {Component} from 'react';
import {CommentInput, CommentList} from './components/';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.renderHistory()
        };
    }

    renderHistory() {
        if (localStorage && localStorage.getItem('comments')) {
            // console.log('saved', JSON.parse(localStorage.getItem('comments')));
            return JSON.parse(localStorage.getItem('comments'));
        }
        return [];
    }

    _onSubmit(comment) {
        comment.timestamp = Math.round((new Date()).getTime() / 1000);
        this.setState({comments: [comment, ...this.state.comments]});
    }

    render() {
        return (
            <div style={{margin: 10}}>
                <CommentInput onSubmit={this._onSubmit.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        );
    }

    componentDidUpdate() {
        if (localStorage && this.state.comments.length > 0) {
            let commentArray = JSON.stringify(this.state.comments);
            localStorage.setItem('comments', commentArray);
            // console.log('saved', commentArray);
        }
    }
}

export default App;
