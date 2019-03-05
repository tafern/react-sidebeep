import styled from 'styled-components';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { SB_DARK_GREEN, SB_WHITE, SB_GREEN } from '../../../modules/styleConstants';

export const MenuPanel = styled(Nav)`
  width: auto;
  white-space: nowrap;
`;
export const LinkWrapper = styled(LinkContainer)`
  font-size: 14px;
  background-color: ${SB_GREEN};
  &:hover,
  &:focus {
    background-color: ${SB_DARK_GREEN} !important;
  }

  a {
    color: ${SB_WHITE} !important;

    &:hover,
    &:focus {
      color: ${SB_WHITE} !important;
      font-size: 14px;
      background-color: ${SB_DARK_GREEN} !important;
    }
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;
export const UserLink = styled(NavItem)`
  color: ${SB_WHITE};
  a {
    color: white !important;
    padding: 17px 15px;
    // padding: 1.2em 1.5em !important;
    line-height: 30px !important;

    &:hover,
    &:focus {
      background: ${SB_DARK_GREEN};
      padding: 17px 15px;
    }
  }
`;
export const UserMenuDropdown = styled(NavDropdown)`
  color: ${SB_WHITE};
  a {
    color: white !important;
    // padding: 1.2em 1.5em !important;
    line-height: 30px !important;

    &:hover,
    &:focus {
      background-color: ${SB_DARK_GREEN};
    }
  }
`;
export const UserMenuItem = styled(MenuItem)`
  color: ${SB_WHITE};
  a {
    color: white !important;
    // padding: 1.2em 1.5em !important;
    line-height: 30px !important;
    background-color: ${SB_GREEN};

    &:hover,
    &:focus {
      background-color: ${SB_DARK_GREEN} !important;
    }
  }
`;
export const IconNavbar = styled.i`
  color: ${SB_WHITE};
  font-size: 22px;
  top: 5px;
`;
