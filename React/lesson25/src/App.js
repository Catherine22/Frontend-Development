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

    _saveUsername(username) {
        // console.log('_saveUsername');
        if (localStorage)
            localStorage.setItem('username', username);
    }

    _deleteComments(comment) {
        // console.log('_deleteComments');
        let newComments = [...this.state.comments];
        newComments.splice(comment.index, 1);
        this.setState({
            comments: newComments
        });
    }

    _onSubmit(comment) {
        comment.timestamp = Math.round((new Date()).getTime() / 1000);
        this.setState({comments: [comment, ...this.state.comments]});
    }

    render() {
        return (
            <div style={{margin: 10}}>
                <CommentInput
                    username={(localStorage && localStorage.getItem('username')) || ''}
                    onSubmit={this._onSubmit.bind(this)}
                    saveUsername={this._saveUsername.bind(this)}/>
                <CommentList
                    comments={this.state.comments}
                    onDeleteLabelPressed={this._deleteComments.bind(this)}
                />
            </div>
        );
    }

    componentDidUpdate() {
        if (localStorage) {
            let commentArray = JSON.stringify(this.state.comments);
            localStorage.setItem('comments', commentArray);
            // console.log('saved', commentArray);
        }
    }
}

export default App;
