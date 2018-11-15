import React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Login from '../containers/Login';
import Logout from '../containers/Logout';
import PrivateRoute from '../containers/PrivateRoute';

import SiteHeader from '../containers/SiteHeader';
import SiteBackground from '../containers/SiteBackground';
import SiteMenu from './SiteMenu';
import SiteFooter from './SiteFooter';
import Logotype from './Logotype';
import ProfileMenu from '../containers/ProfileMenu';
import ShareFeedback from '../containers/ShareFeedback';
import ShareFeedbackForm from '../containers/ShareFeedbackForm';
import ViewSubmission from '../containers/ViewSubmission';
import MyFeedback from '../containers/MyFeedback';

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const App = () => (
  <Router>
    <SiteBackground>
      <SiteHeader>
        <h1>Honesto</h1>
        <Navigation>
          <SiteMenu />
          <ProfileMenu />
        </Navigation>
      </SiteHeader>
      <Route exact path="/" render={() => <Redirect to="/share-feedback" />} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <PrivateRoute exact path="/share-feedback" component={ShareFeedback} />
      <PrivateRoute exact path="/share-feedback/:id" component={ShareFeedbackForm} />
      <PrivateRoute exact path="/share-feedback/:id/view" component={ViewSubmission} />
      <PrivateRoute path="/my-feedback" component={MyFeedback} />
      <SiteFooter>
        <Logotype />
        <p>Copyright &copy; 2018 Theorem, LLC. All Rights Reserved</p>
      </SiteFooter>
    </SiteBackground>
  </Router>
);

export default hot(module)(App);
