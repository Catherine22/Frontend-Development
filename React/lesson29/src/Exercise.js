import React, {Component} from 'react';
import makeProvider from './MakeProvider';
import {Post} from './components';

class Exercise extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return null;
    }
}

export default makeProvider({name: 'zhang san'})(Post);


