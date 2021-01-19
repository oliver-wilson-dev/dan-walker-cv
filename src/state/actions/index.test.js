import { cookiesAccepted } from '.';
import { COOKIES_ACCEPTED } from '../actionTypes';

describe('cookiesAccepted', () => {
  it('should return an object with the type property LEARN_MORE_CLICKED', () => {
    const mockDispatch = jest.fn();
    cookiesAccepted()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith({ type: COOKIES_ACCEPTED });
  });
});
