import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import SearchNavigation from '../SearchNavigation';
import PublicNavigation from '../PublicNavigation';
import AuthenticatedNavigation from '../AuthenticatedNavigation';
import { NavBar, LogoImage, LogoImageMobile, SearchViaWeb, SearchViaMobile } from './styles';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }
  onSearch = (event) => {
    console.log('event', event.target.value);
    const { history } = this.props;
    console.log('history', history);
    this.setState({ search: event.target.value });
    history.push('/products');
  };
  render() {
    const navProps = this.props;
    return (
      <NavBar collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <LogoImage src="/img/sidebeep-logo-horizontal.png" alt="logoHorizontal" />
              <LogoImageMobile src="/img/logogram-sidebeep-white.png" alt="logo" />
            </Link>
          </Navbar.Brand>
          <SearchViaMobile>
            <SearchNavigation
              placeholder="Search users..."
              value={this.state.search}
              onChange={this.onSearch}
            />
          </SearchViaMobile>
          <Navbar.Toggle />
        </Navbar.Header>
        <SearchViaWeb>
          <SearchNavigation
            placeholder="Search users..."
            value={this.state.search}
            onChange={(event) => this.setState({ search: event.target.value })}
          />
        </SearchViaWeb>
        <Navbar.Collapse>
          {!this.props.authenticated ? (
            <PublicNavigation />
          ) : (
            <AuthenticatedNavigation {...navProps} />
          )}
        </Navbar.Collapse>
      </NavBar>
    );
  }
}

Navigation.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
};

export default Navigation;
