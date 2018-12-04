import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CHANGE_COLOUR from '../constants';
import {connect} from '../redux/Connect';

class ThemeSwitch extends Component {

    /** This could be moved to redux connect
     static contextTypes = {
        store: PropTypes.shape({
            getState: PropTypes.func.isRequired,
            dispatch: PropTypes.func.isRequired,
            subscribe: PropTypes.func.isRequired
        })
    };
     */

    static defaultPropTypes = {
        themeColour: PropTypes.string.isRequired,
        onBlueSelected: PropTypes.func.isRequired,
        onRedSelected: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
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

    render() {
        const {themeColour} = this.props;
        return (
            <div>
                <button style={{color: themeColour}} onClick={this.onRedSelected}>Red</button>
                <button style={{color: themeColour}} onClick={this.onBlueSelected}>Blue</button>
            </div>
        );
    }


    onBlueSelected = () => {
        if (this.props.onBlueSelected)
            this.props.onBlueSelected();
    };

    onRedSelected = () => {
        if (this.props.onRedSelected)
            this.props.onRedSelected();
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
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBlueSelected: () => {
            dispatch({
                type: CHANGE_COLOUR,
                themeColour: 'blue'
            });
        },

        onRedSelected: () => {
            dispatch({
                type: CHANGE_COLOUR,
                themeColour: 'red'
            });
        }
    };
};

ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch);


export {ThemeSwitch};
