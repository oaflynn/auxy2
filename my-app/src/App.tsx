import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import SpotifyLogin from './SpotifyLogin';
import { callbackify } from 'util';

class App extends Component {
  Landing() {
    let login = () => {
      let sp = new SpotifyLogin()
      let tokenSub = sp.getToken().subscribe(token => console.log(token));
      sp.login();
      setTimeout(() => console.log(sp.token), 15000)
    }

    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <button onClick={login}>Spotify Login</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

  CallBack() {
    let extractToken = () => {
      let token = window.location.hash;
      token = token.substring(token.indexOf("=")+1, token.indexOf("&"));
      alert(token);
    }

    return(
      <div className="App">
        <h2>Congratualation, you signed into spotify!</h2>
        <button onClick={extractToken}>Go back to Auxy</button>
      </div>
    )
  }

  render() {
    return (
      <Router>
        <Route exact path="/" component={this.Landing} />
        <Route exact path="/callback" component={this.CallBack} />
      </Router>
    );
  }
}

export default App;
