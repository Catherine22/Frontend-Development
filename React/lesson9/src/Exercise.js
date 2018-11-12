import React, {Component} from 'react';

class Exercise extends Component {
    render() {
        return (
            <Dog/>
        );
    }
}

class Dog extends Component {

    bark() {
        console.log('bark');
    }

    run() {
        console.log('run');
    }

    render() {
        return (
            <div>
                <h1 onClick={() => {
                    this.bark();
                    this.run();
                }}>
                    DOG
                </h1>
            </div>);
    }
}

export default Exercise;
