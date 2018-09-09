import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            // fail
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
        });
    }

    onLoginFail() {
        this.setState({ error: 'Authentication Failed.', loading: false });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    renderButton() {
        if (this.state.loading) {
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
            <Card>
                {/* TextInput : User types sth -> onChangeText event called (receiving a text, which is sat as email) 
                Either 'onChangeText={text => this.setState({ email: text })}'
                or 'onChangeText={email => this.setState({ email })}'
                -> setState with new text -> Component rerenders */}
                <CardSection>
                    <Input 
                    label='Email'
                    placeholder='user@gmail.com'
                    value={this.state.email}
                    onChangeText={text => this.setState({ email: text })}
                    />
                </CardSection>


                <CardSection>
                    <Input 
                    secureTextEntry
                    label='Password'
                    placeholder='password'
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>{this.state.error}</Text>

                <CardSection>
                    {this.renderButton()}
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

export default LoginForm;
