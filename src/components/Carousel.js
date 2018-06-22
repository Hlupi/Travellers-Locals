import React from 'react'
// import ReactSwipe from 'react-swipe';
import ReactSwipe from './Swipe';
import { person } from '../reducers/users'
import { connect } from 'react-redux';
import { matchToLocals, matchToTravellers } from '../actions/newUser'


class Carousel extends React.Component {
  componentDidMount() {
    if (this.props.currentUser.isTraveler) {
      this.props.matchToLocals(person)
      //console.log('helloo');
    }

    if (!this.props.currentUser.isTraveler) {
      this.props.matchToTravellers(person)
      //console.log('helloo');
    }
  }


  render() {
        const cityMatches = this.props.matches.filter((e, currentUser) => e.city === this.props.currentUser.city);

        return (
            <ReactSwipe key={cityMatches.length} className="carousel" swipeOptions={{continuous: false}}>
              { cityMatches.map(match => {
                return <div key={match.id}><h1 key={match.id}>{match.name}</h1>
                            <img alt='userImage' src={match.url} />
                            <p>{match.city}</p>
                            <p>{match.name}'s interests are: </p>
                            {match.interests.map((interest) => <i key={interest}>{interest} </i>)}

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

export default connect(mapStateToProps, {matchToLocals, matchToTravellers})(Carousel)
