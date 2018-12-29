import React, { Component } from 'react';
import './App.css';
import AboutUs from './components/AboutUs'
import NewTab from './components/NewTab'
import Login from './components/Login'

import firebase from 'firebase'
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';

var history = createBrowserHistory()
var config = {
  apiKey: "AIzaSyCdxJs-sckW-Jl4uTZt7R34r3WOnmDsH3o",
  authDomain: "tably-f516a.firebaseapp.com",
  databaseURL: "https://tably-f516a.firebaseio.com",
  projectId: "tably-f516a",
  storageBucket: "",
  messagingSenderId: "364053413397"
};
firebase.initializeApp(config);

var GoogleProvider = new firebase.auth.GoogleAuthProvider();
var firestore = firebase.firestore()

const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

class App extends Component {



  render() {
    return (

      <Router>


        <div className="App" >
          <Switch>
            <Route exact path='/newTab' render={() => (<NewTab />)} />
            <Route exact path='/Login' render={() => (<Login GoogleProvider={GoogleProvider}
              firebase={firebase}
              firestore={firestore}
              history={history} />)} />
            <Route render={() => (<LandingPage />)} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
