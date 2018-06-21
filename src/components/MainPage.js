import React, { Component } from 'react';
import Carousel from './Carousel'

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
            <Carousel />
          </div>
        </main>
      </div>
    );
  }
}

export default MainPage
