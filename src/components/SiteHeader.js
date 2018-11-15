import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.header`
  background: #f2f3f4;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  padding: 0 2em 0 10em;
  height: 80px;
  font-family: sans-serif;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const SiteHeader = ({ isAuthenticated, children, ...rest }) =>
  isAuthenticated ? <Header {...rest}>{children}</Header> : null;

SiteHeader.defaultProps = {
  isAuthenticated: false
};

SiteHeader.propTypes = {
  isAuthenticated: PropTypes.bool
};

export default SiteHeader;
