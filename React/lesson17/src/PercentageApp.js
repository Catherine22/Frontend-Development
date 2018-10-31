import React, {Component} from 'react';
import Input from './Input';
import PercentageShower from './PercentageShower';

class PercentageApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        };
    }

    _onChange(event) {
        this.setState(
            {
                num: event.target.value
            }
        );
    }


    render() {
        return (
            <div>
                <Input value={this.state.num} onChange={this._onChange.bind(this)}/>
                <PercentageShower value={this.state.num}/>
            </div>
        );
    }
}

export default PercentageApp;
