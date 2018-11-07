import React, {Component} from 'react';

class Exercise extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'isRunning': false,
            'isBarking': false
        };

    }

    _behave() {
        this.count = 0;
        if (this.state.isRunning || this.state.isBarking) {
            console.log('He\'s going banana!');
        } else {
            this.interval = setInterval(() => {
                this.bark();
                this.run();
                this.count += 1;

                if(this.count >= 5){
                    clearInterval(this.interval);
                    this.setState({
                        'isRunning': false,
                        'isBarking': false
                    });
                    this.count = 0;
                }
            }, 1000);
        }
    }

    bark() {
        console.log('bark');
        this.setState({'isBarking': true});
    }

    run() {
        console.log('run');
        this.setState({'isRunning': true});
    }

    render() {
        return (
            <div onClick={this._behave.bind(this)}>DOG</div>);
    }
}

export default Exercise;
