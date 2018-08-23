/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {Component} from 'react';
import {
  StackNavigator
} from 'react-navigation'; // Version can be specified in package.json
import movieList from './MovieList'
import movieDetails from './MovieDetails'




export default class App extends React.Component {
  render() {
    return <RootStack/>;
  }
}

const RootStack = StackNavigator({
  List: {
    screen: movieList,
  },
  Details: {
    screen: movieDetails,
  },
}, {
  initialRouteName: 'List',
});