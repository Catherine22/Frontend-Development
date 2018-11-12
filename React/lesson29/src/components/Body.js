import React, {Component} from 'react';
import PropTypes from "prop-types";

class Body extends Component {
    static contextTypes = {
        fontColor: PropTypes.string
    };

    render() {
        return (
            <div style={{color: this.context.fontColor}}>Body</div>
        );
    }
}

export {Body};
