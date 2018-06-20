import React, { Component } from 'react';
import SignUpForm from './SignUpForm'
import { connect } from 'react-redux'
import { newUser } from '../actions/newUser'
import { Link } from 'react-router-dom'


class SignUpFormContainer extends Component {
  submit = (values) => {
    console.log(values);
    this.props.newUser(values);
  }
  render() {
    return (
      <div className="App">
        <main>
        <div>
          <h2>Sign in, dear user</h2>
          <SignUpForm onSubmit={this.submit} />
          <Link to='/main-page'>Go to main page</Link>
        </div>
        </main>
      </div>
    );
  }
}

export default connect(null, { newUser })(SignUpFormContainer);
