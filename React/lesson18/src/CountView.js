import React, {Component} from 'react';

class CountView extends Component {
    static defaultProps = {
        value: 0
    };

    constructor(props) {
        super(props);
        this.state = {
            version: 0
        };
        console.log('[CountView Lifecycle]', 'constructor');
    }

    componentWillMount() {
        console.log('[CountView Lifecycle]', 'componentWillMount');
    }

    componentDidMount() {
        console.log('[CountView Lifecycle]', 'componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[CountView Lifecycle]', 'shouldComponentUpdate');
        console.log('nextProps', nextProps);
        console.log('nextState', nextState);

        // Optimise code from here!
        // return true to call render(), false to do nothing
        return true;
    }

    componentWillReceiveProps(nextProps, nextState) {
        console.log('[CountView Lifecycle]', 'componentWillReceiveProps');
        console.log('nextProps', nextProps);
        console.log('nextState', nextState);
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[CountView Lifecycle]', 'componentWillUpdate');
        console.log('nextProps', nextProps);
        console.log('nextState', nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('[CountView Lifecycle]', 'componentDidUpdate');
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
    }

    componentWillUnmount() {
        console.log('[CountView Lifecycle]', 'componentWillUnmount');
    }

    render() {
        console.log('[CountView Lifecycle]', 'render');
        return (
            <div>
                <div>{`[CountView] count: ${this.props.value}`}</div>

                <div>
                    <button onClick={this._onUpdateStateButtonPressed.bind(this)}>Update CountView state</button>
                </div>
            </div>
        );
    }

    _onUpdateStateButtonPressed() {
        this.setState(
            {
                version: this.state.version + 1
            }
        );
    }
}

export default CountView;
