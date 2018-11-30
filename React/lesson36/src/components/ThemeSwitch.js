import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ThemeSwitch extends Component {
    static defaultPropTypes = {
        onBlueSelected: PropTypes.func.isRequired,
        onRedSelected: PropTypes.func.isRequired
    };

    render() {
        const {onBlueSelected, onRedSelected} = this.props;
        return (
            <div>
                <button onClick={onRedSelected}>Red</button>
                <button onClick={onBlueSelected}>Blue</button>
            </div>
        );
    };
}

export {ThemeSwitch};
