import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    static contextTypes = {
        store: PropTypes.shape({
            getState: PropTypes.func.isRequired,
            dispatch: PropTypes.func.isRequired,
            subscribe: PropTypes.func.isRequired
        }).isRequired
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
        return (<h1 style={{color: this.state.themeColour}}>React.js 小书</h1>);
    }

}

export {Header}
