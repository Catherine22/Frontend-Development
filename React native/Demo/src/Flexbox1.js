// import libraries from Demo/node_modules/react and .../react-native
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Flexbox1 extends Component {
  // return pratical components
  render() {
    return (
      <View style={styles.container}>


        <Text style={styles.title}>justifyContent</Text>
<Text>flex-start</Text>
        <View style={{ flexDirection: 'row', marginBottom: 10, height: 30, backgroundColor: 'grey', justifyContent: 'flex-start' }}>
          <Text style={{ width: 30, height: 30, backgroundColor: 'red' }} />
          <Text style={{ width: 30, height: 30, backgroundColor: 'yellow' }} />
          <Text style={{ width: 30, height: 30, backgroundColor: 'blue' }} />
        </View>

<Text>center</Text>
        <View style={{ flexDirection: 'row', marginBottom: 10, height: 30, backgroundColor: 'grey', justifyContent: 'center' }}>
          <Text style={{ width: 30, height: 30, backgroundColor: 'red' }} />
          <Text style={{ width: 30, height: 30, backgroundColor: 'yellow' }} />
          <Text style={{ width: 30, height: 30, backgroundColor: 'blue' }} />
        </View>

<Text>flex-end</Text>
        <View style={{ flexDirection: 'row', marginBottom: 10, height: 30, backgroundColor: 'grey', justifyContent: 'flex-end' }}>
          <Text style={{ width: 30, height: 30, backgroundColor: 'red' }} />
          <Text style={{ width: 30, height: 30, backgroundColor: 'yellow' }} />
          <Text style={{ width: 30, height: 30, backgroundColor: 'blue' }} />
        </View>

<Text>space-between</Text>
        <View style={{ flexDirection: 'row', marginBottom: 10, height: 30, backgroundColor: 'grey', justifyContent: 'space-between' }}>
          <Text style={{ width: 30, height: 30, backgroundColor: 'red' }} />
          <Text style={{ width: 30, height: 30, backgroundColor: 'yellow' }} />
          <Text style={{ width: 30, height: 30, backgroundColor: 'blue' }} />
        </View>

<Text>space-around</Text>
        <View style={{ flexDirection: 'row', marginBottom: 10, height: 30, backgroundColor: 'grey', justifyContent: 'space-around' }}>
          <Text style={{ width: 30, height: 30, backgroundColor: 'red' }} />
          <Text style={{ width: 30, height: 30, backgroundColor: 'yellow' }} />
          <Text style={{ width: 30, height: 30, backgroundColor: 'blue' }} />
        </View>

<Text>space-evenly</Text>
        <View style={{ flexDirection: 'row', height: 30, backgroundColor: 'grey', justifyContent: 'space-evenly' }}>
          <Text style={{ width: 30, height: 30, backgroundColor: 'red' }} />
          <Text style={{ width: 30, height: 30, backgroundColor: 'yellow' }} />
          <Text style={{ width: 30, height: 30, backgroundColor: 'blue' }} />
        </View>


        <Text style={styles.title}>alignItems</Text>
        <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'column' }}>
<Text style={styles.subtitle}>flex-start</Text>
        <View style={{ flexDirection: 'row', width: 90, height: 50, backgroundColor: 'grey', alignItems: 'flex-start' }}>
          <Text style={{ width: 30, height: 20, backgroundColor: 'red' }} />
          <Text style={{ width: 30, height: 30, backgroundColor: 'yellow' }} />
          <Text style={{ width: 30, height: 40, backgroundColor: 'blue' }} />
        </View>
        </View>

        <View style={{ flexDirection: 'column' }}>
<Text style={styles.subtitle}>center</Text>
        <View style={{ flexDirection: 'row', width: 90, height: 50, backgroundColor: 'grey', alignItems: 'center' }}>
          <Text style={{ width: 30, height: 20, backgroundColor: 'red' }} />
          <Text style={{ width: 30, height: 30, backgroundColor: 'yellow' }} />
          <Text style={{ width: 30, height: 40, backgroundColor: 'blue' }} />
        </View>
        </View>

        <View style={{ flexDirection: 'column' }}>
<Text style={styles.subtitle}>flex-end</Text>
        <View style={{ flexDirection: 'row', width: 90, height: 50, backgroundColor: 'grey', alignItems: 'flex-end' }}>
          <Text style={{ width: 30, height: 20, backgroundColor: 'red' }} />
          <Text style={{ width: 30, height: 30, backgroundColor: 'yellow' }} />
          <Text style={{ width: 30, height: 40, backgroundColor: 'blue' }} />
        </View>
        </View>

        <View style={{ flexDirection: 'column' }}>
<Text style={styles.subtitle}>stretch</Text>
        <View style={{ flexDirection: 'row', width: 90, height: 50, backgroundColor: 'grey', alignItems: 'stretch' }}>
          <Text style={{ width: 30, backgroundColor: 'red' }} />
          <Text style={{ width: 30, backgroundColor: 'yellow' }} />
          <Text style={{ width: 30, backgroundColor: 'blue' }} />
        </View>
        </View>
        </View>



        <Text style={styles.title}>flexWrap</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'column' }}>
<Text style={styles.subtitle}>nowrap</Text>
        <View style={{ flexDirection: 'row', width: 90, height: 60, backgroundColor: 'grey', flexWrap: 'nowrap' }}>
          <Text style={{ width: 40, height: 30, backgroundColor: 'red' }} />
          <Text style={{ width: 40, height: 30, backgroundColor: 'yellow' }} />
          <Text style={{ width: 40, height: 30, backgroundColor: 'blue' }} />
        </View>
        </View>

        <View style={{ flexDirection: 'column' }}>
<Text style={styles.subtitle}>wrap</Text>
        <View style={{ flexDirection: 'row', width: 90, height: 60, backgroundColor: 'grey', flexWrap: 'wrap' }}>
          <Text style={{ width: 40, height: 30, backgroundColor: 'red' }} />
          <Text style={{ width: 40, height: 30, backgroundColor: 'yellow' }} />
          <Text style={{ width: 40, height: 30, backgroundColor: 'blue ' }} />
        </View>
        </View>

        <View style={{ flexDirection: 'column' }}>
<Text style={styles.subtitle}>wrap-reverse</Text>
        <View style={{ flexDirection: 'row', width: 90, height: 60, backgroundColor: 'grey', flexWrap: 'wrap-reverse' }}>
          <Text style={{ width: 40, height: 30, backgroundColor: 'red' }} />
          <Text style={{ width: 40, height: 30, backgroundColor: 'yellow' }} />
          <Text style={{ width: 40, height: 30, backgroundColor: 'blue' }} />
        </View>
        </View>
        </View>

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
  subtitle: {
    alignItems: 'center',
    textAlign: 'center',
  }
});
