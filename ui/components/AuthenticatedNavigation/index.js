import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import {
  MenuPanel,
  LinkWrapper,
  IconCart,
  UserLink,
  UserMenuDropdown,
  UserMenuItem,
} from './styles';

const AuthenticatedNavigation = ({ name, history, userId }) => (
  <div>
    <MenuPanel>
      <LinkWrapper to="/documents">
        <UserLink eventKey={1} href="/documents">
          Documents
        </UserLink>
      </LinkWrapper>
      <LinkWrapper to="/favorites">
        <UserLink eventKey={2} href="/favorites">
          Favorites
        </UserLink>
      </LinkWrapper>
      {Roles.userIsInRole(userId, 'admin') && (
        <UserMenuDropdown eventKey={3} title="Chat" id="admin-nav-dropdown">
          <LinkWrapper exact to="/admin/users">
            <UserLink eventKey={3.1} href="/admin/users">
              Users
            </UserLink>
          </LinkWrapper>
          <LinkWrapper exact to="/admin/users/settings">
            <UserLink eventKey={3.2} href="/admin/users/settings">
              User Settings
            </UserLink>
          </LinkWrapper>
        </UserMenuDropdown>
      )}
      <LinkWrapper to="/notifications">
        <UserLink eventKey={4} href="/notifications">
          Notifications
        </UserLink>
      </LinkWrapper>
      <LinkWrapper to="/orders">
        <UserLink eventKey={5} href="/orders">
          Orders
        </UserLink>
      </LinkWrapper>
    </MenuPanel>
    <MenuPanel pullRight>
      <LinkWrapper to="/cart">
        <UserLink eventKey={6} href="/cart">
          <IconCart className="icon ion-md-basket" />
        </UserLink>
      </LinkWrapper>
      <UserMenuDropdown
        eventKey={7}
        title={name}
        data-test="user-nav-dropdown"
        id="user-nav-dropdown"
      >
        <LinkWrapper to="/profile">
          <UserLink eventKey={7.1} href="/profile">
            Profile
          </UserLink>
        </LinkWrapper>
        <UserMenuItem eventKey={7.2} onClick={() => history.push('/logout')}>
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
