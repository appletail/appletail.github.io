import React from 'react';
import styles from './ProfileCustomization.module.css';

function ProfileCustomization({
  header_name,
  component,
}: {
  header_name: string;
  component: JSX.Element | JSX.Element[];
}) {
  return (
    <div className={styles['customization-area']}>
      <div className={styles.header}>{header_name}</div>
      <div className={styles.customization_block}>{component}</div>
    </div>
  );
}

export default ProfileCustomization;
