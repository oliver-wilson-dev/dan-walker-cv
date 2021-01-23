import React, { Suspense, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation';
import Footer from '../Footer';
import LoadingSpinner from '../LoadingSpinner';

import styles from './App.module.css';
import Fallback from '../Fallback';
import CookieDisclaimer from '../../containers/CookieDisclaimer';
import routes from '../../routes';

const { home, about, contact } = routes;

const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className={styles.App}>
      <Router>
        <Navigation />
        <LoadingSpinner show={loading} />
        <Suspense fallback={<Fallback setLoading={setLoading} />}>
          <Switch>
            <Route exact path={home.route}>
              <home.component />
            </Route>
            <Route path={about.route}>
              <about.component />
            </Route>
            <Route path={contact.route}>
              <contact.component />
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
