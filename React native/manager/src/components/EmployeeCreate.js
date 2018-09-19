import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import { employeeUpdate, employeeCreate } from '../actions/EmployeeActions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

    register() {
        const { name, phone, shift } = this.props;
        // In JS, '' || 'Monday' will be 'Monday'
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        console.log(this.props);
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.register.bind(this)}>CREATE</Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = ({ employeeForm }) => {
    const { name, phone, shift } = employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);

