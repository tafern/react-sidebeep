import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

const PublicNavigation = () => (
  <Nav pullRight>
    <LinkContainer to="/guide">
      <NavItem eventKey={1} href="/guide">
        Guide
      </NavItem>
    </LinkContainer>
    <LinkContainer to="/signup">
      <NavItem eventKey={2} href="/signup">
        Sign Up
      </NavItem>
    </LinkContainer>
    <LinkContainer to="/login">
      <NavItem eventKey={3} href="/login">
        Log In
      </NavItem>
    </LinkContainer>
  </Nav>
);

export default PublicNavigation;
