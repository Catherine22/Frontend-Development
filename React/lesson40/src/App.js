import React, {Component} from 'react';
import {Content, Header} from './components';
import Provider from './redux/Provider';


class App extends Component {

    render() {
        return (
            <Provider>
                <Header/>
                <Content/>
            </Provider>);
    }
}

export default App;
