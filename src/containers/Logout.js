import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import { logout } from '../actions';

class Logout extends Component {
  componentWillMount() {
    const { doLogout } = this.props;
    doLogout();
  }

  render() {
    return <Redirect to="/" />;
  }
}

Logout.propTypes = {
  doLogout: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  doLogout: () => dispatch(logout())
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Logout)
);
