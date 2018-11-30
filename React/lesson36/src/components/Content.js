import React, {Component} from 'react';
import {ThemeSwitch} from './';

class Content extends Component {
    render() {
        return (
            <div>
                <p>React.js 小书内容</p>
                <ThemeSwitch/>
            </div>
        );
    }
}

export {Content};
