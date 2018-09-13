import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { Text, View } from "react-native";
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size='small' />;
        } 
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
            Log in
            </Button>
        );
    }

    render() {
        return (
            <View>
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

                    <Text style={styles.errorTextStyle}>{this.props.error.message}</Text>

                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>
            </View>
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
const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return { email, password, error, loading };
};

//We now have access to a prop inside of our component called this.props.emailChanged
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);

