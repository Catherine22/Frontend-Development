import React, {Component} from 'react';
import {CommentInput, CommentList} from './components/';

class App extends Component {
    render() {
        return (
            <div>
                <CommentInput/>
                <CommentList/>
            </div>
        );
    }
}

export default App;
