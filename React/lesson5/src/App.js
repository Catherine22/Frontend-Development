import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    renderLink() {
        return (
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        );
    }

    render() {
        let word = 'JS property';
        let showLink = true;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        I am a {word}
                    </p>
                    <p>
                        I am a {
                        function () {
                            return 'JS function';
                        }()
                    }
                    </p>
                    {showLink ? this.renderLink() : null}
                </header>
            </div>
        );
    }
}


export default App;
