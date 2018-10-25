import React, {Component} from 'react';

class Exercise extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'isRunning': false,
            'isBarking': false
        };

    }

    bark() {
        console.log('bark');
    }

    run() {
        console.log('run');
    }

    render() {
        return (
            <div onClick={() => {
                this.bark();
                this.run();
            }
            }>DOG</div>);
    }
}

export default Exercise;
