import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
/* eslint-disable-next-line */
import pics from '../assets/*.png';

const Pic = styled.img`
  border-radius: 50%;
  width: 58px;
  height: 58px;
  flex-shrink: 0;
`;

const ProfilePic = ({ pic }) => <Pic src={pics[pic] || pic} />;

ProfilePic.propTypes = {
  pic: PropTypes.string.isRequired
};
export default ProfilePic;
