import React, {Component} from 'react';
import CountView from './CountView';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        console.log('App Lifecycle', 'constructor');
    }

    componentWillMount() {
        console.log('App Lifecycle', 'componentWillMount');
    }

    componentDidMount() {
        console.log('App Lifecycle', 'componentDidMount');
    }

    _onButtonPressed() {
        this.setState(
            {
                count: this.state.count + 1
            }
        );
    }

    render() {
        console.log('App Lifecycle', 'render');
        return (
            <div>
                <CountView value={this.state.count}/>
                <button onClick={this._onButtonPressed.bind(this)}>Update view</button>
            </div>
        );
    }
}

export default App;
