import React, {Component} from 'react';
import LikeButton from "./LikeButton";

class App extends Component {
    constructor() {
        super();
        this.state = {
            likeText: '喜欢',
            cancelText: '取消'
        };
    }

    _onUpdateWordings() {
        if (this.state.likeText === '喜欢') {
            this.setState({
                likeText: 'Like',
                cancelText: 'Cancel'
            });
        } else {
            this.setState({
                likeText: '喜欢',
                cancelText: '取消'
            });
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <LikeButton wordings={this.state}/>
                    <div>
                        <button onClick={this._onUpdateWordings.bind(this)}>Change wordings</button>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
