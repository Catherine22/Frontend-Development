import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { Text } from "react-native";
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder='user@gmail.com'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label='Password'
                        placeholder='password'
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                {/*<Text style={styles.errorTextStyle}>{this.state.error}</Text>*/}

                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
const styles = {
    errorTextStyle: {
        fontSize: 20,
        paddingLeft: 5,
        paddingRight: 5,
        alignSelf: 'center',
        color: 'red'
    }
};
const mapStateToProps = state => {
    const { auth } = state;
    return {
        email: auth.email,
        password: auth.password
    };
};

//We now have access to a prop inside of our component called this.props.emailChanged
export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);

