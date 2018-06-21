import React from 'react'
// import ReactSwipe from 'react-swipe';
import ReactSwipe from './Swipe';
import { person } from '../reducers/users'
import { connect } from 'react-redux';
import { matchToLocals } from '../actions/newUser'


class Carousel extends React.Component {
  componentDidMount() {
    if (this.props.currentUser.isTraveler) {
      this.props.matchToLocals(person)
      console.log('helloo');
    }
  }

    render() {
        return (
            <ReactSwipe key={this.props.matches.length} className="carousel" swipeOptions={{continuous: false}}>
              { this.props.matches.map(match => {
                console.log('ola muchaco');
                return <div key={match.id}><h1 key={match.id}>{match.name}</h1>
                            <img src={match.url} />
                        </div>
              })}
            </ReactSwipe>
        );
    }
}

const mapStateToProps = state => {
  return {
    matches: state.matchUsers,
    currentUser: state.newUser
  }
}

export default connect(mapStateToProps, {matchToLocals})(Carousel)