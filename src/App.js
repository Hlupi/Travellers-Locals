import React, { Component } from 'react';
import './App.css';
import SignUpFormContainer from './components/SignUpFormContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
        <div>
          <h2>Sign in, dear user</h2>
          <SignUpFormContainer />
        </div>
        </main>
      </div>
    );
  }
}

export default App
