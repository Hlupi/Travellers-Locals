import React, { Component } from 'react';
import './App.css';
import StartPage from './components/StartPage'
import Swipe from './components/Swipe';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <div>
            <Route exact path="/" component={StartPage} />
            <Route exact path="/main-page" component={Swipe} />
          </div>
        </main>
      </div>
    );
  }
}

export default App
