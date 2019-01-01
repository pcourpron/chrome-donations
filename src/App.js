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
var facebookProvider = new firebase.auth.FacebookAuthProvider();

var firestore = firebase.firestore()

const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

class App extends Component {

componentDidMount(){
  (function(d) {
    var params =
    {
      bvwidgetid: "ntv_1976489",
      bvlinksownid: 1976489,
      rows: 1,
      cols: 3,
      textpos: "below",
      imagewidth: 150,
      mobilecols: 1,
      cb: (new Date()).getTime()
    };
    console.log(d.getElementById("ntv_1976489"))
    params.bvwidgetid = "ntv_1976489" + params.cb;
    d.getElementById("ntv_1976489").id = params.bvwidgetid;
    var qs = Object.keys(params).reduce(function(a, k){ a.push(k + '=' + encodeURIComponent(params[k])); return a},[]).join(String.fromCharCode(38));
    var s = d.createElement('script'); s.type='text/javascript';s.async=true;
    var p = 'https:' == document.location.protocol ? 'https' : 'http';
    s.src = p + "://bvadtgs.scdn1.secure.raxcdn.com/bidvertiser/tags/active/bdvws.js?" + qs;
    d.getElementById(params.bvwidgetid).appendChild(s);
  })(document);
}

  render() {
    return (

      <Router>


        <div className="App" >
          <Switch>
            <Route exact path='/newTab' render={() => (<NewTab />)} />
            <Route exact path='/aboutUs' render={() => (<AboutUs />)} />
            <Route exact path='/Login' render={() => (<Login 
              GoogleProvider={GoogleProvider}
              facebookProvider = {facebookProvider}
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
