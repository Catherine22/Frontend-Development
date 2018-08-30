// import libraries from Demo/node_modules/react and .../react-native
import React, { Component } from 'react';
// import { Platform } from 'react-native';
import LoginView from './src/LoginView';
// import ImageWall from './src/ImageWall';


// const instructions = Platform.select({
//   ios: 'iOS',
//   android: 'Android',
// });

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    //Do some I/O here
  }

  render() {
    return (
      <LoginView pageId='LOGIN' />
      // < ImageWall />
    );
  }
}
