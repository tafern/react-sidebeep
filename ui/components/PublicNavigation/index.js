import React from 'react';
import { MenuPanel, LinkWrapper, GuestLink } from './styles';

const PublicNavigation = () => (
  <MenuPanel pullRight>
    <LinkWrapper to="/guide">
      <GuestLink eventKey={1} href="/guide">
        How to
      </GuestLink>
    </LinkWrapper>
    <LinkWrapper to="/login">
      <GuestLink eventKey={2} href="/login">
        Log In
      </GuestLink>
    </LinkWrapper>
    <LinkWrapper to="/signup">
      <GuestLink eventKey={3} href="/signup">
        Sign Up
      </GuestLink>
    </LinkWrapper>
  </MenuPanel>
);

export default PublicNavigation;
