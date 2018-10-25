import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LikeButton from './LikeButton';
import Exercise from './Exercise';
import * as serviceWorker from './serviceWorker';

// TODO: Hide this code block to run Exercise
// ReactDOM.render(
//     <LikeButton />,
//     document.getElementById('root'));

// TODO: Exercise
ReactDOM.render(
    <Exercise />,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
