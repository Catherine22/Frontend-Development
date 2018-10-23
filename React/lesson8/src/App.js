import React, {Component} from 'react';
import {Header, Footer} from './components/';
import './App.css';

class App extends Component {
    render() {
        return (
            <header>
                <Header title='I am title'>This is Header</Header>
                <div>
                    <h2>This is main content</h2>
                </div>
                <Footer/>
            </header>
        );
    }
}

export default App;
