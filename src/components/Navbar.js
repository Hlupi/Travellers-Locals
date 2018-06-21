import React, { Component } from 'react';
import { Navbar, MenuItem, NavItem, Nav, NavDropdown } from 'react-bootstrap';
import '../styles/Navbar.css'

class NavbarFeatures extends Component {
  render() {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">React-Bootstrap</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav className="navbar">
          <NavItem eventKey={1} href="#">
            Profile
          </NavItem>
          <NavItem eventKey={2} href="#">
            Choose
          </NavItem>
          <NavItem eventKey={2} href="#">
            Bookmark
          </NavItem>
          <NavItem eventKey={2} href="#">
            Invitation
          </NavItem>
          <NavItem eventKey={2} href="#">
            Chat
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
  }
}

export default NavbarFeatures
