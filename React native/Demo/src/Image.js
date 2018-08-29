// import libraries from Demo/node_modules/react and .../react-native
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image, TextInput, View} from 'react-native';

var cardsData = require('./src/cards.json')
var Dimen = require('Dimensions');
var {width} = Dimen.get('window');


const itemsPerLine = 4;
const cardWidth = 50;
const cardMarginW = (width - itemsPerLine * cardWidth) / (2 * (itemsPerLine + 1));
const cardMarginH = 20;


const instructions = Platform.select({
  ios: 'iOS',
  android: 'Android',
});

export default class Image extends Component {
  constructor(props) {
    super(props);
  }
  // return pratical components
  render() {
    return (<View style={styles.container}>
    <View style={styles.cardCollection}>
    {this.renderAllCards()}
    </View>
    <TextInput style={styles.input} placeholder={'phone number'} keyboardType={'phone-pad'} clearButtonMode={'while-editing'} /*multiline={true}*//>
    <TextInput style={styles.input} placeholder={'password'} keyboardType={'default'} secureTextEntry={true}/>
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
    margin: 10,
  }, 
  cardCollection: {
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    width: cardWidth,
    marginLeft: cardMarginW,
    marginRight: cardMarginW,
    marginTop: cardMarginH,
  },
  title: {
    fontSize: 20,
    color: '#333333',
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 40,
    height: 70,
  },
  input: {
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
    width: 120,
    height: 40,
  }
});

