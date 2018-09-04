/** @format */
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);

/* 
Render(an application called 'albums') it to the device.
In any react native application we create, 
we have to register at least one component to the application.
*/
AppRegistry.registerComponent('albums', () => App);
