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
  ${(props) => (props.isBorder ? 'padding: 10px 0' : '')};
  &:hover,
  &:focus {
    background: ${SB_DARK_GREEN};
    padding: 0 !important;
  }

  a {
    color: ${SB_WHITE} !important;

    &:hover,
    &:focus {
      color: ${SB_WHITE} !important;
      font-size: 14px;
      padding: 0 !important;
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
    padding: ${(props) => (props.isBorder ? '0.4em 1em !important' : '1.2em 1.5em !important')};
    line-height: 30px !important;
    ${(props) => (props.isBorder ? `border: 2px solid ${SB_WHITE}; border-radius: 3px;` : '')};

    &:hover,
    &:focus {
      border: 0px;
      padding: 1.3em 1.5em !important
      background: ${SB_DARK_GREEN};
    }
  }
`;
