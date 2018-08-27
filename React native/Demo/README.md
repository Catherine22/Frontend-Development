# React Native

## Installation
1. Homebrew     
2. node.js (higher than 4.0), npm is inclueded.     
3. watchman     
4. flow     
5. react native (```npm install -g react-native-cli```)     

## Preparation
```react-native --version``` check local react native version       
```npm info react-native``` get all versions of react native    
```npm install --save react-native@0.43.4``` change local react native version to 0.43.4      

### Android
- Add ANDROID_HOME to .bash_profile   
- ```adb reverse tcp:8081 tcp:8081```


## Run another project
Find react-native version in package.json file.     
```JSON
"dependencies": {
    "react": "16.4.1",
    "react-native": "^0.43.4"
  }
```

Change local react native version to 0.43.4.    
```
npm install --save react-native@0.43.4
```    

## My first app

Create an app   
```
react-native init YOUR_APP_NAME
``` 

### Flexbox
![img][1]   
[code](https://github.com/Catherine22/Front-end-warm-up/React-native/Demo/App.js)





[1]: https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/React-native/Demo/screenshots/flexbox.png