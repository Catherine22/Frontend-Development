# Installation
0. Update OS and Xcode to the latest version
1. Homebrew     
2. node.js (higher than 4.0), npm is included.     
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
pod setup
pod update
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
```json
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

```JavaScript
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

```JavaScript
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

```JavaScript
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
```JavaScript
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
```json
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
```JavaScript
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

const AlbumDetail = ({ album }) => {
    // Get title, artist and thumbnail_image from album
    const { title, artist, thumbnail_image, image, url } = album;

    return (
        <View>
            <Text>{title}</Text>
            <Text>{artist}</Text>
        </View>
    );
};

export default AlbumDetail;
```

[AlbumList.js]      
[AlbumDetail.js]

## Clicking event

Create a Button component
```JavaScript
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
```JavaScript
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

```JavaScript
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

# The third party SDKs

## Firebase

[LoginForm.js]

# Redux

![screenshot][3] ![screenshot][4]
How Redux works, the following code can run on [JS playgrounds]          
```JavaScript
// A reducer is some amount of the state
const reducer = (state = [], action) => {
  if (action.type === 'split_string') {
    return action.payload.split('');
  } else if (action.type === 'add_characters') {

    /* "...state" means making a new array indicated by these outside brackets，
     * taking all the elements in the current state array, tossing them in here.
     * and also tossing action.payload in as the last entry as well.
     * More importantly, it creates a entirely new array
     */
    return [...state, action.payload];
  }

  return state;
}

const store = Redux.createStore(reducer);
store.getState();

/* An action is a plain JavaScripy object
 * This type property is always a String,
 * the purpose of this type property is to tell our reducer to command a specific operation
 */
const action = {
  type: 'split_string',
  payload: 'asdf'
};

store.dispatch(action);
store.getState();

const action2 = {
  type: 'add_characters',
  payload: 'g'
};

store.dispatch(action2);
store.getState();
```

- Install two libraries       
```npm install --save redux react-redux```      


## Redux + ListView

In tech_stack app, we have two separate reducers - a **Library Reducer** is going to turn a list of libraries to show to the user, and the **Selection Reducer**, which is going to keep track of the currently selected libraries.

![screenshot][5]     
1. When the app first boots up, redux creates a new Store with ```createStore(reducers)``` called, using the Libraries Reducer. The instance of Store created, it runs Libraries Reducer one time. So we get a piece of state called libraries which is an array containing a list of objects. When the Reducer runs, it returns libraries objects. Each object represents one library that we wanna show on the screen.       
2. After we create the Store, we pass it to the Provider as a prop. The Provider is a react component that aims to communication between react and redux.       
3. The App component is rendered to the screen, which in term renders LibraryList component.        
4. The instance that the LibraryList component is about to render or about to appear on the screen. The Connect function which we just added in boots up, and it says, the component I am wrapping is about to render.      
5. The Connect function reaches its backup to the Provider, try to get access to the state. The Provider gives up its state that is contained in the Store, and then the connect tag pumps down into LibraryList and show up as props after fills it through mapStateToProps    

When User touch a item on ListView:
![screenshot][6]    

See more here: [auth]

## Redux + TextInput

In manager app, here is the sample code
![screenshot][7]  


src/App.js      
```JavaScript
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

    render() {
        // Post reducers to where the createStore called
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
```

src/reducers/index.js       
```JavaScript
import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
   auth: AuthReducer
});
```

src/reducers/AuthReducer.js     
```JavaScript
import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            /* The whole purpose here is to store the current value of the TextInput,
             * and we gonna catch that right here.
             *
             * ...state: Make a new object, take all of the existing properties
             * and throw them into that object. Then define the property email,
             * give it value of action.payload and toss it on top of whatever properties
             * are run in state object.
             *
             * So if the state already has an email property, it will be overwritten by
             * the value (action.payload) we are trying to adding on the top of here
             */
            return { ...state, email: action.payload };
        default:
            return state;
    }
};

```

src/actions/types.js        
```JavaScript
export const EMAIL_CHANGED = 'email_changed';
```

src/actions/index.js        
```JavaScript
export const emailChanged = (text) => {
    return {
        type: 'email_changed',
        payload: text
    };
};
```

src/components/LoginForm.js     
```JavaScript
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput } from 'react-native';
import { emailChanged } from '../actions';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    render() {
        return (
            <TextInput>
                label='Email'
                placeholder='user@gmail.com'
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
            </TextInput>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email
    };
};

//We now have access to a prop inside of our component called this.props.emailChanged
export default connect(mapStateToProps, { emailChanged })(LoginForm);

