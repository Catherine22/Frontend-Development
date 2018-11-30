import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CHANGE_COLOUR from "../constants";

class ThemeSwitch extends Component {

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
                <button style={{color: this.state.themeColour}} onClick={this.onRedSelected}>Red</button>
                <button style={{color: this.state.themeColour}} onClick={this.onBlueSelected}>Blue</button>
            </div>
        );
    };

    onBlueSelected = () => {
        this.context.store.dispatch({
            type: CHANGE_COLOUR,
            themeColour: 'blue'
        });
    };

    onRedSelected = () => {
        this.context.store.dispatch({
            type: CHANGE_COLOUR,
            themeColour: 'red'
        });
    };
}

export {ThemeSwitch};
