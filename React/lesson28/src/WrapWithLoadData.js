import React, {Component} from 'react';

export default (WrappedComponent, id) => {
    class NewComponent extends Component {
        constructor() {
            super();
            this.state = {
                username: null
            };
        }

        componentWillMount() {
            // localStorage.getItem(id)
            // mock data
            let username;
            if ('A0001' === id) {
                username = 'Alex';
            } else {
                username = 'New User';
            }

            this.setState({
                username: username
            });
        }

        _onButtonClicked() {
            console.log('NewComponent', 'data collection');
        }

        render() {
            console.log('WrapWithLoadData', this.state);
            return (<WrappedComponent username={this.state.username} sendEvent={this._onButtonClicked.bind(this)}/>);
        }

    }

    return NewComponent;
};
