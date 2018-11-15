import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from './Link';
import ProfilePic from './ProfilePic';

const Wrapper = styled.div`
  display: flex;
  border-left: 1px solid #d9dcde;
  height: 100%;
  align-items: center;
  padding-left: 2em;
`;

const Name = styled.p`
  font-size: 16px;
  color: #031323;
  margin: 0;
`;

const Info = styled.div`
  margin-left: 1.25em;
  margin-right: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProfileMenu = ({ familyName, givenName, profilePic }) => (
  <Wrapper>
    <ProfilePic pic={profilePic} />
    <Info>
      <Name>{`${givenName} ${familyName}`}</Name>
      <Link to="/logout">Logout</Link>
    </Info>
  </Wrapper>
);

ProfileMenu.propTypes = {
  familyName: PropTypes.string.isRequired,
  givenName: PropTypes.string.isRequired,
  profilePic: PropTypes.string.isRequired
};

export default ProfileMenu;
