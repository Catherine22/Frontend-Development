import React, {Component} from 'react';
import PropTypes from 'prop-types';
import wrapWithLoadData from './WrapWithLoadData';

class InputWithUserName extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        sendEvent: PropTypes.func
    };

    _onButtonClicked() {
        this.props.sendEvent();
        console.log('InputWithUserName', '_onButtonClicked');
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <input value={this.props.username}/>
                <button onClick={this._onButtonClicked.bind(this)}>Click me</button>
            </div>
        );
    }
}

export default wrapWithLoadData(InputWithUserName, 'A0001');
