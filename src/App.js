// Libraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase'
// Files
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import { Header } from './components/common';


class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCELBRW4jlzp0ijS7WwuqMybunNLeXXOp0",
      authDomain: "reduxexp.firebaseapp.com",
      databaseURL: "https://reduxexp.firebaseio.com",
      projectId: "reduxexp",
      storageBucket: "reduxexp.appspot.com",
      messagingSenderId: "97670824527"
    };
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText='Manager!' />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
