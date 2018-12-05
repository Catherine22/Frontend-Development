import React, {Component} from 'react';
import {ThemeSwitch} from './';
import PropTypes from 'prop-types';

class Content extends Component {
    static contextTypes = {
        store: PropTypes.shape({
            getState: PropTypes.func.isRequired,
            dispatch: PropTypes.func.isRequired,
            subscribe: PropTypes.func.isRequired
        })
    };

    constructor(props) {
        super(props);
        this.state = {
            themeColour: 'green'
        }
    }

    componentWillMount() {
        const {getState, subscribe} = this.context.store;
        this._updateColour(getState().themeColour);
        subscribe(this._updateColour.bind(this));
    }

    _updateColour() {
        const {getState} = this.context.store;
        this.setState({
            themeColour: getState().themeColour
        });
    };

    render() {
        return (
            <div>
                <p style={{color: this.state.themeColour}}>React.js 小书内容</p>
                <ThemeSwitch/>
            </div>
        );
    }


}

export {Content};