```
See more here: [manager]

# Navigator

Using [react-native-router-flux]
```
npm install --save react-native-router-flux
```

In app.js       
```JavaScript
import Router from './Router';
render() {
        return (
            <Router />
        );
    }
```

create a component Router.js      
```JavaScript
import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

const RouterComponent = () => {
  return (
    <Router /*sceneStyle={{ backgroundColor: '#FFFFFF' }}*/>
      <Stack key='root'>
          <Scene key='page1' component={Page1} title='1' initial />
          <Scene key='page2' component={Page2} title='2' />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
```
Jump to page2       
```JavaScript
Actions.page2(); // your Scene key
```

# New features on Android Oreo
Go to my [Oreo] project to see more.

## Firebase Cloud Messaging + Notification Channel

[FirebaseMessagingService]    
[NotificationUtils]   
[NotificationChannelsGroup]   
[ChannelInfo]

## JobScheduler

Start and stop JobScheduler by React Native:    
[JobSchedulerModule]
[MyJobService]

## Foreground Service
Start and stop Foreground Service by React Native:    
[ForegroundServiceModule]   
[MyForegroundService]

# Reference
[The complete react native and redux course](https://www.udemy.com/the-complete-react-native-and-redux-course/)


[Header.js]:<https://github.com/Catherine22/Front-end-warm-up/tree/master/React%20native/albums/src/components/Header.js>
[Button.js]:<https://github.com/Catherine22/Front-end-warm-up/tree/master/React%20native/albums/src/components/Button.js>
[AlbumList.js]:<https://github.com/Catherine22/Front-end-warm-up/tree/master/React%20native/albums/src/components/AlbumList.js>
[AlbumDetail.js]:<https://github.com/Catherine22/Front-end-warm-up/tree/master/React%20native/albums/src/components/AlbumDetail.js>
[LoginForm.js]:<https://github.com/Catherine22/Front-end-warm-up/tree/master/React%20native/auth/src/components/LoginForm.js>
[auth]:<https://github.com/Catherine22/Front-end-warm-up/tree/master/React%20native/auth>
[manager]:<https://github.com/Catherine22/Front-end-warm-up/tree/master/React%20native/manager>
[JS playgrounds]:<https://stephengrider.github.io/JSPlaygrounds/>
[Oreo]:<https://github.com/Catherine22/Front-end-warm-up/tree/master/React%20native/Oreo>
[NotificationUtils]:<https://github.com/Catherine22/Front-end-warm-up/blob/master/React%20native/Oreo/android/app/src/main/java/com/oreo/utils/NotificationUtils.java>
[react-native-router-flux]:<https://github.com/aksonov/react-native-router-flux>
[FirebaseMessagingService]:<https://github.com/Catherine22/Front-end-warm-up/tree/master/React%20native/Oreo/android/app/src/main/java/com/oreo/firebase>
[ChannelInfo]:<https://github.com/Catherine22/Front-end-warm-up/blob/master/React%20native/Oreo/android/app/src/main/java/com/oreo/utils/ChannelInfo.java>
[NotificationChannelsGroup]:<https://github.com/Catherine22/Front-end-warm-up/blob/master/React%20native/Oreo/android/app/src/main/java/com/oreo/utils/NotificationChannelsGroup.java>
[JobSchedulerModule]:<https://github.com/Catherine22/Front-end-warm-up/blob/master/React%20native/Oreo/android/app/src/main/java/com/oreo/react_native_modules/JobSchedulerModule.java>
[MyJobService]:<https://github.com/Catherine22/Front-end-warm-up/blob/master/React%20native/Oreo/android/app/src/main/java/com/oreo/jobs/MyJobService.java>
[ForegroundServiceModule]:<https://github.com/Catherine22/Front-end-warm-up/blob/master/React%20native/Oreo/android/app/src/main/java/com/oreo/react_native_modules/ForegroundServiceModule.java>  
[MyForegroundService]:<https://github.com/Catherine22/Front-end-warm-up/blob/master/React%20native/Oreo/android/app/src/main/java/com/oreo/foreground_services/MyForegroundService.java>

[1]: https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/React%20native/screenshots/components.png
[2]: https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/React%20native/screenshots/textInput.png
[3]: https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/React%20native/screenshots/redux1.png
[4]: https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/React%20native/screenshots/redux2.png
[5]: https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/React%20native/screenshots/redux3.png
[6]: https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/React%20native/screenshots/redux4.png
[7]: https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/React%20native/screenshots/redux5.png
