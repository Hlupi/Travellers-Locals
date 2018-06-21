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
      console.log(this.props);
        return (
            <ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
              { this.props.matches.map((match, index) => {
                return <div><h1 key={match.id} data-index={index}>{match.name}</h1>
                            <p>{match.url}</p>
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
