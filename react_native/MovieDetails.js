import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

var MOCKED_MOVIES_DATA = [
  {
    title: 'Deadpool 2',
    year: '2018',
    posters: {
      thumbnail: 'https://www.foxmovies.com/s3/dev-temp/en-US/__5b3f9f284b674.jpg'
    }
  },
];

export default class MovieDetails extends React.Component {
  render() {
    var movie = MOCKED_MOVIES_DATA[0];
    return (
      <View style={styles.container}>
        <Text>{movie.title}</Text>
        <Text>{movie.year}</Text>
        <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
});