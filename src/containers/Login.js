import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Login from '../components/Login';
import { login } from '../actions';

const mapStateToProps = state => ({
  isAuthenticated: !!state.account.id
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
