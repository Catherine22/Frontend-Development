import React, {Component} from 'react';
import {Content, Header} from './components';
import CHANGE_COLOUR from "./constants";
import {Provider} from 'react-redux';
import {createStore} from 'redux';

class App extends Component {
    constructor() {
        super();
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
        this.store = createStore(themeReducer);
    }

    render() {
        return (
            <Provider store={this.store}>
                <Header/>
                <Content/>
            </Provider>);
    }
}

export default App;
