import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function renderApp(appState) {
    renderTitle(appState.title);
    renderContent(appState.content);
}

function renderTitle(title) {
    const titleDOM = document.getElementById('title');
    titleDOM.innerHTML = title.text;
    titleDOM.style.color = title.color;
}

function renderContent(content) {
    const contentDOM = document.getElementById('content');
    contentDOM.innerHTML = content.text;
    contentDOM.style.color = content.color;
}


const appState = {
    title: {
        text: 'React.js 小书',
        color: 'red',
    },
    content: {
        text: 'React.js 小书内容',
        color: 'blue'
    }
};

function stateChanger(state, action) {
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            appState.title.text = action.title;
            break;

        case 'UPDATE_TITLE_COLOR':
            appState.title.color = action.color;
            break;
        default:
    }
}

function createStore(state, stateChanger) {
    const listeners = [];
    const subscribe = (listener) => listeners.push(listener);
    const getState = () => state;
    const dispatch = (action) => {
        stateChanger(state, action);
        listeners.forEach((listener) => listener());
    };
    return {getState, dispatch, subscribe};
}

const store = createStore(appState, stateChanger);
store.subscribe(() => renderApp(store.getState()));
const action1 = {type: 'UPDATE_TITLE_TEXT', title: 'React.js 小书 ver 2'};
store.dispatch(action1);
const action2 = {type: 'UPDATE_TITLE_COLOR', color: 'black'};
store.dispatch(action2);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
