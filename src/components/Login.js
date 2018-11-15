import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Redirect } from 'react-router';

import AppLogo from './Logo';
import Button from './Button';

const LoginCard = styled.div`
  background: white;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  width: 380px;
  margin: 2em auto;
  padding: 3em 4em 4.5em;
  text-align: center;
  position: relative;
  top: -2em;
`;

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const Line = styled.hr`
  height: 1px;
  color: #d9dcde;
  background-color: #d9dcde;
  border: none;
  margin: 2.5em 2.4em 2em;
`;

const Login = ({ location, isAuthenticated, login }) => {
  const { from } = location.state;
  if (isAuthenticated) {
    return <Redirect to={from} />;
  }
  return (
    <LoginWrapper>
      <LoginCard>
        <AppLogo />
        <h2>Honesto</h2>
        <Line />
        <Button onClick={login}>Login with Google</Button>
      </LoginCard>
    </LoginWrapper>
  );
};

Login.defaultProps = {
  location: {
    state: {
      from: {
        pathname: '/'
      }
    }
  }
};

Login.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.shape({
        pathname: PropTypes.string
      })
    })
  }),
  isAuthenticated: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired
};

export default Login;
