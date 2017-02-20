import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import Transcribe from '../components/Transcribe';
import '../styles/App.css';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Reverse Transcription Tool </h2>
          <p className="App-intro"></p>
        </div>
        <Transcribe />
      </div>
    );
  }
}