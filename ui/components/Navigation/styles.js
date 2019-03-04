import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';

export const NavBar = styled(Navbar)`
  min-height: 65px;
  line-height: 60px;
  background-color: #00b37e;
  color: #ffffff;
  box-shadow: -7px -1px 19px 1px grey;
`;
export const LogoImage = styled.img`
  width: 120px;
  max-height: 45px;
  display: block;
  @media (max-width: 380px) {
    display: none !important;
  }
`;
export const LogoImageMobile = styled.img`
  width: 20px;
  max-height: 33px;
  display: none !important;
  @media (max-width: 380px) {
    display: block !important;
  }
`;
export const SearchViaWeb = styled.div`
  display: block;
  float: left;
  width: 45%;
  @media (max-width: 380px) {
    display: none !important;
  }
`;
export const SearchViaMobile = styled.div`
  display: none !important;
  float: left;
  width: 65%;
  @media (max-width: 380px) {
    display: block !important;
  }
`;
