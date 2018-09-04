/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC-tVpwP2NaGDF5IukKbPL6fBc_Fr188ug',
      authDomain: 'auth-1579f.firebaseapp.com',
      databaseURL: 'https://auth-1579f.firebaseio.com',
      projectId: 'auth-1579f',
      storageBucket: 'auth-1579f.appspot.com',
      messagingSenderId: '335086132063'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
