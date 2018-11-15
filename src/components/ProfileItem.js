import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProfilePic from './ProfilePic';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Name = styled.span`
  margin-left: 1em;
  font-size: 20px;
  color: #59636e;
`;

const ProfileItem = ({ familyName, givenName, profilePic }) => {
  const name = `${givenName} ${familyName}`;
  return (
    <Wrapper>
      <ProfilePic pic={profilePic} />
      <Name>{name}</Name>
    </Wrapper>
  );
};

ProfileItem.propTypes = {
  familyName: PropTypes.string.isRequired,
  givenName: PropTypes.string.isRequired,
  profilePic: PropTypes.string.isRequired
};

export default ProfileItem;
