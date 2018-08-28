// import libraries from Demo/node_modules/react and .../react-native
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image, View} from 'react-native';

var cardsData = require('./src/cards.json')
const instructions = Platform.select({
  ios: 'iOS',
  android: 'Android',
});

type Props = {};
export default class App extends Component<Props> { 
  // return pratical components
  render() {
    return (<View style={styles.container}>
    {this.renderAllCards()}
    </View>);
  }

  renderAllCards() {
    var cards = [];
    for(var i=0; i<cardsData.data.length; i++){
      // get each card
      var card = cardsData.data[i];
      console.log(card.icon);
      cards.push(
        <View  key={i} style={styles.card}>
          <Image style={styles.image} source={{uri: card.icon}}></Image>
          <Text style={styles.card}>{card.title}</Text>
        </View>
      );
    }
    return cards;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1, //full screen
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
    margin: 10,
  }, 
  card: {
    width: 50,
    
    margin: 10,
  },
  title: {
    fontSize: 20,
    color: '#333333',
    margin: 10,
  },
  image: {
    width: 40,
    height: 70,
    margin: 10,
  },
});

