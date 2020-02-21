import React, {Component} from 'react';
import {ThemeSwitch} from './';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Content extends Component {
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
        return (
            <div>
                <p style={{color: this.props.themeColour}}>React.js 小书内容</p>
                <ThemeSwitch/>
            </div>
        );
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

Content = connect(mapStateToProps)(Content);

export {Content};
