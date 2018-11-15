import { QUESTION_TYPES } from '../actions';

// @TODO: fetch questions from a store, or somehow allow configuring
const questions = [
  {
    id: '63e4ed7d-ed01-4edc-b7e5-10ad73618087',
    value: 'How much do you trust this person to deliver high quality work?',
    type: QUESTION_TYPES.SCALE,
    skippable: false
  },
  {
    id: '195e5e4c-436c-44f8-982c-cb951ffd91d1',
    value: 'Is this person up to date with the latest accounting regulations?',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    skippable: false,
    options: [
      'Not fully. You should work on trying to stay more up to date with regulations.',
      'Yes, you are reasonably up to date with new regulations.',
      'Yes, you are the one I look up to when I need information about new regulations.'
    ]
  },
  {
    id: 'c42ffc3b-68ea-4677-bcca-3447451c3680',
    value: 'How well does this person understand the technical domain of our product?',
    type: QUESTION_TYPES.SCALE,
    skippable: false
  },
  {
    id: '016d46b5-65b8-4503-ad82-a4f5218603e1',
    value:
      'Have there been any situations where this person could have managed their emotions better? What happened?',
    type: QUESTION_TYPES.TEXT,
    skippable: true
  },
  {
    id: '458660e9-c197-4ae6-ba63-6b880f8a6235',
    value: 'Does this person care about our users and treats customer support as a high priority?',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    skippable: false,
    options: [
      'Not always - you should work on this aspect.',
      'Yes, you go out of our way to help our users and improve their experience.',
      'Yes, your understanding of our users and the empathy you demonstrate is second to none.'
    ]
  },
  {
    id: '1943513d-ecae-4293-bf06-f1a293be6bb6',
    value:
      'What would you like this person to work on the most during the next month, to enable their continued growth?',
    type: QUESTION_TYPES.TEXT,
    skippable: false
  },
  {
    id: '6a5ce68d-7cc5-427c-8a82-9e87f0470de8',
    value: "How transparent and clear are this person's plans and work tasks?",
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    skippable: false,
    options: [
      'I frequently do not know what you are working on, please work with me to raise visibility.',
      'I almost always know what you are working on, but not always the details or next steps, only the outcomes you are after.',
      'Your plans are clear and readily available to those around you, and I always know what the next step is.'
    ]
  },
  {
    id: '9d60ec51-3336-4117-86f3-fc35498b6481',
    value: 'How well does this person understand our business goals and roadmap?',
    type: QUESTION_TYPES.SCALE,
    skippable: false
  },
  {
    id: 'e952d903-484b-4939-a518-5986d5b5d22e',
    value: "Is there anything else you'd like to share with this person?",
    type: QUESTION_TYPES.TEXT,
    skippable: true
  }
];

const questionsReducer = (state = questions) => state;

export default questionsReducer;
