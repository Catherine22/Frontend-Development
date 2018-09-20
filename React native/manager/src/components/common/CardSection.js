import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        // we have two styles here
        <View style={[styles.containerStyle, props.style]}>
        {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderColor: '#dddddd',
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#ffffff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    }
};

// Because of common/index.js, "default" is not allowed.
export { CardSection };
