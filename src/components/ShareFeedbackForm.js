import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Rating from './Rating';
import PageWrapper from './PageWrapper';
import Link from './Link';
import { QUESTION_TYPES } from '../actions';
import ProfilePic from './ProfilePic';
import Box from './Box';
import ShareFeedbackFormControls from './ShareFeedbackFormControls';
import MultipleChoice from './MultipleChoice';
import TextInput from './TextInput';
import Meter from './Meter';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled.span`
  color: #acb1b6;
  font-size: 12px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 2.5em;
`;

const defaultValues = {
  [QUESTION_TYPES.MULTIPLE_CHOICE]: undefined,
  [QUESTION_TYPES.SCALE]: 5,
  [QUESTION_TYPES.TEXT]: ''
};

class ShareFeedbackForm extends Component {
  constructor(props) {
    super(props);
    const { questions } = this.props;
    const answers = questions.map(q => ({
      value: defaultValues[q.type]
    }));
    this.state = {
      questionIndex: 0,
      answers
    };
  }

  componentWillMount() {
    const { user, getUser } = this.props;
    if (!user.id) {
      getUser();
    }
  }

  isLastQuestion = () => {
    const { questionIndex } = this.state;
    const { questions } = this.props;
    return questionIndex >= questions.length - 1;
  };

  updateAnswer = value => {
    const { answers, questionIndex } = this.state;

    answers[questionIndex] = {
      ...answers[questionIndex],
      value
    };
    this.setState({
      answers: [...answers]
    });
  };

  renderQuestion = question => {
    const { value } = this.getAnswer();
    const { type, options } = question || this.getQuestion();
    switch (type) {
      case QUESTION_TYPES.MULTIPLE_CHOICE:
        return (
          <MultipleChoice didSelectItem={this.updateAnswer} selection={value} items={options} />
        );
      case QUESTION_TYPES.SCALE:
        return (
          <RatingWrapper>
            <Rating value={value} didSetRating={this.updateAnswer} />
          </RatingWrapper>
        );
      case QUESTION_TYPES.TEXT:
      default:
        return <TextInput value={value} onInput={this.updateAnswer} />;
    }
  };

  didCompleteQuestion = () => {
    const { type } = this.getQuestion();
    const { value } = this.getAnswer();
    switch (type) {
      case QUESTION_TYPES.MULTIPLE_CHOICE:
      case QUESTION_TYPES.SCALE:
        return value !== null && value !== undefined;
      case QUESTION_TYPES.TEXT:
        return !!(value && value.trim());
      default:
        return true;
    }
  };

  canGoNext = () => {
    if (this.isLastQuestion()) {
      return false;
    }
    return this.didCompleteQuestion();
  };

  canGoPrevious = () => {
    const { questionIndex } = this.state;
    return questionIndex > 0;
  };

  getQuestion = () => {
    const { questionIndex } = this.state;
    const { questions } = this.props;
    return questions[questionIndex] || {};
  };

  getAnswer = () => {
    const { questionIndex, answers } = this.state;
    return answers[questionIndex] || {};
  };

  goNext = () => {
    if (this.canGoNext()) {
      const { questionIndex, answers } = this.state;
      answers[questionIndex].skipped = false;
      this.setState({
        questionIndex: questionIndex + 1,
        answers: [...answers]
      });
    }
  };

  goPrevious = () => {
    if (this.canGoPrevious()) {
      const { questionIndex } = this.state;
      this.setState({
        questionIndex: questionIndex - 1
      });
    }
  };

  // Can't "skip" last question. Simply complete, and it'll be marked as skipped if needed.
  canSkip = () => this.getQuestion().skippable && !this.isLastQuestion();

  // This _skip does not increment to the next step, but simply marks the current one as skipped
  _skip = cb => {
    const { answers, questionIndex } = this.state;
    const { type } = this.getQuestion();
    answers[questionIndex] = {
      ...answers[questionIndex],
      skipped: true,
      value: defaultValues[type] // reset to default so we can go to previous steps (without saving the content)
    };
    this.setState(
      {
        answers: [...answers]
      },
      cb
    );
  };

  /* eslint-disable no-underscore-dangle */
  skip = () => {
    if (this.canSkip()) {
      this._skip(() => {
        const { questionIndex } = this.state;
        this.setState({
          questionIndex: questionIndex + 1
        });
      });
    }
  };
  /* eslint-enable no-underscore-dangle */

  // We have to explicitly check .skippable instead of canSkip() since we're essentially overriding
  canComplete = () =>
    this.isLastQuestion() && (this.didCompleteQuestion() || this.getQuestion().skippable);

  _complete = () => {
    const { answers } = this.state;
    const { complete, user } = this.props;
    complete(user.id, answers);
    this.setState({
      isCompleted: true
    });
  };

  /* eslint-disable no-underscore-dangle */
  complete = () => {
    if (this.canComplete()) {
      if (!this.didCompleteQuestion()) {
        // mark it as skipped
        this._skip(() => this._complete());
      } else {
        this._complete();
      }
    }
  };
  /* eslint-enable no-underscore-dangle */

  render() {
    const { questions, user } = this.props;
    const { questionIndex, isCompleted } = this.state;
    if (isCompleted) {
      return <Redirect to="/share-feedback" />;
    }
    const question = questions[questionIndex];
    const subheader = `Share your feedback for ${user.givenName} ${user.familyName}`;
    const Subheader = () => <Name>{subheader}</Name>;
    const percent = (100 * (questionIndex + 1)) / questions.length;
    return (
      <PageWrapper>
        <Link to="/share-feedback">&lt; Back</Link>
        <Header>
          <h1>{question.value}</h1>
          {user.id && <ProfilePic pic={user.profilePic} />}
        </Header>
        {user.id && <Subheader />}
        <Box>
          {this.renderQuestion(question)}
          <footer>
            <ShareFeedbackFormControls
              canComplete={this.canComplete}
              canGoNext={this.canGoNext}
              canGoPrevious={this.canGoPrevious}
              canSkip={this.canSkip}
              isLast={this.isLastQuestion}
              complete={this.complete}
              skip={this.skip}
              goNext={this.goNext}
              goPrevious={this.goPrevious}
            />
            <Meter percent={percent} />
          </footer>
        </Box>
      </PageWrapper>
    );
  }
}

ShareFeedbackForm.defaultProps = {
  user: {
    profilePic: ''
  }
};

ShareFeedbackForm.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      type: PropTypes.oneOf(Object.values(QUESTION_TYPES)).isRequired
    }).isRequired
  ).isRequired,
  user: PropTypes.shape({
    profilePic: PropTypes.string.isRequired
  }),
  getUser: PropTypes.func.isRequired,
  complete: PropTypes.func.isRequired
};

export default ShareFeedbackForm;
