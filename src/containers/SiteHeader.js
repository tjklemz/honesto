import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SiteHeader from '../components/SiteHeader';

const mapStateToProps = state => ({
  isAuthenticated: !!state.account.id
});

export default withRouter(connect(mapStateToProps)(SiteHeader));
