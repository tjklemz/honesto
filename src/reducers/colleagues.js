import * as Actions from '../actions';

const colleagues = (state = {}, action) => {
  switch (action.type) {
    case Actions.FETCH_COLLEAGUES_SUCCESS:
      return {
        ...action.colleagues
      };
    case Actions.FETCH_COLLEAGUES_FAILURE:
    default:
      return state;
  }
};

export default colleagues;
