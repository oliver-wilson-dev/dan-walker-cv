import React from 'react';
import { shallow, mount } from 'enzyme';
import LoadingSpinner from './LoadingSpinner';
import styles from './LoadingSpinner.module.css';
import scrollToTop from '../../helpers/scrollToTop';

jest.mock('../../helpers/scrollToTop');

const defaultProps = {
  show: true
};

const render = (props = {}) => shallow(<LoadingSpinner {...defaultProps} {...props} />);

describe('LoadingSpinner', () => {
  describe('when show is true and then set to false', () => {
    it('should call scroll to top only once', () => {
      const wrapper = mount(<LoadingSpinner show />);

      wrapper.setProps({ show: false });

      expect(scrollToTop).toHaveBeenCalledTimes(1);
    });
  });

  describe('when clicking on the overlay', () => {
    it('should stop the event propagation', () => {
      const stopPropagation = jest.fn();
      render().find(`.${styles.wrapper}`).simulate('click', { stopPropagation });

      expect(stopPropagation).toHaveBeenCalledWith();
    });
  });

  describe('when the component should show', () => {
    it('renders correctly', () => {
      expect(render()).toMatchSnapshot();
    });
  });

  describe('when the component should not show', () => {
    it('renders correctly', () => {
      expect(render()).toMatchSnapshot();
    });
  });
});
