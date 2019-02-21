import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
// import SearchNavigation from '../SearchNavigation';
import PublicNavigation from '../PublicNavigation';
import AuthenticatedNavigation from '../AuthenticatedNavigation';
import { NavBar, LogoImage } from './styles';

const Navigation = (props) => (
  <NavBar collapseOnSelect fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          <LogoImage src="/img/sidebeep-logo-horizontal.png" alt="logo" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    {/* <SearchNavigation /> */}
    <Navbar.Collapse>
      {!props.authenticated ? <PublicNavigation /> : <AuthenticatedNavigation {...props} />}
    </Navbar.Collapse>
  </NavBar>
);

Navigation.defaultProps = {
  name: '',
};

Navigation.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  name: PropTypes.string,
};

export default Navigation;
