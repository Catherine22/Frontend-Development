// import libraries from Demo/node_modules/react and .../react-native
import React, {Component} from 'react';
import {StyleSheet, Text, Image, TextInput, View} from 'react-native';

var cardsData = require('./cards.json')
var Dimen = require('Dimensions');
var {width} = Dimen.get('window');


const itemsPerLine = 4;
const cardWidth = 100;
const cardMarginW = (width - itemsPerLine * cardWidth) / (2 * (itemsPerLine + 1));
const cardMarginH = 20;


export default class ImageWall extends Component {
  constructor(props) {
    super(props);
  }
  // return pratical components
  render() {
    return (<View style={styles.container}>
    <View style={styles.cardCollection}>
    {this.renderAllCards()}
    </View>
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
    flex:1, 
    backgroundColor: '#F5FCFF',
  }, 
  cardCollection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
    justifyContent: 'center',
  },
  card: {
    width: cardWidth,
    marginTop: cardMarginH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#333333',
    margin: 10,
  },
  image: {
    width: cardWidth,
    height: 100,
  }
});

