import React, {Component} from 'react';
import CountView from './CountView';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            isHide: false
        };
        console.log('[App Lifecycle]', 'constructor');
    }

    componentWillMount() {
        console.log('[App Lifecycle]', 'componentWillMount');
    }

    componentDidMount() {
        console.log('[App Lifecycle]', 'componentDidMount');
    }

    _onUpdateStateButtonPressed() {
        this.setState(
            {
                count: this.state.count + 1
            }
        );
    }

    _onUpdateViewButtonPressed() {
        this.setState(
            {
                isHide: !this.state.isHide
            }
        );
    }

    render() {
        console.log('[App Lifecycle]', 'render');
        return (
            <div>
                {this.state.isHide ? null : <CountView value={this.state.count}/>}
                <div>
                    <button onClick={this._onUpdateStateButtonPressed.bind(this)}>Update state</button>
                </div>

                <div>
                    <button onClick={this._onUpdateViewButtonPressed.bind(this)}>Hide/Show the view</button>
                </div>
            </div>
        );
    }
}

export default App;
