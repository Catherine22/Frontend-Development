import React, {Component} from 'react';

class Exercise extends Component {
    renderContent(text) {
        return (
            <h1>{text}</h1>
        );
    }

    render() {
        return (
            <header>
                {this.renderContent('I am h1')}
            </header>
        );
    }
}

export default Exercise;
