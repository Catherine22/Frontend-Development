# Installation
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


# Preparation
```react-native --version``` check local react native version       
```npm info react-native``` get all versions of react native    
```npm install --save react-native@0.43.4``` change local react native version to 0.43.4        

JSX is an extension to the JavaScript language that is used to write react components.      
Using [Babel](https://babeljs.io/en/repl.html) to put some JSX on the left hand side (What we write), then it will turn into JavaScript on the right hand side. (What would be executed on the devices).        

After cloning a project from git/svn, you might need: 

1. Install npm resources, go to project/
```npm install```

2. (Optional) Install CocoaPods, go to project/ios/
```pod install```

3. Install eslint, go to project/
```npm install --save-dev eslint-config-rallycoding```

and create .eslintrc file
```
{
"extends": "rallyCoding"
}
```

## Android
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

# Component

![screenshot][1]     

## Functional component 

```JSX
// Import libraries for making a component
import React from 'react';
import { View } from 'react-native';

// Make a component
const Header = () => { 
    return (
        <View />
    ); 
};

// Make the component available to other parts of the application
export default Header;
```     
[Header.js]

## Class-based component

```JSX
// Import React.Component
import React, { Component } from 'react';
import { View } from 'react-native';

class AlbumList extends Component {
    render() {
        return (
        <View />
    );
    }
}

export default AlbumList;
```     

[AlbumList.js]

## Handling network requests and responses

```
npm install --save axios
```

```JSX
// Do I/O here
componentWillMount() {
    // When we need to update what a component shows, call 'this.setState()', do not do 'this.state'
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
}
```     

[AlbumList.js]

## State and props

Initialize and update state when fetched data from rallycoding
```JSX
// Import React.Component
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    // Get initial state
    // Any functional component we create, like Header, does not have access to state 
    state = { albums: [] };

    // Do I/O here
    componentWillMount() {
        // When we need to update what a component shows, call 'this.setState()', do not do 'this.state'
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
    }


    renderAlbums() {
        // Send the props (album) to AlbumDetail
        return this.state.albums.map(album => 
        <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        return (
        <ScrollView>
            {this.renderAlbums()}
        </ScrollView>
    );
    }
}

export default AlbumList;
```

The response retrieved via axios would be like
```JSON
[
  {
    "title": "Taylor Swift",
    "artist": "Taylor Swift",
    "url": "https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6",
    "image": "https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
    "thumbnail_image": "https://i.imgur.com/K3KJ3w4h.jpg"
  },
  {
    "title": "Fearless",
    "artist": "Taylor Swift",
    "url": "https://www.amazon.com/Fearless-Enhanced-Taylor-Swift/dp/B001EYGOEM",
    "image": "https://images-na.ssl-images-amazon.com/images/I/51qmhXWZBxL.jpg",
    "thumbnail_image": "https://i.imgur.com/K3KJ3w4h.jpg"
  }
]
```

The child gets the props from the parent
```JSX
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

const AlbumDetail = ({ album }) => {
    // Get title, artist and thumbnail_image from album
    const { title, artist, thumbnail_image, image, url } = album;
   
    return (
        <Text>{title}</Text>
        <Text>{artist}</Text>
    );
};

export default AlbumDetail;
```

[AlbumList.js]      
[AlbumDetail.js]

## Clicking event

Create a Button component
```JSX
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Declare onPress as props so that the parent (AlbumDetail) is able to handle onPress event
const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        // The last onPress is the props
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    ); 
};

export default Button;
```

Have the parent (AlbumDetail) to deal with onPress event
```JSX
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    // Get title, artist and thumbnail_image from album
    const { title, artist, thumbnail_image, image, url } = album;

    return (
        <Button onPress={() => Linking.openURL(url)} />
    );
};

export default AlbumDetail;
```

## TextInput
TextInput is not responsible for knowing what its value is. It has no idea what its value is.   
![screenshot][2]  

```JSX
state = { email: '' };
    render() {
        return (
          <TextInput 
          autoCorrect={false}
          value={this.state.email}
          onChangeText={text => this.setState({ email: text }}
          placeholder={'user@gmail.com'}
          />
      );
}
```



# Reference
[The complete react native and redux course](https://www.udemy.com/the-complete-react-native-and-redux-course/)


[Header.js]:<https://github.com/Catherine22/Front-end-warm-up/tree/master/React%20native/albums/src/components/Header.js>
[Button.js]:<https://github.com/Catherine22/Front-end-warm-up/tree/master/React%20native/albums/src/components/Button.js>
[AlbumList.js]:<https://github.com/Catherine22/Front-end-warm-up/tree/master/React%20native/albums/src/components/AlbumList.js>
[AlbumDetail.js]:<https://github.com/Catherine22/Front-end-warm-up/tree/master/React%20native/albums/src/components/AlbumDetail.js>
[1]: https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/React%20native/screenshots/components.png
[2]: https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/React%20native/screenshots/textInput.png

