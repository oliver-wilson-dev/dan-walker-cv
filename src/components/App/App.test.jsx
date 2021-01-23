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

jest.mock('../Footer', () => {
  const Footer = () => <footer />;

  return Footer;
});

jest.mock('../../containers/CookieDisclaimer', () => {
  const CookieDisclaimer = () => null;

  return CookieDisclaimer;
});

jest.mock('../../helpers/lazyLoadComponent', () => ({ importFn }) => {
  importFn();
  const LazyLoadedComponent = () => null;

  return LazyLoadedComponent;
});

const HomePage = () => null;
const AboutPage = () => null;
const ContactPage = () => null;

jest.mock('../../routes', () => ({
  home: {
    component: HomePage,
    route: 'test-home-route'
  },
  about: {
    component: AboutPage,
    route: 'test-about-route'
  },
  contact: {
    component: ContactPage,
    route: 'test-contact-route'
  }
}));

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
