import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function renderApp(appState, prevState = {} /*default value*/) {
    if (prevState === appState) return;

    if (appState.title !== prevState.title)
        renderTitle(appState.title, prevState.title);
    if (appState.content !== prevState.content)
        renderContent(appState.content, prevState.content);
}

function renderTitle(title, prevTitle = {}) {
    if (title === prevTitle) return;

    const titleDOM = document.getElementById('title');
    if (title.text !== prevTitle.text)
        titleDOM.innerHTML = title.text;
    if (title.color !== prevTitle.color)
        titleDOM.style.color = title.color;
}

function renderContent(content, prevContent = {}) {
    if (content === prevContent) return;

    const contentDOM = document.getElementById('content');
    if (content.text !== prevContent.text)
        contentDOM.innerHTML = content.text;
    if (content.color !== prevContent.color)
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
            return {
                ...state,
                title: {
                    ...state.title,
                    text: action.text
                }
            };
        case 'UPDATE_TITLE_COLOR':
            return {
                ...state,
                title: {
                    ...state.title,
                    color: action.color
                }
            };
        default:
            return state;
    }
}

function createStore(state, stateChanger) {
    const listeners = [];
    const subscribe = (listener) => listeners.push(listener);
    const getState = () => state;
    const dispatch = (action) => {
        state = stateChanger(state, action);
        listeners.forEach((listener) => listener());
    };
    return {getState, dispatch, subscribe};
}

const store = createStore(appState, stateChanger);
let prevState = store.getState(); // cache previous state
store.subscribe(() => {
    const newState = store.getState();
    renderApp(newState, prevState);
    prevState = newState; // cache previous state
});
// initialise the view
renderApp(store.getState());

const action1 = {type: 'UPDATE_TITLE_TEXT', text: 'React.js 小书 ver 2'};
store.dispatch(action1);
const action2 = {type: 'UPDATE_TITLE_COLOR', color: 'black'};
store.dispatch(action2);
const action3 = {type: 'UPDATE_TITLE_COLOR', color: 'black'};
store.dispatch(action3);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
