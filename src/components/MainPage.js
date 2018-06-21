import React, { Component } from 'react';
import Swipe from './Swipe'
import NavbarFeatures from './Navbar';
import {Grid, Row, Col} from 'react-bootstrap'


class MainPage extends Component {
  render() {
    return (
      <div>
        <div>
          <NavbarFeatures />
        </div>
        <div>
            <Grid>
            <Row className="show-grid">
              <Col xs={12} md={8}>
                <p>helllo</p>
              </Col>
              <Col xs={6} md={4}>
                <Swipe />
              </Col>
            </Row>
          </Grid>
        </div>
      </div>

    );
  }
}

export default MainPage
