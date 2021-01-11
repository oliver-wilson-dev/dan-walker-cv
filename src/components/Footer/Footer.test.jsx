import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

const render = () => shallow(<Footer />);

it('renders correctly', () => {
  expect(render()).toMatchSnapshot();
});
