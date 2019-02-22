/* eslint-disable jsx-a11y/no-href */

import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

// New Sidebeep
import HomePage from '../../pages/HomePage';
import Campaign from '../../pages/Campaign';
import CampaignDetail from '../../pages/Campaign/CampaignDetail';
import Category from '../../pages/Category';
import Orgs from '../../pages/Orgs';
import ViewOrg from '../../pages/ViewOrg';
import Products from '../../pages/Products';
import ViewProduct from '../../pages/ViewProduct';
import EditProduct from '../../pages/EditProduct';
import Favorites from '../../pages/Favorites';
import Notifications from '../../pages/Notifications';
import Cart from '../../pages/Cart';
import Orders from '../../pages/Orders';

import Guide from '../../pages/Guide';
import FixFlexGuide from '../../pages/Guide/FixFlexGuide';
import Signup from '../../pages/Signup';
import Login from '../../pages/Login';
import ForgotPassword from '../../pages/ForgotPassword';

// Pup
import Navigation from '../../components/Navigation';

import Authenticated from '../../components/Authenticated';
import Authorized from '../../components/Authorized';
import Public from '../../components/Public';

// import Index from '../../pages/Index';

import Documents from '../../pages/Documents';
import ViewDocument from '../../pages/ViewDocument';
import EditDocument from '../../pages/EditDocument';

import Profile from '../../pages/Profile';
import Logout from '../../pages/Logout';

import VerifyEmail from '../../pages/VerifyEmail';
// import RecoverPassword from '../../pages/RecoverPassword';
import ResetPassword from '../../pages/ResetPassword';

import AdminUsers from '../../pages/AdminUsers';
import AdminUser from '../../pages/AdminUser';
import AdminUserSettings from '../../pages/AdminUserSettings';

import NotFound from '../../pages/NotFound';
import Footer from '../../components/Footer';

import Terms from '../../pages/Terms';
import Privacy from '../../pages/Privacy';
import ExamplePage from '../../pages/ExamplePage';

import VerifyEmailAlert from '../../components/VerifyEmailAlert';
import GDPRConsentModal from '../../components/GDPRConsentModal';

import withTrackerSsr from '../../../modules/withTrackerSsr';
import getUserName from '../../../modules/getUserName';

import Styles from './styles';

class App extends React.Component {
  state = { ready: false, afterLoginPath: null };

  componentDidMount() {
    this.setPageReady();
  }

  setPageReady = () => {
    this.setState({ ready: true });
  };

  setAfterLoginPath = (afterLoginPath) => {
    this.setState({ afterLoginPath });
  };

