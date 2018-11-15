/*
myFeedback is similar in structure to shareFeedback but also contains the date
received:

{
  'user-id-who-gave-me-feedback': {
    dateReceived: 'some timestamp',
    read: true/false,
    feedback: [
      // answers to questions
    ]
  },
  'other-user-id-who-gave-feedback': {
    dateReceived: 'some timestamp',
    read: true/false,
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
        value: 3,
        skipped: false
      },
      {
        value: 1,
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
        value: 1,
        skipped: false
      },
      {
        value: 'This is some feedback that I wrote.',
        skipped: false
      },
      {
        value: 1,
        skipped: false
      },
      {
        value: 5,
        skipped: false
      },
      {
        value: 'Some more feedback',
        skipped: false
      }
    ]
  },
  '8382733f-8290-4065-abee-6b9e92fc114c': {
    feedback: [
      {
        value: 4,
        skipped: false
      },
      {
        value: 1,
        skipped: false
      },
      {
        value: 10,
        skipped: false
      },
      {
        value: 'Yo, this is some feedback that I have for you.',
        skipped: false
      },
      {
        value: 2,
        skipped: false
      },
      {
        value: 'This is some feedback that I wrote.',
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
        value: 'Some more feedback',
        skipped: false
      }
    ]
  }
};

const myFeedback = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default myFeedback;
