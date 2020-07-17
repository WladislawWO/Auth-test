import { ADD_USER_DATA, SET_STEP } from '@/services/actions/accounts';

const initState = {
  currentUser: {
    email: '',
    password: '',
    sex: '',
    date: '',
    rumors: '',
  },
  step: 1,
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_USER_DATA:
      return {
        ...state,
        currentUser: { ...state.currentUser, ...payload },
      };
    case SET_STEP:
      return {
        ...state,
        step: payload,
      };
    default:
      return state;
  }
};
