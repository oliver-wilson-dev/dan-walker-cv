import React from 'react';
import { shallow } from 'enzyme';
import TopNav from './TopNav';

jest.mock('../../../routes', () => ({
  home: {
    route: 'test-home-route'
  },
  about: {
    route: 'test-about-route'
  },
  contact: {
    route: 'test-contact-route'
  }
}));

jest.mock('react-router-dom', () => ({
  NavLink: ({ children }) => <>{children}</>
}));

const render = () => shallow(<TopNav />);

it('renders correctly', () => {
  expect(render()).toMatchSnapshot();
});
