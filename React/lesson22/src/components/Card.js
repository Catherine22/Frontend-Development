import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
    render() {
        console.log(this.props.children);
        return (
            <div className='cardView'>
                {this.props.children}
            </div>);
    }
}

export {Card};
