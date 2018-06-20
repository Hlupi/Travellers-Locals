import React, { Component } from 'react';
import './App.css';
import SignUpFormContainer from './components/SignUpFormContainer'
import Page from './components/Swipe';
// import { Route } from 'react-router-dom


class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <div>
            <SignUpFormContainer />
            <Page/>
          </div>
          </main>
      </div>
    );
  }
}

export default App
