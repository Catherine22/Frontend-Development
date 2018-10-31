import React, {Component} from 'react';

class Input extends Component {
    render() {
        return <input type='number' value={this.props.num} onChange={this.props.onChange}/>;
    }
}

export default Input;
