import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, type = 'button', className, onClickFn }) => {
  return (
    <button type={type} className={styles[className]} onClick={onClickFn}>
      {children}
    </button>
  );
};

export default Button;
