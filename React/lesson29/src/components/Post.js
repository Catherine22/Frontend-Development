import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Group1, Group2, Group3} from "./";

class Post extends Component {
    static contextTypes = {
        data: PropTypes.any
    };

    render() {
        return (
            <div>
                <Group1/>
                <Group2/>
                <Group3/>
            </div>);
    }
}

export {Post};
