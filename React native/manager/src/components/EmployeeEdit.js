import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';
import { CardSection, Button, Card, Confirm } from './common';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';

class EmployeeEdit extends Component {
    state = {
      showModal: false
    };

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value }); //{ prop: prop, value: value }
        });
    }

    onRegisterPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    onSchedulePress() {
        const { phone, shift } = this.props;
        Communications.text(phone, `Your upcoming shift is ${shift}`);
    }

    onFirePress() {
        this.setState({ showModal: !this.state.showModal });
    }

    onAccept() {
        const { uid } = this.props.employee;
        this.props.employeeDelete({ uid });
    }

    onDecline() {
        this.setState({
            showModal: false
        });
    }

    render() {
        console.log(this.props);
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onRegisterPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onSchedulePress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onFirePress.bind(this)}>
                        Fire Employ
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = ({ employeeForm }) => {
    const { name, phone, shift } = employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, {
    employeeUpdate, employeeSave, employeeDelete
})(EmployeeEdit);
