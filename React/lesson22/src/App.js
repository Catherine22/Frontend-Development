import React, {Component} from 'react';
import {Card} from './components';

class App extends Component {
    render() {
        return (
            <Card>
                <div>
                    <h2>React.js 小书</h2>
                    <div>开源、免费、专业、简单</div>
                    订阅：
                    <input style={{marginBottom: '10px'}}/>
                </div>
            </Card>
        );
    }
}

export default App;
