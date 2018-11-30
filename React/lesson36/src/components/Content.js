import React, {Component} from 'react';
import {ThemeSwitch} from './';
import PropTypes from 'prop-types';

class Content extends Component {
    static contextTypes = {
        themeColor: PropTypes.string
    };

    static defaultPropTypes = {
        changeColour: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <p style={{color: this.context.themeColor}}>React.js 小书内容</p>
                <ThemeSwitch onBlueSelected={this.onBlueSelected} onRedSelected={this.onRedSelected}/>
            </div>
        );
    }

    onBlueSelected = () => {
        this.props.changeColour('blue');
    };

    onRedSelected = () => {
        this.props.changeColour('red');
    };
}

export {Content};
