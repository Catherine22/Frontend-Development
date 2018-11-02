import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            style: '\'font-size: 12px; color: red;\''
        };
    }


    render() {
        return (
            <div>
                <div dangerouslySetInnerHTML={{__html: `<h1 style=${this.state.style}>React.js 小书</h1>`}}/>
                <button onClick={() => {
                    this.setState(
                        {
                            style: '\'font-size: 12px; color: red;\''

                        }
                    );
                }}>RED
                </button>
                <button onClick={() => {
                    this.setState(
                        {
                            style: '\'font-size: 12px; color: blue;\''
                        }
                    );
                }}>BLUE
                </button>
            </div>
        );
    }
}

export default App;
