import React, { Component } from 'react';
import './App.css';
import StartPage from './components/StartPage'
import MainPage from './components/MainPage';
import { Route } from 'react-router-dom';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <div>
            <Route exact path="/" component={StartPage} />
            <Route exact path="/main-page" component={MainPage} />
          </div>
        </main>
      </div>
    );
  }
}

export default App
