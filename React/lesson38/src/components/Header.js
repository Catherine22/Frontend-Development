import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from '../redux/Connect';

class Header extends Component {
    /** This could be moved to redux connect
     static contextTypes = {
        store: PropTypes.shape({
            getState: PropTypes.func.isRequired,
            dispatch: PropTypes.func.isRequired,
            subscribe: PropTypes.func.isRequired
        }).isRequired
    };
     */


    static defaultPropTypes = {
        themeColour: PropTypes.string.isRequired
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
        return (<h1 style={{color: this.props.themeColour}}>React.js 小书</h1>);
    }

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

Header = connect(mapStateToProps)(Header);

export {Header};
