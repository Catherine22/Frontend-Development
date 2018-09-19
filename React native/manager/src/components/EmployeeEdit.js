import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { CardSection, Button, Card } from './common';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';

class EmployeeEdit extends Component {

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value }); //{ prop: prop, value: value }
        });
    }

    register() {
        const { name, phone, shift } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    render() {
        console.log(this.props);
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.register.bind(this)}>Save Changes</Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = ({ employeeForm }) => {
    const { name, phone, shift } = employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);
