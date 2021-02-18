/*
  eslint-disable
  import/no-unresolved,
  jsx-a11y/click-events-have-key-events,
  jsx-a11y/no-static-element-interactions
*/
import React, { useEffect } from 'react';
import cn from 'classnames';

import styles from './LoadingSpinner.module.css';
import Page from '../Page';
import scrollToTop from '../../helpers/scrollToTop';

const onClick = (e) => {
  e.stopPropagation();
};

const LoadingSpinner = ({ show }) => {
  useEffect(() => {
    if (show) {
      scrollToTop();
    }
  }, [show]);

  return (
    <>
      <Page className={cn({
        [styles.loadingPage]: show
      })}
      />
      <div
        className={cn(styles.wrapper,
          {
            [styles.wrapperShow]: show,
            [styles.wrapperHide]: !show
          })}
        onClick={onClick}
      />
      <div className={cn(styles.loadingSpinner,
        {
          [styles.loadingSpinnerShow]: show,
          [styles.loadingSpinnerHide]: !show
        })}
      />
    </>
  );
};

export default LoadingSpinner;
