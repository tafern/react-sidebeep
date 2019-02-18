import styled from 'styled-components';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { SB_WHITE, SB_DARK_GREEN } from '../../../modules/styleConstants';

export const MenuPanel = styled(Nav)`
  width: auto;
  white-space: nowrap;
`;
export const LinkWrapper = styled(LinkContainer)`
  font-size: 14px;
  &:hover,
  &:focus {
    background: ${SB_DARK_GREEN};
  }

  a {
    color: ${SB_WHITE} !important;

    &:hover,
    &:focus {
      color: ${SB_WHITE} !important;
      font-size: 14px;
    }
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;
export const GuestLink = styled(NavItem)`
  color: ${SB_WHITE};
  a {
    color: white !important;
    padding: 1.2em 1.5em !important;
    line-height: 30px !important;

    &:hover,
    &:focus {
      background: ${SB_DARK_GREEN};
    }
  }
`;
