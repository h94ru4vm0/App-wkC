import React, { Component } from 'react';
import * as firebase from 'firebase';
import { LoginStack } from './Router';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDyiz1-O3D9hKZA0qmROnBL2ot0lXH1r4g",
      authDomain: "fir-wkc.firebaseapp.com",
      databaseURL: "https://fir-wkc.firebaseio.com",
      projectId: "fir-wkc",
      storageBucket: "fir-wkc.appspot.com",
      messagingSenderId: "903901481570"
    });
  }

  render() {
    return (
      <LoginStack />
    );
  }
}


export default App;
