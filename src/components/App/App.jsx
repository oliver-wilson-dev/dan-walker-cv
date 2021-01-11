import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation';
import HomePage from '../HomePage';
import AboutPage from '../AboutPage';
import ContactPage from '../ContactPage';
import Footer from '../Footer';

import styles from './App.module.css';

const App = () => (
  <Router>
    <div className={styles.App}>
      <Navigation />
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
      <Footer />
    </div>
  </Router>
);

export default App;
