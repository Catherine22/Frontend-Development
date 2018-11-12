import React, {Component} from 'react';
import PropTypes from "prop-types";

const makeProvider = (data) => (Post) => {
    return class WrapComponent extends Component {
        static childContextTypes = {
            data: PropTypes.any.isRequired
        };

        getChildContext() {
            return {
                data: data
            }
        }

        constructor(props) {
            super(props)
        }

        render() {
            return (
                <Post />
            )
        }
    }
};

export default makeProvider;
