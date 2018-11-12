import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    _onIconClick(message1, message2, event) {
        console.log(this);
        alert(message1 + message2);
    }

    _onTextClick(event) {
        console.log(this);
        alert(event.target.innerHTML);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"
                         onClick={this._onIconClick.bind(this, 'Hello! ', 'there!')}/>
                    <h1 onClick={this._onTextClick.bind(this)}>
                        Click the icon
                    </h1>
                </header>
            </div>
        );
    }
}

export default App;
