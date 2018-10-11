/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, NativeEventEmitter, NativeModules } from 'react-native';

const { ReactNativeLoading } = NativeModules;
import { Button } from './src/components/common';
import JobScheduler from './src/components/android_native/JobScheduler';
import ForegroundService from './src/components/android_native/ForegroundService';


const SERVICE_LISTENER = 'service_listener';
const loadingManagerEmitter = new NativeEventEmitter(ReactNativeLoading);

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            timer: 0
        };
        loadingManagerEmitter.addListener(SERVICE_LISTENER, (sec) => {
            this.setState({ timer: this.state.timer += sec });
        });
    }


    onStartService() {
        ForegroundService.start(SERVICE_LISTENER);
    }

    onStopService() {
        ForegroundService.stop();
    }

    onStartJobScheduler() {
        JobScheduler.start();
    }

    onStopJobScheduler() {
        JobScheduler.stop();
    }

    renderFormattedTime(time) {
        let totalSeconds = time;
        const hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${hours}:${minutes}:${seconds}`;
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>{this.renderFormattedTime(this.state.timer)}</Text>
                <Button onPress={this.onStartService.bind(this)}>Start Foreground Service</Button>
                <Button onPress={this.onStopService.bind(this)}>Stop Foreground Service</Button>
                <Button onPress={this.onStartJobScheduler.bind(this)}>Start JobScheduler</Button>
                <Button onPress={this.onStopJobScheduler.bind(this)}>Stop JobScheduler</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    textStyle: {
        fontSize: 14,
        height: 20
    }
});

export default App;
