import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'

class App extends Component {
    render() {
        return (<Post logo={logo} content="Edit <code>src/App.js</code> and save to reload."/>);
    }
}

class Post extends Component {
    static propTypes = {
        logo: PropTypes.object,
        content: PropTypes.string
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={this.props.logo} className="App-logo" alt="logo"/>
                    <p>
                        {this.props.content}
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
