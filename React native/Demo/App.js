// import libraries from Demo/node_modules/react and .../react-native
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'iOS',
  android: 'Android',
});

type Props = {};
export default class App extends Component<Props> { 
  // return pratical components
  render() {
    return (<View></View>);
  }
}

