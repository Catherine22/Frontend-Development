import React, {Component} from 'react';
import {ThemeSwitch} from './';
import PropTypes from 'prop-types';
import {connect} from '../redux/Connect';

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
                <p style={{color: this.state.themeColour}}>React.js 小书内容</p>
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
    }
};

Content = connect(mapStateToProps)(Content);

export {Content};
