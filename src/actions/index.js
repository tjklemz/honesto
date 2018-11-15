export const QUESTION_TYPES = {
  SCALE: 'scale',
  MULTIPLE_CHOICE: 'multiple-choice',
  TEXT: 'text'
};

const users = {
  'a4ea4c1c-e249-426f-b941-912e0a0eaabc': {
    id: 'a4ea4c1c-e249-426f-b941-912e0a0eaabc',
    familyName: 'Smith',
    givenName: 'Jane',
    profilePic: 'jane-smith'
  },
  '47b8a649-5a72-4eb8-87a8-d0b79bd65775': {
    id: '47b8a649-5a72-4eb8-87a8-d0b79bd65775',
    familyName: 'Johnson',
    givenName: 'Chris',
    profilePic: 'chris-johnson'
  },
  '8382733f-8290-4065-abee-6b9e92fc114c': {
    id: '8382733f-8290-4065-abee-6b9e92fc114c',
    familyName: 'Perez',
    givenName: 'Nico',
    profilePic: 'nico-perez'
  },
  'dab2b3f6-b536-4ee5-a6ac-8264fc3826bd': {
    id: 'dab2b3f6-b536-4ee5-a6ac-8264fc3826bd',
    familyName: 'Moon',
    givenName: 'Nathaniel',
    profilePic: 'nathaniel-moon'
  },
  '22509cea-ec36-44f5-88a6-189d583653a3': {
    id: '22509cea-ec36-44f5-88a6-189d583653a3',
    familyName: 'Denison',
    givenName: 'Denis',
    profilePic: 'denis-denison'
  },
  'eac2a224-5a3a-4636-82d1-2402b0aa7c27': {
    id: 'eac2a224-5a3a-4636-82d1-2402b0aa7c27',
    familyName: 'Carter',
    givenName: 'Paul',
    profilePic: 'paul-carter'
  }
};

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const loginSuccess = account => ({
  type: LOGIN_SUCCESS,
  account
});

export const logout = () => ({
  type: LOGOUT
});

export const login = () => dispatch => {
  // @TODO: fetch user account from actual source (do a real login)
  const dummyAccount = {
    id: 'a4ea4c1c-e249-426f-b941-912e0a0eaabc',
    familyName: 'Smith',
    givenName: 'Jane',
    profilePic: 'jane-smith'
  };
  dispatch(loginSuccess(dummyAccount));
};

export const FETCH_COLLEAGUES_FAILURE = 'FETCH_COLLEAGUES_FAILURE';
export const FETCH_COLLEAGUES_SUCCESS = 'FETCH_COLLEAGUES_SUCCESS';

export const fetchColleaguesSuccess = colleagues => ({
  type: FETCH_COLLEAGUES_SUCCESS,
  colleagues
});

export const fetchColleagues = () => (dispatch, getState) => {
  // @TODO: fetch users/colleagues from actual source
  const { id: me } = getState().account;
  const colleagues = {
    ...users
  };
  delete colleagues[me];
  dispatch(fetchColleaguesSuccess(colleagues));
};

export const ADD_FEEDBACK = 'ADD_FEEDBACK';

export const addFeedback = (userId, answers) => ({
  type: ADD_FEEDBACK,
  userId,
  answers
});
