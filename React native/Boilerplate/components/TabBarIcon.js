import React from 'react';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const TabBarIcon = props => {
    return (
        <Ionicons
            name={props.name}
            size={26}
            style={{ marginBottom: -3 }}
            color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
    );
};

TabBarIcon.propTypes = {
    name: PropTypes.string,
    focused: PropTypes.bool
};

TabBarIcon.defaultProps = {
    name: 'Unknown',
    focused: false
};

export default TabBarIcon;
