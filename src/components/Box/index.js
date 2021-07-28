import React from 'react';
import styles from './styles';

export default function Box({ children, style, ...props }) {
  console.log(style)
  return (
    <div style={{ ...styles.wrapper, ...style }} {...props}>
      {children}
    </div>
  );
}
