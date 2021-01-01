import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const render = () => shallow(<App />);
it('renders correctly', () => {
  expect(render()).toMatchSnapshot();
});
