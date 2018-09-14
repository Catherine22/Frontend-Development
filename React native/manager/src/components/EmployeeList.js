import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Connect } from 'react-redux';
import { Button } from './common/Button';

class EmployeeList extends Component {
    render() {
        return (
            <View>
                <Text>
                    Employees
                </Text>
            </View>
        );
    }
}

export default EmployeeList;
