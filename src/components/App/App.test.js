import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

jest.mock('react-router-dom', () => ({
  __esModule: true,
  BrowserRouter: ({ children }) => <>{children}</>,
  Route: ({ children }) => <>{children}</>,
  Switch: ({ children }) => <>{children}</>
}));

jest.mock('../Navigation', () => {
  const Navigation = () => null;

  return Navigation;
});

jest.mock('../HomePage', () => {
  const HomePage = () => null;

  return HomePage;
});

jest.mock('../AboutPage', () => {
  const AboutPage = () => null;

  return AboutPage;
});

jest.mock('../ContactPage', () => {
  const ContactPage = () => null;

  return ContactPage;
});

jest.mock('../Footer', () => {
  const Footer = () => <footer />;

  return Footer;
});

const render = () => shallow(<App />);

it('renders correctly', () => {
  expect(render()).toMatchSnapshot();
});
