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

    shouldComponentUpdate(nextProps, nextState){
        console.log('[App Lifecycle]', 'shouldComponentUpdate');
        console.log('nextProps', nextProps);
        console.log('nextState', nextState);

        // Optimise code from here!
        // return true to call render(), false to do nothing
        return true;
    }

    componentWillReceiveProps(nextProps, nextState){
        console.log('[App Lifecycle]', 'componentWillReceiveProps');
        console.log('nextProps', nextProps);
        console.log('nextState', nextState);
    }

    componentWillUpdate(nextProps, nextState){
        console.log('[App Lifecycle]', 'componentWillUpdate');
        console.log('nextProps', nextProps);
        console.log('nextState', nextState);
    }

    componentDidUpdate(prevProps, prevState){
        console.log('[App Lifecycle]', 'componentDidUpdate');
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
    }

    componentWillUnmount() {
        console.log('[App Lifecycle]', 'componentWillUnmount');
    }

    _onUpdatePropsButtonPressed() {
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
                    <button onClick={this._onUpdatePropsButtonPressed.bind(this)}>Update CountView props</button>
                </div>

                <div>
                    <button onClick={this._onUpdateViewButtonPressed.bind(this)}>Hide/Show CountView</button>
                </div>
            </div>
        );
    }
}

export default App;
