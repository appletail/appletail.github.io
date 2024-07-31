import React from 'react';
import styles from './Line.module.css';

function Line({ color }: { color: string }) {
  return (
    <hr
      className={styles.line}
      style={{ background: `linear-gradient(to right, ${color}, transparent)` }}
    />
  );
}

export default Line;
