import React, {Component} from 'react';

class Exercise extends Component {
    render() {
        return (
            <House/>
        );
    }
}

class House extends Component {
    render() {
        return (
            <header>
                <h1>House</h1>
                <Room owner='Thomas'>Room</Room>
                <Room owner='Richard'>Room</Room>
                <Bathroom/>
                <Man/>
                <Dog/>
            </header>
        );
    }
}

class Room extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.owner ? `${this.props.owner}'s` : ''} Room</h2>
            </div>
        );
    }
}

class Bathroom extends Component {
    render() {
        return (
            <div>
                <h2>Bathroom</h2>
            </div>
        );
    }
}

class Man extends Component {
    render() {
        return (
            <div>
                <h3>Man</h3>
            </div>
        );
    }
}

class Dog extends Component {
    render() {
        return (
            <div>
                <h3>Dog</h3>
            </div>
        );
    }

}

export default Exercise;
