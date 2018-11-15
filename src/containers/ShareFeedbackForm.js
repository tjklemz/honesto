import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ShareFeedbackForm from '../components/ShareFeedbackForm';
import { fetchColleagues, addFeedback } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  questions: state.questions,
  user: state.colleagues[ownProps.match.params.id]
});

const mapDispatchToProps = dispatch => ({
  // @TODO: optimize to only get the actual user
  getUser: () => dispatch(fetchColleagues()),
  complete: (userId, answers) => dispatch(addFeedback(userId, answers))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShareFeedbackForm)
);
