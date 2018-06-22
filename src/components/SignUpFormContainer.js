import React, { Component } from 'react';
import SignUpForm from './SignUpForm'
import { connect } from 'react-redux'
import { newUser } from '../actions/newUser'
import { Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap'
import '../styles/SignUpForm.css'
import Logo from './Logo.png'


class SignUpFormContainer extends Component {
  submit = (values) => {
    this.props.newUser(values);
  }
  render() {
    return (
      <div className="App">
        <main>
        <div>
          <Grid>
            <Row className="show-grid">
              <Col xs={12} sm={4}>
                <img src={Logo} />
                <SignUpForm onSubmit={this.submit} />
                <Link to='/main-page' className="link"><h3>Go to main page</h3></Link>
              </Col>
              <Col xs={12} sm={8}>
                <img src="http://res.cloudinary.com/hlupi/image/upload/c_scale,h_637/v1529586764/image_12.png" alt="Traveller" />
              </Col>
            </Row>
          </Grid>
        </div>
        </main>
      </div>
    );
  }
}

export default connect(null, { newUser })(SignUpFormContainer);
