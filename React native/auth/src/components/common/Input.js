import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder }) => {
    const { containerStyle, labelStyle, inputStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text stye={labelStyle}>{label}</Text>
            <TextInput 
            autoCorrect={false}
            value={value}
            onChangeText={onChangeText}
            style={inputStyle}
            placeholder={placeholder}
            />
        </View>
    );
};

const styles = {
    // In this case, we have 2 flex attributes for siblings (inputStyle:2 and labelStyle:1).
    // Total is 3, 2/3 of the available space will be allocated to inputStyle
    inputStyle: {
        color: '#000000',
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 23,
        textAlign: 'center',
        flex: 2,

    },

    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },

    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        align: 'center',
        alignItems: 'center',
    }

};

export { Input };
