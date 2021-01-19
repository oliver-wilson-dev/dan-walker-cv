/* eslint-disable import/prefer-default-export */
import { COOKIES_ACCEPTED } from '../actionTypes';

export const cookiesAccepted = () => (dispatch) => dispatch({ type: COOKIES_ACCEPTED });
