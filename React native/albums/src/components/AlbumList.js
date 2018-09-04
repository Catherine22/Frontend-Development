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
