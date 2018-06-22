import React, { Component } from 'react';
import './App.css';
import StartPage from './components/StartPage'
import MainPage from './components/MainPage';
import { Route } from 'react-router-dom';
import Navbar from './styles/Navbar'
import Footer from './styles/Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <main>
          <div>
            <Route exact path="/" component={StartPage} />
            <Route exact path="/main-page" component={MainPage} />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App
