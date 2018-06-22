import React, { Component } from 'react';
import Carousel from './Carousel'
import { connect } from 'react-redux';


class MainPage extends Component {
  handleClick = () => {
    console.log(this.props.matches);
    console.log(this.props.currentUser.city);

  }

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
            <button onClick={this.handleClick}>YES</button>
          </div>
        </main>
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

export default connect(mapStateToProps)(MainPage)
