/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header headerText='Authentication' />
      </View>
    );
  }
}
