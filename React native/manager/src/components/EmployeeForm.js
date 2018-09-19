import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from './common';
import { employeeUpdate } from '../actions/EmployeeActions';

class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label='Name'
                        placeholder='Jane'
                        // When the key and the value are the same, like 'value: value' can be simplified to 'value' (ES6)
                        onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                        value={this.props.name}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label='Phone'
                        placeholder='555-555-5555'
                        onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
                        value={this.props.phone}
                    />
                </CardSection>

                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>

                    <Picker
                        style={{ height: 160 }}
                        selectedValue={this.props.shift}
                        onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}
                    >
                        <Picker.Item label='Monday' value='Monday' />
                        <Picker.Item label='Tuesday' value='Tuesday' />
                        <Picker.Item label='Wednesday' value='Wednesday' />
                        <Picker.Item label='Thursday' value='Thursday' />
                        <Picker.Item label='Friday' value='Friday' />
                        <Picker.Item label='Saturday' value='Saturday' />
                        <Picker.Item label='Sunday' value='Sunday' />
                    </Picker>
                </CardSection>
            </View>
        );
    }
}


const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingHorizontal: 20,
    }
};


const mapStateToProps = ({ employeeForm }) => {
    const { name, phone, shift } = employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
