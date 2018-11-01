import React, {Component} from 'react';
import Clock from './Clock';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideClock: false
        };
    }

    _handleShowOrHide() {
        this.setState({
            hideClock: !this.state.hideClock
        });
    }

    render() {
        return (
            <div>
                {this.state.hideClock ? null : <Clock/>}
                <button onClick={this._handleShowOrHide.bind(this)}>
                    显示或隐藏时钟
                </button>
            </div>
        );
    }
}

export default App;
