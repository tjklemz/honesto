import { combineReducers } from 'redux';
import shareFeedback from './share-feedback';
import myFeedback from './my-feedback';
import colleagues from './colleagues';
import account from './account';
import questions from './questions';

export default combineReducers({
  shareFeedback,
  myFeedback,
  account,
  colleagues,
  questions
});