  render() {
    const { props, state, setAfterLoginPath } = this;
    return (
      <Styles.App ready={this.state.ready} loading={props.loading}>
        {props.authenticated && <GDPRConsentModal userId={props.userId} />}
        <Navigation {...props} {...state} />
        <Styles.GridWrapper authenticated={props.authenticated}>
          <Switch>
            {/* New Sidebeep */}
            <Route exact name="welcome" path="/" component={HomePage} />
            <Route name="category" path="/category" component={Category} />
            <Route name="Orgs" path="/orgs" component={Orgs} />
            <Route exact path="/org/:_id" component={ViewOrg} />
            <Route name="Products" path="/products" component={Products} />
            <Public path="/product/:_id" component={ViewProduct} isValidate {...props} {...state} />
            <Route name="campaign" path="/campaign" component={Campaign} />
            <Route name="campaignDetail" path="/campaign/:id" component={CampaignDetail} />
            <Route name="forgot-password" path="/forgot-password" component={ForgotPassword} />
            <Public path="/signup" component={Signup} {...props} {...state} />
            <Public path="/login" component={Login} {...props} {...state} />
            <Public path="/guide" component={Guide} {...props} {...state} />
            <Public path="/guide/fix-and-flex" component={FixFlexGuide} {...props} {...state} />
            <Authenticated
              exact
              path="/products/:_id/edit"
              component={EditProduct}
              setAfterLoginPath={setAfterLoginPath}
              {...props}
              {...state}
            />
            <Authenticated
              exact
              path="/favorites"
              component={Favorites}
              setAfterLoginPath={setAfterLoginPath}
              {...props}
              {...state}
            />
            <Authenticated
              exact
              path="/notifications"
              component={Notifications}
              setAfterLoginPath={setAfterLoginPath}
              {...props}
              {...state}
            />
            <Authenticated
              exact
              path="/orders"
              component={Orders}
              setAfterLoginPath={setAfterLoginPath}
              {...props}
              {...state}
            />
            <Authenticated
              exact
              path="/cart"
              component={Cart}
              setAfterLoginPath={setAfterLoginPath}
              {...props}
              {...state}
            />

            {/* Pup */}
            <Authenticated
              exact
              path="/documents"
              component={Documents}
              setAfterLoginPath={setAfterLoginPath}
              {...props}
              {...state}
            />
            <Route exact path="/documents/:_id" component={ViewDocument} />
            <Authenticated
              exact
              path="/documents/:_id/edit"
              component={EditDocument}
              setAfterLoginPath={setAfterLoginPath}
              {...props}
              {...state}
            />
            <Authenticated
              exact
              path="/profile"
              component={Profile}
              setAfterLoginPath={setAfterLoginPath}
              {...props}
              {...state}
            />
            <Route
              path="/logout"
              render={(routeProps) => (
                <Logout {...routeProps} setAfterLoginPath={setAfterLoginPath} />
              )}
              {...props}
              {...state}
            />

            <Route name="verify-email" path="/verify-email/:token" component={VerifyEmail} />
            {/* <Route name="recover-password" path="/recover-password" component={RecoverPassword} /> */}
            <Route name="reset-password" path="/reset-password/:token" component={ResetPassword} />

            <Route name="terms" path="/terms" component={Terms} />
            <Route name="privacy" path="/privacy" component={Privacy} />
            <Route name="examplePage" path="/example-page" component={ExamplePage} />

            <Authorized
              exact
              allowedRoles={['admin']}
              path="/admin/users"
              pathAfterFailure="/"
              component={AdminUsers}
              setAfterLoginPath={setAfterLoginPath}
              {...props}
              {...state}
            />
            <Authorized
              exact
              allowedRoles={['admin']}
              path="/admin/users/settings"
              pathAfterFailure="/"
              component={AdminUserSettings}
              setAfterLoginPath={setAfterLoginPath}
              {...props}
              {...state}
            />
            <Authorized
              exact
              allowedRoles={['admin']}
              path="/admin/users/:_id"
              pathAfterFailure="/"
              component={AdminUser}
              setAfterLoginPath={setAfterLoginPath}
              {...props}
              {...state}
            />

            <Route component={NotFound} />
          </Switch>
          {props.authenticated && (
            <VerifyEmailAlert
              userId={props.userId}
              emailVerified={props.emailVerified}
              emailAddress={props.emailAddress}
            />
          )}
        </Styles.GridWrapper>
        <Footer />
      </Styles.App>
    );
  }
}

App.defaultProps = {
  loading: true,
  userId: '',
  emailAddress: '',
  emailVerified: false,
  authenticated: false,
};

App.propTypes = {
  loading: PropTypes.bool,
  userId: PropTypes.string,
  emailAddress: PropTypes.string,
  emailVerified: PropTypes.bool,
  authenticated: PropTypes.bool,
};

export default withTrackerSsr(() => {
  const app = Meteor.subscribe('app');
  const loggingIn = Meteor.loggingIn();
  const user = Meteor.user();
  const userId = Meteor.userId();
  const loading = !app.ready() && !Roles.subscription.ready();
  const name = user && user.profile && user.profile.name && getUserName(user.profile.name);
  const emailAddress = user && user.emails && user.emails[0].address;

  return {
    loading,
    loggingIn,
    authenticated: !loggingIn && !!userId,
    name: name || emailAddress,
    roles: Roles.getRolesForUser(userId),
    userId,
    emailAddress,
    emailVerified: user && user.emails ? user.emails[0] && user.emails[0].verified : true,
  };
})(App);
