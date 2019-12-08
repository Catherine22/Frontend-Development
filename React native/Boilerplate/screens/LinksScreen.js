import React from 'react';
import { Text } from 'react-native';
import { BaseContainer } from '../components/common';

export default function LinksScreen() {
    return (
        <BaseContainer>
            <Text>Links Screen</Text>
        </BaseContainer>
    );
}

LinksScreen.navigationOptions = {
    title: 'Links'
};
