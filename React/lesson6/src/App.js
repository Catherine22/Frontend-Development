import React, { Component } from 'react';
import './App.css';

class App extends Component {
    renderContent(text) {
        return (
            <h1>{text}</h1>
        );
    }

    render() {
        return (
            <header>
                {this.renderContent('I am h1')}
            </header>
        );
    }
}

export default App;
