import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const Public = ({
  loggingIn,
  authenticated,
  afterLoginPath,
  isValidate,
  component,
  path,
  exact,
  ...rest
}) => (
  <Route
    path={path}
    exact={exact}
    render={(props) => {
      if (!authenticated || isValidate) {
        return React.createElement(component, {
          ...props,
          ...rest,
          loggingIn,
          authenticated,
        });
      }
      return <Redirect to={afterLoginPath || '/'} />;
    }}
  />
);

Public.defaultProps = {
  loggingIn: false,
  isValidate: false,
  path: '',
  exact: false,
  afterLoginPath: null,
};

Public.propTypes = {
  loggingIn: PropTypes.bool,
  isValidate: PropTypes.bool,
  authenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  afterLoginPath: PropTypes.string,
  path: PropTypes.string,
  exact: PropTypes.bool,
};

export default Public;
