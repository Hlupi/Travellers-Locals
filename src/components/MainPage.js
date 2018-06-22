import React, {Component} from 'react';
import Carousel from './Carousel'
import {connect} from 'react-redux';
import {Grid, Row, Col, Button} from 'react-bootstrap'
import Preferences from './Preferences'
import '../styles/MainPage.css'

class MainPage extends Component {
  handleClick = () => {
    console.log(this.props.matches);
    console.log(this.props.currentUser.city);

  }

  render() {
    return (<div className="App">
      <main>
        <div>
          <Grid>
            <Row>
              <Col xs={12} sm={6}>
                <Preferences />
              </Col>
              <Col xs={12} sm={6}>
                <Carousel/>
                <Button onClick={this.handleClick}>YES</Button>
                <p>
                  <Button type="button" onClick={this.prev}>Prev</Button>
                  <Button type="button" onClick={this.next}>Next</Button>
                </p>
              </Col>
            </Row>
          </Grid>
        </div>
      </main>
    </div>);
  }
}

const mapStateToProps = state => {
  return {matches: state.matchUsers, currentUser: state.newUser}
}

export default connect(mapStateToProps)(MainPage)
