import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    static contextTypes = {
        fontColor: PropTypes.string
    };

    render() {
        return (
            <h1 style={{color: this.context.fontColor}}>Header</h1>
        );
    }
}

export {Header};
