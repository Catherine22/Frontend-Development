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
import reducers from './reducers';

class App extends Component {
  render() {
     // Post reducers to the createStore called
    return (
        <Provider store={createStore(reducers)}>
            <View />
        </Provider>
    );
  }
}

export default App;

