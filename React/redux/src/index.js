import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchRobots, requestRobots } from './reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import Robotfriends from './containers/Robotfriends';

const logger = createLogger();
const rootReducer = combineReducers({ requestRobots, searchRobots });
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Robotfriends className="layout" />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
