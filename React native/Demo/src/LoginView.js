// import libraries from Demo/node_modules/react and .../react-native
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image, TextInput, View} from 'react-native';

var Dimen = require('Dimensions');
var {width} = Dimen.get('window');
const margin = 10;
const componentsWidth = width - margin * 2;
const componentsHeight = 45;


export default class LoginView extends Component {
  constructor(props) {
    super(props);
  }

  // return pratical components
  render() {
    return (<View style={styles.container}>
    <Image style={styles.icon} source={require('Demo/img/buffalo.png')}></Image>
    <TextInput style={styles.input} placeholder={'phone number'} keyboardType={'phone-pad'} clearButtonMode={'while-editing'} /*multiline={true}*//>
    <TextInput style={styles.input} placeholder={'password'} keyboardType={'default'} secureTextEntry={true}/>
    <View style={styles.loginButton}>
    <Text style={styles.loginText}>登陆</Text>
    </View>
    <Text style={styles.otherText}>无法登录</Text>

    <View style={styles.signinButton}>
    <Text style={styles.signinText}>新用户</Text>
    </View>

    <View>
        <Text style={styles.otherText}>其他登陆方式</Text>
    
    <View style={{flexDirection: 'row'}}>
        <Image style={styles.smallIcon} source={require('Demo/img/wechat.png')}></Image>
        <Image style={styles.smallIcon} source={require('Demo/img/qq.png')}></Image>
    </View>

    </View>
    </View>);
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex:1, 
  }, 
  
  input: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#f2f2f2',
    width: width,
    height: componentsHeight,
  },

  loginButton: {
    margin: margin,
    backgroundColor: '#8cb357',
    width: componentsWidth,
    height: componentsHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },

  signinButton: {
      margin: margin,
      borderWidth: 1,
      borderColor: '#8cb357',
      width: componentsWidth,
      height: componentsHeight,
      justifyContent: 'center',
      alignItems: 'center',
  },

  loginText: {
    color: 'white',
    fontSize: 16,
  },

  signinText: {
      color: '#8cb357',
      fontSize: 16,
  },

  otherText: {
      color: '#666666',
      marginTop: 40,
      marginLeft: margin,
      marginRight: margin,
      fontSize: 12,
  }, 

  icon: {
      alignSelf: 'center',
      marginTop: 120,
      marginBottom: 60,
      width: 80,
      height: 80,
  },

  smallIcon: {
      margin: 5,
      width: 40,
      height: 40,
  }
});

