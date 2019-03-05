import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import {
  MenuPanel,
  LinkWrapper,
  IconNavbar,
  UserLink,
  UserMenuDropdown,
  UserMenuItem,
} from './styles';

const AuthenticatedNavigation = ({ name, history, userId }) => (
  <div>
    <MenuPanel pullRight>
      <LinkWrapper to="/documents">
        <UserLink eventKey={1} href="/documents">
          <IconNavbar className="glyphicon glyphicon-list-alt" />
        </UserLink>
      </LinkWrapper>
      <LinkWrapper to="/favorites">
        <UserLink eventKey={2} href="/favorites">
          <IconNavbar className="glyphicon glyphicon-envelope" />
        </UserLink>
      </LinkWrapper>
      <LinkWrapper to="/cart">
        <UserLink eventKey={3} href="/notifications">
          <IconNavbar className="glyphicon glyphicon-heart" />
        </UserLink>
      </LinkWrapper>
      <LinkWrapper to="/orders">
        <UserLink eventKey={4} href="/orders">
          <IconNavbar className="glyphicon glyphicon-bell" />
        </UserLink>
      </LinkWrapper>
      {Roles.userIsInRole(userId, 'admin') && (
        <UserMenuDropdown eventKey={5} title="Chat" id="admin-nav-dropdown">
          <LinkWrapper exact to="/admin/users">
            <UserLink eventKey={5.1} href="/admin/users">
              Users
            </UserLink>
          </LinkWrapper>
          <LinkWrapper exact to="/admin/users/settings">
            <UserLink eventKey={5.2} href="/admin/users/settings">
              User Settings
            </UserLink>
          </LinkWrapper>
        </UserMenuDropdown>
      )}
      <UserMenuDropdown
        eventKey={6}
        title={name}
        data-test="user-nav-dropdown"
        id="user-nav-dropdown"
      >
        <LinkWrapper to="/profile">
          <UserLink eventKey={6.1} href="/profile">
            Profile
          </UserLink>
        </LinkWrapper>
        <UserMenuItem eventKey={6.2} onClick={() => history.push('/logout')}>
          Logout
        </UserMenuItem>
      </UserMenuDropdown>
    </MenuPanel>
  </div>
);

AuthenticatedNavigation.propTypes = {
  name: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  userId: PropTypes.string.isRequired,
};

export default withRouter(AuthenticatedNavigation);
