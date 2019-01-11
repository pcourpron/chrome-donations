import React, { Component } from 'react';
import './App.css';
import AboutUs from './components/AboutUs'
import NewTab from './components/NewTab'
import Login from './components/Login'
import Settings from './components/Settings'

import firebase from 'firebase'
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
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
var facebookProvider = new firebase.auth.FacebookAuthProvider();

var firestore = firebase.firestore()

const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

class App extends Component {

  state = {
    loaded: null,
    user: null
  }

  componentWillMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
        this.setState({ user: true, loaded:true, userID: user.uid })
      }

      else {
        this.setState({ loaded: true })
      }
    })


  }
  render() {
    if (!this.state.loaded) {
      return null;
    }

    else {

      return (
        <Router>
          <div className="App" >
            <Switch>

              <Route exact path='/aboutUs' render={() => (<AboutUs />)} />
              <Route exact path='/Login' render={() => (<Login
                GoogleProvider={GoogleProvider}
                facebookProvider={facebookProvider}
                firebase={firebase}
                firestore={firestore}
                history={history}
                changeUser={this.changeUser} />)} />



              <Route exact path='/newTab' render={() => {
                return this.state.user ? <NewTab firebase={firebase} userID={this.state.userID}/> : <Redirect to='/Login' />
              }} />
              <Route exact path='/settings' render={() => {
                return this.state.user ? <Settings firebase={firebase} /> : <Redirect to='/Login' />
              }} />

              <Route exact path='*' render={() => (<LandingPage user={this.state.user} />)} />

            </Switch>

          </div>
        </Router>

      )
    }
  }
}

export default App;
