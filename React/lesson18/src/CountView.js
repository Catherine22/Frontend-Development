import React, {Component} from 'react';

class CountView extends Component {
    static defaultProps = {
        value: 0
    };
    constructor(props) {
        super(props);
        console.log('CountView Lifecycle', 'constructor');
    }

    componentWillMount() {
        console.log('CountView Lifecycle', 'componentWillMount');
    }

    componentDidMount() {
        console.log('CountView Lifecycle', 'componentDidMount');
    }

    render() {
        console.log('CountView Lifecycle', 'render');
        return (
            <div>
                <div>{`(CountView) count: ${this.props.value}`}</div>
            </div>
        );
    }
}

export default CountView;
