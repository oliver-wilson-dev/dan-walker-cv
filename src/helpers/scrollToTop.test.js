import scrollToTop from './scrollToTop';

describe('scrollToTop', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when the user had not scrolled before opening the modal', () => {
    it('should scroll the user to the scrollY position', () => {
      scrollToTop();

      expect(window.scrollTo.mock.calls[0]).toEqual([0, 0]);
    });
  });
});
