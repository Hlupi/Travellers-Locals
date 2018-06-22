import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import './Navbar.css'

class NavbarFeatures extends Component {
  render() {
  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand  >
          <a href="#brand" id="brand">Traloca</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav className="navbar" pullRight>
          <NavItem eventKey={1} href="#">
            <span className="items">Profile</span>
          </NavItem>
          <NavItem eventKey={2} href="#">
            <span className="items">Choose</span>
          </NavItem>
          <NavItem eventKey={2} href="#">
            <span className="items">Bookmark</span>
          </NavItem>
          <NavItem eventKey={2} href="#">
            <span className="items">Invitation</span>
          </NavItem>
          <NavItem eventKey={2} href="#">
            <span className="items">Chat</span>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
  }
}

export default NavbarFeatures
