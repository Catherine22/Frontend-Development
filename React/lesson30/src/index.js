import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

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

function dispatch(action) {
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

renderApp(appState);

dispatch({type: 'UPDATE_TITLE_TEXT', title: 'React.js 小书 ver 2'});
dispatch({type: 'UPDATE_TITLE_COLOR', color: 'black'});
renderApp(appState);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
