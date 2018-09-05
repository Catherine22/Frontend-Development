import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
    state = { email: '' };

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


                <CardSection />

                <CardSection>
                    <Button>Log in</Button>
                </CardSection>
            </Card>
         );
    }
}

export default LoginForm;
