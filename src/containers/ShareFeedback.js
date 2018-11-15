import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import ShareFeedback from '../components/ShareFeedback';
import { fetchColleagues } from '../actions';

const mapStateToProps = state => ({
  people: Object.values(state.colleagues).map(p => ({
    ...p,
    hasFeedback: !!state.shareFeedback[p.id]
  }))
});

const mapDispatchToProps = dispatch => ({
  getPeople: () => dispatch(fetchColleagues())
});

class ShareFeedbackPage extends Component {
  componentWillMount() {
    const { getPeople } = this.props;
    getPeople();
  }

  render() {
    const { people } = this.props;
    if (!people) {
      // @TODO: show loader or placeholder
      return null;
    }
    return <ShareFeedback people={people} />;
  }
}

ShareFeedbackPage.propTypes = {
  getPeople: PropTypes.func.isRequired,
  /* eslint-disable-next-line */
  people: PropTypes.array.isRequired
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShareFeedbackPage)
);
