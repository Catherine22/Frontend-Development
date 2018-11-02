import React, {Component} from 'react';
import {BlockBorderContainer} from "./components";

class Exercise extends Component {
    render() {
        return (
            <BlockBorderContainer>
                <div>
                    <h2>React.js 小书</h2>
                    <div>开源、免费、专业、简单</div>
                    订阅：
                    <input style={{marginBottom: '10px'}}/>
                </div>
            </BlockBorderContainer>);
    }
}

export default Exercise;
