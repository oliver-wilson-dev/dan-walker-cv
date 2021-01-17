import React from 'react';
import { shallow } from 'enzyme';
import LoadingSpinner from '../LoadingSpinner';
import App from './App';

jest.mock('react-router-dom', () => ({
  __esModule: true,
  BrowserRouter: ({ children }) => <>{children}</>,
  Route: ({ children }) => <>{children}</>,
  Switch: ({ children }) => <>{children}</>
}));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  Suspense: ({ children, fallback }) => (
    <>
      {fallback()}
      {children}
    </>
  ),
}));

jest.mock('../Navigation', () => {
  const Navigation = () => null;

  return Navigation;
});

jest.mock('../Fallback', () => {
  const Fallback = () => null;

  return Fallback;
});

jest.mock('../LoadingSpinner', () => {
  const LoadingSpinner = () => null;

  return LoadingSpinner;
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

jest.mock('../../helpers/lazyLoadComponent', () => ({ importFn }) => {
  importFn();
  const LazyLoadedComponent = () => null;

  return LazyLoadedComponent;
});

const render = () => shallow(<App />);

describe('App', () => {
  it('renders correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  it('should call the LoadingSpinner with the show prop set to false', () => {
    const wrapper = render();
    expect(wrapper.find(LoadingSpinner).props()).toEqual({ show: false });
  });
});
