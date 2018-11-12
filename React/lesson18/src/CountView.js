import React, {Component} from 'react';

class CountView extends Component {
    static defaultProps = {
        value: 0
    };
    constructor(props) {
        super(props);
        console.log('[CountView Lifecycle]', 'constructor');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[CountView Lifecycle]', 'shouldComponentUpdate');
        console.log('nextProps', nextProps);
        console.log('nextState', nextState);

        // Optimise code from here!
        // return true to call render(), false to do nothing
        return true;
    }

    componentWillReceiveProps(nextProps){
        console.log('[CountView Lifecycle]', 'shouldComponentUpdate');
        console.log('nextProps', nextProps);
    }

    componentWillMount() {
        console.log('[CountView Lifecycle]', 'componentWillMount');
    }

    componentDidMount() {
        console.log('[CountView Lifecycle]', 'componentDidMount');
    }

    render() {
        console.log('[CountView Lifecycle]', 'render');
        return (
            <div>
                <div>{`[CountView] count: ${this.props.value}`}</div>
            </div>
        );
    }
}

export default CountView;
