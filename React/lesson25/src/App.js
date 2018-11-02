import React, {Component} from 'react';
import {CommentInput, CommentList} from './components/';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }

    _onSubmit(comment) {
        this.setState({comments: [...this.state.comments, comment]});
    }

    render() {
        return (
            <div style={{margin: 10}}>
                <CommentInput onSubmit={this._onSubmit.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        );
    }
}

export default App;
