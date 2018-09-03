# Component
![screenshot][1]     

## functional component 
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

## class-based component
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

## Handle network requests and responses
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

# State and props


## Reference
[The complete react native and redux course](https://www.udemy.com/the-complete-react-native-and-redux-course/)



[Header.js]:<https://github.com/Catherine22/Front-end-warm-up/tree/master/React%20native/albums/src/components/Header.js>
[AlbumList.js]:<https://github.com/Catherine22/Front-end-warm-up/tree/master/React%20native/albums/src/components/AlbumList.js>
[1]: https://raw.githubusercontent.com/Catherine22/Front-end-warm-up/master/React%20native/screenshots/components.png