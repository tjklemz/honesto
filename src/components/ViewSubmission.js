import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import PageWrapper from './PageWrapper';
import Box from './Box';
import Link from './Link';
import Feedback from './Feedback';

const Wrapper = styled(Box)`
  padding: 0;
`;

const ViewSubmission = ({ user, feedback, questions }) => {
  if (!feedback.length || !user) {
    return <Redirect to="/share-feedback" />;
  }
  const name = `${user.givenName} ${user.familyName}`;
  const heading = `Your Feedback for ${name}`;
  return (
    <PageWrapper>
      <Link to="/share-feedback">&lt; Back</Link>
      <h2>{heading}</h2>
      <Wrapper>
        <Feedback feedback={feedback} questions={questions} />
      </Wrapper>
    </PageWrapper>
  );
};

ViewSubmission.defaultProps = {
  user: null,
  questions: []
};

ViewSubmission.propTypes = {
  user: PropTypes.shape({
    givenName: PropTypes.string,
    familyName: PropTypes.string
  }),
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      skipped: PropTypes.bool
    }).isRequired
  ).isRequired,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string,
      type: PropTypes.string,
      skippable: PropTypes.bool,
      options: PropTypes.arrayOf(PropTypes.string)
    })
  )
};

export default ViewSubmission;
