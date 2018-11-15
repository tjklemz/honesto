import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import PageWrapper from './PageWrapper';
import ProfileItem from './ProfileItem';

const ProfileListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75em 1.25em;
  border: 1px solid #d9dcde;
  & + & {
    border-top: none;
  }
`;

const ProfileList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ShareFeedback = ({ people }) => (
  <PageWrapper>
    <h1>Share Feedback</h1>
    <ProfileList>
      {people.map(p => (
        <ProfileListItem key={p.id}>
          <ProfileItem
            familyName={p.familyName}
            givenName={p.givenName}
            profilePic={p.profilePic}
          />
          {p.hasFeedback ? (
            <Button width={170} as={NavLink} to={`/share-feedback/${p.id}/view`} bland="true">
              View Submission
            </Button>
          ) : (
            <Button width={170} as={NavLink} to={`/share-feedback/${p.id}`}>
              Fill Out
            </Button>
          )}
        </ProfileListItem>
      ))}
    </ProfileList>
  </PageWrapper>
);

ShareFeedback.defaultProps = {
  people: []
};

ShareFeedback.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      familyName: PropTypes.string.isRequired,
      givenName: PropTypes.string.isRequired,
      profilePic: PropTypes.string.isRequired
    }).isRequired
  )
};

export default ShareFeedback;
