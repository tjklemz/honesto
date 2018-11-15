import * as Actions from '../actions';

const initialState = {};

const account = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.account
      };
    case Actions.LOGIN_FAILURE:
    case Actions.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default account;
