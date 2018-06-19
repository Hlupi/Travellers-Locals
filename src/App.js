import React, { Component } from 'react';
import './App.css';
import SignUpForm from './components/SignUpForm'
import { connect } from 'react-redux'

import { newUser } from './actions/newUser'

class App extends Component {
  submit = (values) => {
    console.log(values);
    this.props.newUser(values);
  }
  render() {
    return (
      <div className="App">
        <main>
        <div>
          <h2>Sign in dear user</h2>
          <SignUpForm onSubmit={this.submit} />
        </div>
        </main>
      </div>
    );
  }
}

export default connect(null, { newUser })(App);
