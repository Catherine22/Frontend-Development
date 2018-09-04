import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
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

export default CardSection;
