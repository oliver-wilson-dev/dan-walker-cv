import React from 'react';
import { render } from 'react-dom';
import App from '../components/App';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  StrictMode: ({ children }) => children,
}));

jest.mock('react-dom');

jest.mock('../components/App', () => {
  const App = () => null;

  return App;
});

describe('clientEntry', () => {
  it('should render correctly', () => {
    require('./index');

    expect(render).toHaveBeenCalledWith(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      global.document.getElementById('root')
    );
  });
});
