import React, { Component } from 'react';
import CaptchaChallenge from './components/captchaChallenge.js';
import logo from './components/images/logo.png'

import './App.css';

class App extends Component {
  render() {
    function click(){
      alert("Yes")
    }
    return (
      <div className="App">
        <h1 className="title">Painful captcha</h1>
        <label for="precaptcha-checkbox">
          <div className="precaptcha-div">
            <button className="precaptcha-checkbox" id="precaptcha-checkbox" onClick={click}></button>
            <h2 className="precaptcha-robot">I'm not a robot</h2>
            <div className="precaptcha-right">
              <img src={logo} className="precaptcha-logo"></img>
              <h2 className="precaptcha-name">reCLARENCS</h2>
              <h2 className="precaptcha-terms">Sorry - Mate</h2>
            </div>
          </div>
        </label>
        <div className="captcha-div">
          <CaptchaChallenge></CaptchaChallenge>
        </div>
      </div>
    );
  }
}

export default App;
