import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContainer}>
      <div className={styles.textContainer}>
        <span className={styles.footerDisclaimerText}>
          This site doesn&apos;t use cookies... yet.
        </span>
        <div className={styles.footerDisclaimerText}>
          Icons made by
          {' '}
          <a className={styles.link} href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
          {' '}
          from
          {' '}
          <a className={styles.link} href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </div>
        <span className={styles.footerDisclaimerText}>
          The code for this website can be found on
          {' '}
          <a className={styles.link} href="https://github.com/oliver-wilson-dev/website-template" target="_blank" rel="noopener noreferrer">github</a>
          .
        </span>
        <span className={styles.footerDisclaimerText}>©2021, Oliver Wilson</span>
      </div>
    </div>
  </footer>
);

export default Footer;
