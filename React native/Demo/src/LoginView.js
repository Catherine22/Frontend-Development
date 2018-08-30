// import libraries from Demo/node_modules/react and .../react-native
import React, { Component } from 'react';
import {
  StyleSheet, 
  Text, 
  Image, 
  TextInput, 
  TouchableOpacity,
  View } from 'react-native';

var Dimen = require('Dimensions');
const { windowWidth } = Dimen.get('window');
const componentMargin = 10;
const componentsWidth = windowWidth - (componentMargin * 2);
const componentsHeight = 45;


export default class LoginView extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.pageId);
    this.state = {
      loginCount: 0,
    };
  }

  updateEvent = () => {
    this.setState({
      loginCount: this.state.loginCount + 1,
    });
  }

  // return pratical components
  render() {
    return (<View style={styles.container}>
    <Image style={styles.icon} source={require('Demo/img/buffalo.png')} />
    <TextInput style={styles.input} placeholder={'phone number'} keyboardType={'phone-pad'} clearButtonMode={'while-editing'} /*multiline={true}*//>
    <TextInput style={styles.input} placeholder={'password'} keyboardType={'default'} secureTextEntry={true} />
    
    <TouchableOpacity style={styles.loginButton} onPress={this.updateEvent}>
    <Text style={styles.loginText}>登录</Text>
    </TouchableOpacity>

    <Text style={styles.helpText}>无法登录</Text>
    
    <TouchableOpacity style={styles.signinButton}>
    <Text style={styles.signinText}>新用户</Text>
    </TouchableOpacity>

    <View style={styles.thirdPartyLogin}>
        <Text style={styles.otherText}>其他登录方式</Text>
        <Image style={styles.smallIcon} source={require('Demo/img/wechat.png')} />
        <Image style={styles.smallIcon} source={require('Demo/img/qq.png')} />
    </View>
    </View>);
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1, 
  }, 
  
  input: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#f2f2f2',
    width: windowWidth,
    height: componentsHeight,
    textAlign: 'center',
  },

  loginButton: {
    margin: componentMargin,
    backgroundColor: '#8cb357',
    width: componentsWidth,
    height: componentsHeight,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  signinButton: {
      margin: componentMargin,
      borderWidth: 1,
      borderColor: '#8cb357',
      width: componentsWidth,
      height: componentsHeight,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
  },

  loginText: {
    color: 'white',
    fontSize: 16,
  },

  signinText: {
      color: '#8cb357',
      fontSize: 16,
  },

  helpText: {
    color: '#666666',
    marginLeft: componentMargin,
    marginRight: componentMargin,
    fontSize: 12,
  },

  otherText: {
      color: '#666666',
      marginLeft: componentMargin,
      marginRight: componentMargin,
      fontSize: 12,
  }, 

  icon: {
      alignSelf: 'center',
      marginTop: 120,
      marginBottom: 60,
      width: 80,
      height: 80,
      borderRadius: 40,
      borderWidth: 1,
      borderColor: 'white',
  },

  smallIcon: {
      margin: 5,
      width: 40,
      height: 40,
  }, 

  thirdPartyLogin: {
    flexDirection: 'row', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
  }
});

