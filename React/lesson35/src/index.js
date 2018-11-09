import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';

function renderApp(appState, prevState = {} /*default value*/) {
    if (prevState === appState) return;
    if (appState.user === prevState.user) return;

    console.log('renderApp', appState);
    renderUser(appState.user, prevState.user);
}

function renderUser(user, prevUser = []) {
    // Remove all elements and add default components
    document.getElementById('body').innerHTML =
        '<div id="wrapper">\
        <input type="text" name="username" value="" />\
        <input type="text" name="age" value="" />\
        <label> <input type="checkbox" name="male" value="1" /> Male </label>\
        <label> <input type="checkbox" name="female" value="0" /> Female </label>\
        <input type="button" value="submit" onclick="onCreatePressed(this)">\
        </div>';

    if (user === prevUser || user.length === 0) return;

    // Add all new elements
    if (user.length > 0) {
        let div = document.createElement('div');
        div.className = 'row';
        div.id = 'users';
        let htmlContext = '';
        htmlContext += user.map(value => {
            return `<div id="username">username: ${value.username}</div>
         <div id="age">age: ${value.age}</div>
         <div id="gender">gender: ${value.gender}</div>`;
        });
        div.innerHTML = htmlContext;
        document.getElementById('body').appendChild(div);
    }
}

function onCreatePressed() {
    const body = document.getElementById('wrapper');
    const username = body.getElementsByTagName('username').value;
    const age = body.getElementsByTagName('age').value;
    const male = body.getElementsByTagName('male').value === '1' ? 'M' : '';
    const female = body.getElementsByTagName('female').value === '1' ? 'F' : '';
    const gender = male + female;

    const users = document.getElementById('users');
    const insertNewUser = {
        type: 'ADD_USER',
        // user: {
        //     username: 'Admin',
        //     age: 10,
        //     gender: 'F',
        //     id: 1
        // }
        user: {
            username: username,
            age: age,
            gender: gender,
            id: users.length / 4
        }
    };
    console.log('new user', insertNewUser.user);
    store.dispatch(insertNewUser);
}

function reducer(state, action) {
    if (!state) {
        state = {
            user: []
        };
    }

    switch (action.type) {
        case 'ADD_USER':
            return {
                user: [...state.user, action.user]
            };

        case 'DELETE_USER':
            let clone = [];
            clone.push(state.user.map(value => {
                if (value.id !== action.user.id) {
                    return value;
                }
            }));
            if (clone.length === state.user.length)
                return state;
            return {user: clone};

        case 'UPDATE_USER':
            clone = [];
            clone.push(state.user.map(value => {
                if (value.id !== action.user.id) {
                    return value;
                } else {
                    return action.user;
                }
            }));
            return {user: clone};

        default:
            return state;
    }
}

function createStore(reducer) {
    let state = null;
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

const store = createStore(reducer);
let prevState = store.getState(); // cache previous state
store.subscribe(() => {
    const newState = store.getState();
    renderApp(newState, prevState);
    prevState = newState; // cache previous state
});
// initialise the view
renderApp(store.getState());


// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
