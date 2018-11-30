import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Content, Header} from './components';

const CHANGE_COLOUR = 0;

class App extends Component {
    static childContextTypes = {
        themeColor: PropTypes.string
    };

    constructor(props) {
        super(props);

        const themeReducer = (state, action) => {
            if (!state) {
                return {
                    themeColor: 'red'
                };
            }

            switch (action.type) {
                case CHANGE_COLOUR:
                    return {
                        ...state,
                        themeColor: action.colour
                    };
                default:
                    return state;
            }
        };

        const store = this.createStore(themeReducer);

        this.state = {
            themeColor: 'black'
        }
    }

    getChildContext() {
        return {themeColor: this.state.themeColor}
    }

    createStore(reducer) {
        let state = [];
        const listeners = [];
        const subscribe = (listener) => listeners.push(listener);
        const getState = () => state;
        const dispatch = (action) => {
            state = reducer(state, action);
            listeners.forEach((listener) => listener());
        };

        // initialise the state
        dispatch({});
        return {getState, dispatch, subscribe};
    }

    render() {
        return (
            <div>
                <Header/>
                <Content changeColour={this.changeColour}/>
            </div>);
    }


    changeColour = (colour) => {
        this.setState({
            themeColor: colour
        })
    }


}

export default App;
