import React, {Component} from 'react';
import PropTypes from "prop-types";

class Footer extends Component {
    static contextTypes = {
        fontColor: PropTypes.string
    };

    render() {
        return (
            <h1 style={{color: this.context.fontColor}}>Footer</h1>
        );
    }
}

export {Footer};
