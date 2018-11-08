import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';
import {Header, Body, Footer} from './components';

class App extends Component {
    static childContextTypes = {
        fontColor: PropTypes.string
    };

    constructor() {
        super();
        this.state = {fontColor: 'red'}
    }

    getChildContext() {
        return {fontColor: this.state.fontColor}
    }


    render() {
        return (
            <div className="App">
                <Header/>
                <Body/>
                <Footer/>
                <button onClick={() => {
                    this.setState({fontColor: 'red'})
                }}>Red theme
                </button>
                <button onClick={() => {
                    this.setState({fontColor: 'black'})
                }}>Black theme
                </button>
            </div>
        );
    }
}

export default App;
