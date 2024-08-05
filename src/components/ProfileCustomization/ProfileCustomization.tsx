import React, { ComponentType } from 'react';
import styles from './ProfileCustomization.module.css';

function ProfileCustomization({
  header_name,
  Component,
}: {
  header_name: string;
  Component: JSX.Element | JSX.Element[];
}) {
  return (
    <div className={styles['customization-area']}>
      <div className={styles.header}>{header_name}</div>
      <div className={styles.customization_block}>{Component}</div>
    </div>
  );
}

export default ProfileCustomization;
