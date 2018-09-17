import React, { Component } from 'react';
import { Picker } from 'react-native'; 
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { employeeUpdate } from '../actions/EmployeeActions';

class EmployeeCreate extends Component {

    render() {
        return (
            <Card>
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

                <CardSection>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}
                    >
                        <Picker.Item label='Monday' value='Monday' />
                        <Picker.Item label='Tuesday' value='Tuesday' />
                        <Picker.Item label='Wednesday' value='Wednesday' />
                        <Picker.Item label='Thusday' value='Thusday' />
                        <Picker.Item label='Friday' value='Friday' />
                        <Picker.Item label='Saturday' value='Saturday' />
                        <Picker.Item label='Sunday' value='Sunday' />
                    </Picker>
                </CardSection>

                <CardSection>
                    <Button>CREATE</Button>
                </CardSection>
            </Card>
        );
    }
}
const mapStateToProps = ({ employee }) => {
    const { name, phone, shift } = employee;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);

