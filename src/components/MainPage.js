import React, { Component } from 'react';
import Swipe from './Swipe'

class MainPage extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <div>
            <nav>
              <div>Profile page</div>
              <div>Main page</div>
              <div>Profile page</div>
            </nav>
            <Swipe />
          </div>
        </main>
      </div>
    );
  }
}

export default MainPage
