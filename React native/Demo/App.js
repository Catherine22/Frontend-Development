// import libraries from Demo/node_modules/react and .../react-native
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image, TextInput, View} from 'react-native';
import LoginView from './src/LoginView'

var Dimen = require('Dimensions');
var {width} = Dimen.get('window');



const instructions = Platform.select({
  ios: 'iOS',
  android: 'Android',
});

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LoginView/>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex:1, 
    margin: 10,
  }, 
  
  input: {
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
    width: 120,
    height: 40,
  }
});

