import { COOKIES_ACCEPTED } from '../actionTypes';

const defaultState = {
  message: 'hello world',
  cookiesAccepted: false
};

const reducer = (state = defaultState, action) => {
  const { type: actionType } = action;

  switch (actionType) {
    case COOKIES_ACCEPTED:
      return {
        ...state,
        cookiesAccepted: true
      };
    default:
      return { ...state };
  }
};

export { defaultState };
export default reducer;
