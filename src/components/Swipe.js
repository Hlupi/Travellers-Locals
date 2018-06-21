import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import {person} from '../reducers/users'
import { connect } from 'react-redux';
import { matchToLocals } from '../actions/newUser'

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

class Swipe extends Component {
  componentDidMount() {
    if (this.props.currentUser.isTraveler) {
      this.props.matchToLocals(person)
      console.log('helloo');
    }

    // if (!this.props.currentUser.isTraveler) {
    //   this.props.matchToTravelers()
    // }
  }

  next = () => {
    this.reactSwipe.next();
  }

  prev = () => {
    this.reactSwipe.prev();
  }

  createPanes = () => {
    const { matches } = this.props
    const panes = Array.apply(null, Array(matches.length)).map((_, i) => {
      return (
        <div key={i}>
          <img  alt={matches[i].name} src={matches[i].url}/>
          <div className="item">{i}</div>
        </div>
      );
    });
    // console.log(panes)
    // const wtf = this.props.matches.map(match => {
    //   return (
    //     <div key={match.id}>
    //       <img  alt={match.name} src={match.url}/>
    //       <h2 className="item">{match.name}</h2>
    //     </div>
    //   )
    // })
    //
    // console.log(wtf)
    return panes
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

        <ReactSwipe className="mySwipe" swipeOptions={swipeOptions}>
            {this.createPanes()}
        </ReactSwipe>

        <div>
          <button type="button" onClick={this.prev}>Prev</button>
          <button type="button" onClick={this.next}>Next</button>
        </div>
        <p></p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    matches: state.matchUsers,
    currentUser: state.newUser
  }
}

export default connect(mapStateToProps, {matchToLocals})(Swipe)
