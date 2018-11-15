import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import MyFeedback from '../components/MyFeedback';
import { fetchColleagues } from '../actions';

const mapStateToProps = state => ({
  people: Object.values(state.colleagues).filter(p => !!state.myFeedback[p.id]),
  myFeedback: state.myFeedback,
  questions: state.questions
});

const mapDispatchToProps = dispatch => ({
  getPeople: () => dispatch(fetchColleagues())
});

class MyFeedbackPage extends Component {
  componentWillMount() {
    const { getPeople } = this.props;
    getPeople();
  }

  render() {
    const { people, myFeedback, questions } = this.props;
    if (!people) {
      // @TODO: show loader or placeholder
      return null;
    }
    return <MyFeedback people={people} myFeedback={myFeedback} questions={questions} />;
  }
}

MyFeedbackPage.propTypes = {
  getPeople: PropTypes.func.isRequired,
  /* eslint-disable-next-line */
  people: PropTypes.array.isRequired,
  /* eslint-disable-next-line */
  myFeedback: PropTypes.object.isRequired,
  /* eslint-disable-next-line */
  questions: PropTypes.array.isRequired
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MyFeedbackPage)
);
