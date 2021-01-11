import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

jest.mock('react-router-dom', () => ({
  Link: ({ children }) => <>{children}</>
}));

const render = () => shallow(<Navigation />);

it('renders correctly', () => {
  expect(render()).toMatchSnapshot();
});
