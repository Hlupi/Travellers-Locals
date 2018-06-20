import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Route } from 'react-router-dom
import Page from './components/Swipe';
import Test from './components/Test';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Page/>

        <main>

        </main>
      </div>
    );
  }
}

export default App;
