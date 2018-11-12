import React, {Component} from 'react';
import PropTypes from 'prop-types';
import wrapWithLoadData from './WrapWithLoadData';

class InputWithUserName extends Component {
    static propTypes = {
        id: PropTypes.string,
        username: PropTypes.string
    };

    render() {
        console.log(this.props);
        return (
            <input value={this.props.username}/>
        );
    }
}

export default wrapWithLoadData(InputWithUserName, 'A0001');
