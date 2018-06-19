import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InitializeFromStateForm from './components/userInputForm'
import showResults from "./showResults";

class App extends Component {
  submit = (values) => {
    // Do something with the form values
    console.log(values);
  }
  render() {
    return (
      <div className="App">
        <main>
        <div style={{ padding: 15 }}>
          <h2>Initialize From State</h2>
          <InitializeFromStateForm onSubmit={showResults} />
        </div>
        </main>
      </div>
    );
  }
}

export default App;
