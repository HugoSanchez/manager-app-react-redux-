//Libraries
import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
// Files
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends React.Component {

  onEmailChange(text){
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
            label="Email"
            placeholder="email@gmail.com"
            value={this.props.email}
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            value={this.props.password}
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};


export default connect(mapStateToProps, { emailChanged })(LoginForm);
