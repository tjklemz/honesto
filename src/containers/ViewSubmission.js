import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ViewSubmission from '../components/ViewSubmission';

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const { feedback } = state.shareFeedback[id] || { feedback: [] };
  return {
    user: state.colleagues[id],
    feedback,
    questions: state.questions
  };
};

const mapDispatchToProps = () => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ViewSubmission)
);
