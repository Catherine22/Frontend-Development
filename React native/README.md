# React Native

## Installation
0. Update OS and Xcode to the latest version
1. Homebrew     
2. node.js (higher than 4.0), npm is inclueded.     
3. watchman     
4. flow     
5. react native (```npm install -g react-native-cli```)     
6. (optional) eslint        

```
npm install -g eslint
```

Go to your react native project,            
```
npm install --save-dev eslint-config-rallycoding
```     

Create .eslintrc file in your react native project,     
```
{
"extends": "rallyCoding"
}
```         

Install the plugin linter for atom or ESLint for Visual Studio Code to access eslint rules.     
7.  (optional) Inatall cocoapods you might need
```
gem install cocoapods
```

under myProject/src/ios or myProject/ios folder,       
```
pod install
```


## Preparation
```react-native --version``` check local react native version       
```npm info react-native``` get all versions of react native    
```npm install --save react-native@0.43.4``` change local react native version to 0.43.4        

JSX is an extension to the JavaScript language that is used to write react components.      
Using [Babel](https://babeljs.io/en/repl.html) to put some JSX on the left hand side (What we write), then it will turn into JavaScript on the right hand side. (What would be executed on the devices).        

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


## Points

### Functional component vs class-based component       
![img][1]   


## Reference        
[The complete react native and redux course](https://www.udemy.com/the-complete-react-native-and-redux-course/)



[1]: https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/React%20native/screenshots/components.png
