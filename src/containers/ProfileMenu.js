import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ProfileMenu from '../components/ProfileMenu';

const mapStateToProps = state => ({
  givenName: state.account.givenName,
  familyName: state.account.familyName,
  profilePic: state.account.profilePic
});

export default withRouter(connect(mapStateToProps)(ProfileMenu));
