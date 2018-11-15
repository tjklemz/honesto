import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SiteBackground from '../components/SiteBackground';

const mapStateToProps = state => ({
  isAuthenticated: !!state.account.id
});

export default withRouter(connect(mapStateToProps)(SiteBackground));
