/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        // Install Firebase with 'npm install --save firebase' command
        // Initialize Firebase
        const config = {
            apiKey: 'AIzaSyAJ42gwnaaUqvxqnhVL_MYUYq3gbB51glo',
            authDomain: 'manager-9c412.firebaseapp.com',
            databaseURL: 'https://manager-9c412.firebaseio.com',
            projectId: 'manager-9c412',
            storageBucket: 'manager-9c412.appspot.com',
            messagingSenderId: '696437076833'
        };
        firebase.initializeApp(config);
    }

    render() {
        // Post reducers to where the createStore called
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;

