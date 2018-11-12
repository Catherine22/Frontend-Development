import React, {Component} from 'react';

class Exercise extends Component {
    render() {
        return (<Post content="content"/>);
    }
}

class Post extends Component {
    static defaultProps = {
        content: ''
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p onClick={() => {
            console.log(this.props.content)
        }}>{this.props.content}</p>)
    }
}

export default Exercise;
