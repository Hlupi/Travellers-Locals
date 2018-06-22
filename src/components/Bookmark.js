import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import '../styles/Bookmark.css'

export default class Bookmark extends Component {
  render() {
    return (
      <div>
        <main>
          <div>
            <Grid>
              <Row>
                <Col xs={12} md={4}>
                  <div className="picHolder">
                    <img src={window.location.origin + '/images/Image1.png'} alt=""/>
                  </div>
                </Col>
                <Col xs={12} md={4}>
                  <div className="picHolder">
                    <img src={window.location.origin + '/images/Image2.png'} alt=""/>
                  </div>
                </Col>
                <Col xs={12} md={4}>
                  <div className="picHolder">
                    <img src={window.location.origin + '/images/Image3.png'} alt=""/>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={4}>
                  <div className="picHolder">
                    <img src={window.location.origin + '/images/Image4.png'} alt=""/>
                  </div>
                </Col>
                <Col xs={12} md={4}>
                  <div className="picHolder">
                    <img src={window.location.origin + '/images/Image5.png'} alt=""/>
                  </div>
                </Col>
                <Col xs={12} md={4}>
                  <div className="picHolder">
                    <img src={window.location.origin + '/images/Image6.png'} alt=""/>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
        </main>
      </div>
    )
  }
}
