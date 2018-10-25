import React, {Component} from 'react';

class Exercise extends Component {
    render() {
        return (<Computer/>);
    }
}

class Computer extends Component {
    constructor() {
        super();

        this.state = {
            power: 'off'
        };
    }

    _onPowerButtonPressed() {
        this.setState({
            power: this.isPowerOn() ? 'off' : 'on'
        })
    }

    isPowerOn() {
        return this.state.power === 'on';
    }

    render() {
        return (
            <div>
                <button
                    onClick={this._onPowerButtonPressed.bind(this)}>{this.isPowerOn() ? '关闭' : '开启'}</button>

                <Screen showContent={this.isPowerOn()}>show me show me show me show me</Screen>
            </div>
        );
    }
}

class Screen extends Component {
    static defaultProps = {
        showContent: false
    };

    printSomething() {
        if (this.props.showContent) {
            return this.props.children;
        } else {
            return '';
        }
    }

    render() {
        return (
            <div className='screen'>
                {
                    this.printSomething()
                }
            </div>
        );
    }
}

export default Exercise;

