import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Roles } from 'meteor/alanning:roles';
import Styles from './styles';

const AuthenticatedNavigation = ({ name, history, userId }) => (
  <div>
    <Nav>
      <LinkContainer to="/documents">
        <NavItem eventKey={1} href="/documents">
          Documents
        </NavItem>
      </LinkContainer>
      <LinkContainer to="/favorites">
        <NavItem eventKey={2} href="/favorites">
          Favorites
        </NavItem>
      </LinkContainer>
      {Roles.userIsInRole(userId, 'admin') && (
        <NavDropdown eventKey={3} title="Chat" id="admin-nav-dropdown">
          <LinkContainer exact to="/admin/users">
            <NavItem eventKey={3.1} href="/admin/users">
              Users
            </NavItem>
          </LinkContainer>
          <LinkContainer exact to="/admin/users/settings">
            <NavItem eventKey={3.2} href="/admin/users/settings">
              User Settings
            </NavItem>
          </LinkContainer>
        </NavDropdown>
      )}
      <LinkContainer to="/notifications">
        <NavItem eventKey={4} href="/notifications">
          Notifications
        </NavItem>
      </LinkContainer>
      <LinkContainer to="/orders">
        <NavItem eventKey={5} href="/orders">
          Orders
        </NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <LinkContainer to="/cart">
        <NavItem eventKey={6} href="/cart">
          <Styles.IconCart className="icon ion-md-basket" />
        </NavItem>
      </LinkContainer>
      <NavDropdown eventKey={7} title={name} data-test="user-nav-dropdown" id="user-nav-dropdown">
        <LinkContainer to="/profile">
          <NavItem eventKey={7.1} href="/profile">
            Profile
          </NavItem>
        </LinkContainer>
        <MenuItem divider />
        <MenuItem eventKey={7.2} onClick={() => history.push('/logout')}>
          Logout
        </MenuItem>
      </NavDropdown>
    </Nav>
  </div>
);

AuthenticatedNavigation.propTypes = {
  name: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  userId: PropTypes.string.isRequired,
};

export default withRouter(AuthenticatedNavigation);
