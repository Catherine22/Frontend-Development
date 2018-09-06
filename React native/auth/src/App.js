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
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  //null: unknown, false: not logged in, true: logged in
  state = { loggedIn: null };
  
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC-tVpwP2NaGDF5IukKbPL6fBc_Fr188ug',
      authDomain: 'auth-1579f.firebaseapp.com',
      databaseURL: 'https://auth-1579f.firebaseio.com',
      projectId: 'auth-1579f',
      storageBucket: 'auth-1579f.appspot.com',
      messagingSenderId: '335086132063'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (      
        <CardSection>    
        <Button onPress={() => firebase.auth().signOut()}>
          Log Out
        </Button>
        </CardSection>
      );
      case false:
      return <LoginForm />;
      default:
      return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
