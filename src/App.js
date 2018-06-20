import React, { Component } from 'react';
import './App.css';
import SignUpFormContainer from './components/SignUpFormContainer'
import Page from './components/Swipe';
// import { Route } from 'react-router-dom


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
      <main>
        <div>
          <h2>Sign in, dear user</h2>
          <SignUpFormContainer />
          <Page/>
        </div>
        </main>
      </div>
    );
  }
}

export default App
