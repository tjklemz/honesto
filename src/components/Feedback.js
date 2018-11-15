import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Rating from './Rating';
import { QUESTION_TYPES } from '../actions';

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  padding: 1.33em 1.66em;
  font-size: 16px;
  color: #031323;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & + & {
    border-top: 1px solid #d9dcde;
  }
  ${props =>
    props.text &&
    `
    flex-direction: column;
    align-items: start;
  `}
`;

const QuestionText = styled.p`
  margin: 0 1em 0 0;
  padding: 0;
  width: 50%;
  ${props => props.skipped && `color: #ADB1B5`}
`;

const Result = styled.div`
  width: 50%;
  margin-left: 1em;
  text-align: right;
  ${props =>
    props.text &&
    `
    text-align: left;
    margin-left: 0em;
    margin-top: 1em;
  `}
`;

const Label = styled.span`
  background: #acb1b6;
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border-radius: 3px;
  padding: 0.25em 0.75em;
  margin-top: 0.5em;
`;

const renderResult = (question, answer) => {
  if (answer.skipped) {
    return <Label>Skipped</Label>;
  }
  switch (question.type) {
    case QUESTION_TYPES.SCALE:
      return (
        <Result>
          <Rating varyColor itemSize={30} value={answer.value} readonly />
        </Result>
      );
    case QUESTION_TYPES.MULTIPLE_CHOICE:
    case QUESTION_TYPES.TEXT:
    default: {
      const value =
        question.options && question.options[answer.value]
          ? question.options[answer.value]
          : answer.value;
      return (
        <Result text={!!value}>
          <span>{value}</span>
        </Result>
      );
    }
  }
};

const Feedback = ({ feedback, questions }) => (
  <List>
    {questions.map((question, i) => {
      const isText = question.type !== QUESTION_TYPES.SCALE;
      if (!feedback[i]) {
        return null;
      }
      return (
        <Item key={question.id} text={isText}>
          <QuestionText skipped={feedback[i].skipped}>{question.value}</QuestionText>
          {renderResult(question, feedback[i])}
        </Item>
      );
    })}
  </List>
);

Feedback.propTypes = {
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
  ).isRequired
};

export default Feedback;
