import React, { Suspense, useState } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Navigation from '../Navigation';
import Footer from '../Footer';
import LoadingSpinner from '../LoadingSpinner';
import Switch from '../Switch';

import styles from './App.module.css';
import Fallback from '../Fallback';
import CookieDisclaimer from '../../containers/CookieDisclaimer';
import ErrorBoundary from '../ErrorBoundary';

const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className={styles.App}>
      <Router>
        <Navigation />
        <LoadingSpinner show={loading} />
        <Suspense fallback={<Fallback setLoading={setLoading} />}>
          <ErrorBoundary>
            <Switch />
          </ErrorBoundary>
        </Suspense>
        <CookieDisclaimer />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
