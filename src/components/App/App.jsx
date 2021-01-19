import React, { Suspense, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation';
import Footer from '../Footer';
import LoadingSpinner from '../LoadingSpinner';

import useLazyLoadComponent from '../../helpers/lazyLoadComponent';

import styles from './App.module.css';
import Fallback from '../Fallback';
import CookieDisclaimer from '../../containers/CookieDisclaimer';

const HomePage = useLazyLoadComponent({ importFn: () => import(/* webpackChunkName: "HomePage" */'../HomePage') });
const AboutPage = useLazyLoadComponent({ importFn: () => import(/* webpackChunkName: "AboutPage" */'../AboutPage') });
const ContactPage = useLazyLoadComponent({ importFn: () => import(/* webpackChunkName: "ContactPage" */'../ContactPage') });

const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className={styles.App}>
      <Router>
        <Navigation />
        <LoadingSpinner show={loading} />
        <Suspense fallback={<Fallback setLoading={setLoading} />}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
          </Switch>
        </Suspense>
        <CookieDisclaimer />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
