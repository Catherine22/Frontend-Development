import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CHANGE_COLOUR from "../constants";

class Provider extends Component {
    static propTypes = {
        store: PropTypes.shape({
            getState: PropTypes.func.isRequired,
            dispatch: PropTypes.func.isRequired,
            subscribe: PropTypes.func.isRequired
        }),
        children: PropTypes.any
    };
    static childContextTypes = {
        store: PropTypes.shape({
            getState: PropTypes.func.isRequired,
            dispatch: PropTypes.func.isRequired,
            subscribe: PropTypes.func.isRequired
        }),
        children: PropTypes.any
    };

    constructor(props) {
        super(props);
        const themeReducer = (state, action) => {
            if (!state) {
                return {
                    themeColour: 'green'
                };
            }

            switch (action.type) {
                case CHANGE_COLOUR:
                    return {
                        ...state,
                        themeColour: action.themeColour
                    };
                default:
                    return state;
            }
        };

        this.store = this.createStore(themeReducer);
    }

    createStore(reducer) {
        let state = null;
        const listeners = [];
        const subscribe = (listener) => listeners.push(listener);
        const getState = () => state;
        const dispatch = (action) => {
            console.log('dispatch', action);
            state = reducer(state, action);
            listeners.forEach((listener) => listener());
        };

        // initialise the state
        dispatch({});
        return {getState, dispatch, subscribe};
    }

    getChildContext() {
        return {store: this.store}
    }

    render() {
        return (<dic>{this.props.children}</dic>);
    }
}

export default Provider;
