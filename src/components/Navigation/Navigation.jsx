import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navigation.module.css';

const Navigation = () => (
  <nav className={styles.navigation}>
    <ul className={styles.navItems}>
      <li className={styles.navItem}>
        <Link className={styles.link} to="/">Home</Link>
      </li>
      <li className={styles.navItem}>
        <Link className={styles.link} to="/about">About</Link>
      </li>
      <li className={styles.navItem}>
        <Link className={styles.link} to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
