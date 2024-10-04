import React from 'react';
import styles from './styles.module.scss';

const LogoGrid = ({ children }) => {
  return <div className={styles.logoGrid}>{children}</div>;
};

export default LogoGrid;
