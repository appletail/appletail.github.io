import React, { MutableRefObject } from 'react';
import { useOutletContext } from 'react-router-dom';
import styles from './Introduction.module.css';

function Introduction() {
  const { introductionRef } = useOutletContext<{
    introductionRef: MutableRefObject<null>;
  }>();
  return (
    <div id="introduction" ref={introductionRef}>
      <div className={styles['introduction-container']}>
        <div className={styles.sticky}>
          <div className={styles['text-container']}>
            <div className={styles.text1}>원리를 궁금해하는</div>
          </div>
        </div>
        <div className={styles.sticky}>
          <div className={styles['text-container']}>
            <div className={styles.text2}>사용자를 우선시하는</div>
          </div>
        </div>
        <div className={styles.sticky}>
          <div className={styles['text-container']}>
            <div className={styles.text3}>FRONT-END</div>
          </div>
        </div>
        <div className={styles.sticky}>
          <div className={styles['text-container']}>
            <div className={styles.text4}>SHIM JAE WON</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
