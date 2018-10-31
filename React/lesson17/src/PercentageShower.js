import React, {Component} from 'react';

class PercentageShower extends Component {
    static defaultProps = {
        value: 0
    };

    convert() {
        return `${Math.round(this.props.value * 100) / 100}%`;
    };

    render() {
        return (<div>{this.convert()}</div>);
    }
}

export default PercentageShower;
