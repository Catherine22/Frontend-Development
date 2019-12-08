import React from 'react';
import { Text } from 'react-native';
import { BaseContainer } from '../components/common';

export default function SettingsScreen() {
    return (
        <BaseContainer>
            <Text>Settings Screen</Text>
        </BaseContainer>
    );
}

SettingsScreen.navigationOptions = {
    title: 'Settings'
};
