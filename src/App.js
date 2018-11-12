// Libraries
import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
// Files
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import { Header } from './components/common';
import Router form './Router';


class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCELBRW4jlzp0ijS7WwuqMybunNLeXXOp0",
      authDomain: "reduxexp.firebaseapp.com",
      databaseURL: "https://reduxexp.firebaseio.com",
      projectId: "reduxexp",
      storageBucket: "reduxexp.appspot.com",
      messagingSenderId: "97670824527"
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
