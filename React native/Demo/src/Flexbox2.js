// import libraries from Demo/node_modules/react and .../react-native
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

// import Dimensions
var dimens = require('Dimensions');

export default class Flexbox2 extends Component {
  constructor(props) {
    super(props);
  }
  // return pratical components
  render() {
    return (
      <View style={styles.container}>


<Text style={styles.title}>flex</Text>
        <View style={{flexDirection: 'row', marginBottom:10, backgroundColor: 'grey', alignContent: 'center'}}>
          <Text style={{backgroundColor: 'red', color: 'white', alignItems: 'center', textAlign: 'center', flex: 1}}>flex: 1</Text>
          <Text style={{backgroundColor: 'yellow', alignItems: 'center', textAlign: 'center', flex: 2}}>flex: 2</Text>
          <Text style={{backgroundColor: 'blue', color: 'white', alignItems: 'center', textAlign: 'center', flex: 3}}>flex: 3</Text>
      </View>


<Text style={styles.title}>alignSelf</Text>
        <View style={{flexDirection: 'row', marginBottom:10, height: 50, backgroundColor: 'grey', alignContent: 'center', justifyContent: 'space-evenly', alignItems: 'flex-end'}}>
          <Text style={{backgroundColor: 'red', height: 20, width: 30}}/>
          <Text style={{backgroundColor: 'yellow', height: 30, width: 30}}/>
          <Text style={{backgroundColor: 'blue', height: 40, width: 30}}/>
          <Text style={{backgroundColor: 'purple', height: 30, width: 30, alignSelf: 'flex-start'}}/>

</View>

<Text style={styles.content}>
screen width: {dimens.get('window').width}, 
screen height: {dimens.get('window').height}, 
screen scale: {dimens.get('window').scale}
</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //full screen
    backgroundColor: '#F5FCFF',
    flexDirection: 'column', 
    margin: 10,
  },
  title: {
    fontSize: 20,
    alignItems: 'center',
    textAlign: 'center',
    color: '#333333',
    margin: 10,
  },
  content: {
    fontSize: 16,
    alignItems: 'center',
    textAlign: 'center',
    color: '#333333',
    margin: 5,
  }
});
