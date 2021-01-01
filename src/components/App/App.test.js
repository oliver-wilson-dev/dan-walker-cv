import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const render = () => shallow(<App />);
test('renders learn react link', () => {
  expect(render()).toMatchSnapshot();
});
