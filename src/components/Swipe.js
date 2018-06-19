import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import quaerystring from 'querystring';
import ReactSwipe from 'react-swipe';
import queryStrings from 'superagent'
import {person} from '../reducers/users'
import { log } from 'util';

const queryString = require('query-string');
const query = queryString.parse(window.location.search.slice(1));

// generate slide panes
const numberOfSlides = parseInt(query.slidesNum, 10) || 20;
const paneNodes = Array.apply(null, Array(numberOfSlides)).map((_, i) => {
  console.log(_);
  return (
    <div key={i}>
      {/* <img src={human.url}/> */}
      <div className="item">{i}</div>
    </div>
  );
});

console.log();


// change Swipe.js options by query params
const startSlide = parseInt(query.startSlide, 10) || 0;
const swipeOptions = {
  startSlide: startSlide < paneNodes.length && startSlide >= 0 ? startSlide : 0,
  auto: parseInt(query.auto, 10) || 0,
  speed: parseInt(query.speed, 10) || 300,
  disableScroll: query.disableScroll === 'true',
  continuous: query.continuous === 'true',
  callback() {
    console.log('slide changed');
  },
  transitionEnd() {
    console.log('ended transition');
  }
};

export default class Swipe extends Component {
  next = () => {
    this.reactSwipe.next();
  }

  prev = () => {
    this.reactSwipe.prev();
  }

  createPanes = () => {
    return Array.apply(null, Array(person.length)).map((_, i) => {
      console.log(person);
      return (
        <div key={i}>
          <img src={person[i].img}/>
          <div className="item">{i}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="center">
        <h1>ReactSwipe.js</h1>
        <h2>Open this page from a mobile device (real or emulated).</h2>
        <h2>You can pass <a href="https://github.com/voronianski/swipe-js-iso#config-options">Swipe.js options</a> as query params.</h2>

        <ReactSwipe ref={reactSwipe => this.reactSwipe = reactSwipe} className="mySwipe" swipeOptions={swipeOptions}>
            {this.createPanes()}
        </ReactSwipe>

        <div>
          <button type="button" onClick={this.prev}>Prev</button>
          <button type="button" onClick={this.next}>Next</button>
        </div>
      </div>
    );
  }
}


