import React, { Component } from 'react';
import SignUpFormContainer from './SignUpFormContainer'

class StartPage extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <div>
            <SignUpFormContainer />
          </div>
        </main>
      </div>
    );
  }
}

export default StartPage
