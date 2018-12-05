import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CHANGE_COLOUR from '../constants';
import connect from '../redux/Connect';

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

    /** This could be moved to redux connect
     componentWillMount() {
        const {subscribe} = this.context.store;
        this._updateColour();
        subscribe(this._updateColour.bind(this));
    }

     _updateColour() {
        const {getState} = this.context.store;
        this.setState({
            themeColour: getState().themeColour
        });
    };
     */

    /**
     * Redux - update the state if the props changed.
     * @param nextProps
     */
    componentWillReceiveProps(nextProps) {
        this.setState({
            themeColour: nextProps.themeColour
        })
    }


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


/**
 * Redux
 * @param state
 * @returns {{themeColour: *}}
 */
const mapStateToProps = (state) => {
    return {
        themeColour: state.themeColour
    }
};

Content = connect(mapStateToProps)(Content);

export {ThemeSwitch};
