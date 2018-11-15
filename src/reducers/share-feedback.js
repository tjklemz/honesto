import { ADD_FEEDBACK } from '../actions';

/*
shareFeedback state is keyed by user id and directly reflects the question
answers (skipped questions still show up but are marked as "skipped")

{
  'the-user-id': {
    feedback: [
      {
        // answer to question 1
      },
      {
        // answer to question 2
      },
      // ...
    ],
  }
  'another-user-id: {
    feedback: [
      // ...
    ]
  }
}
*/

const defaultState = {
  '47b8a649-5a72-4eb8-87a8-d0b79bd65775': {
    feedback: [
      {
        value: 9,
        skipped: false
      },
      {
        value: 2,
        skipped: false
      },
      {
        value: 9,
        skipped: false
      },
      {
        value: '',
        skipped: true
      },
      {
        value: 2,
        skipped: false
      },
      {
        value: 'bob',
        skipped: false
      },
      {
        value: 1,
        skipped: false
      },
      {
        value: 2,
        skipped: false
      },
      {
        value: '',
        skipped: true
      }
    ]
  }
};

const shareFeedback = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_FEEDBACK:
      return {
        ...state,
        [action.userId]: {
          feedback: [...action.answers]
        }
      };
    default:
      return state;
  }
};

export default shareFeedback;
