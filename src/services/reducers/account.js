import { setUserData, setStep } from '@/services/actions/accounts';

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
    case setUserData.toString():
      return {
        ...state,
        currentUser: { ...state.currentUser, ...payload },
        step: state.step + 1,
      };
    case setStep.toString():
      return {
        ...state,
        step: payload,
      };
    default:
      return state;
  }
};
