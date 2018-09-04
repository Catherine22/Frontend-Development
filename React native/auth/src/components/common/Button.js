import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Declare onPress as props so that the parent (AlbumDetail) is able to handle onPress event
const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        // The last onPress is the props
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    ); 
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    }
};

// Because of common/index.js, "default" is not allowed.
export { Button };

