import React from 'react';
import { Text } from 'react-native';
import { BaseContainer } from '../components/common';

export default function HomeScreen() {
    return (
        <BaseContainer>
            <Text>Home Screen</Text>
        </BaseContainer>
    );
}

HomeScreen.navigationOptions = {
    title: 'Home'
};
