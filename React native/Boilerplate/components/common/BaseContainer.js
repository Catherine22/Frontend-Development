import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

class BaseContainer extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    {this.props.children}
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    contentContainer: {
        paddingTop: 30
    }
});

export { BaseContainer };
