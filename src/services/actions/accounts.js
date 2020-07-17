/* eslint-disable import/prefer-default-export */
export const ADD_USER_DATA = 'ADD_USER_DATA';
export const SET_STEP = 'SET_STEP';
export const GO_BACK = 'GO_BACK';

export const setData = (payload) => ({ type: ADD_USER_DATA, payload });
export const setStep = (payload) => ({ type: SET_STEP, payload });

export const setUserData = (payload) => (dispatch, getState) => {
  delete payload.confirmpsw;
  dispatch(setStep(getState().account.step + 1));
  dispatch(setData(payload));
};
