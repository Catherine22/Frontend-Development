import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// JSX version
// ReactDOM.render(<App />, document.getElementById('root'));

// JS version
ReactDOM.render(
    React.createElement(App, null),
    document.getElementById('root'));

serviceWorker.unregister();
