import React, {Component} from 'react';
import {Title} from './Title';

class Header extends Component {
    render() {
        return (
            <div>
                <Title>{this.props.title}</Title>
                <h2>{this.props.children}</h2>
            </div>
        );
    }
}

export {Header};
