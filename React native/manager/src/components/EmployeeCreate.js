import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { employeeUpdate } from '../actions/EmployeeActions';

class EmployeeCreate extends Component {
    onEmployeeUpdate(text) {
        this.props.employeeUpdate(this.props, text);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                    label='Name' 
                    placeholder='Jane'
                    onChangeText={this.onEmployeeUpdate.bind(this)} 
                    value={this.props.name}
                    />
                </CardSection>

                <CardSection>
                    <Input label='Phone' placeholder='555-555-5555' />
                </CardSection>

                <CardSection>
                    <Button onPress={this.onEmployeeUpdate.bind(this)}>CREATE</Button>
                </CardSection>
            </Card>
        );
    }
}
const mapStateToProps = ({ employee }) => {
    const { name } = employee;
    return { name };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);

