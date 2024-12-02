import { useRef } from 'react';
import styles from './Introduction.module.css';
import useComponentObserver from '@/hooks/useComponentObserver';
import introduceTexts from '@/constants/introduction';

function Introduction() {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7,
  };

  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const text4Ref = useRef(null);
  const refs = [text1Ref, text2Ref, text3Ref, text4Ref];
  const text1Observer = useComponentObserver(text1Ref, options);
  const text2Observer = useComponentObserver(text2Ref, options);
  const text3Observer = useComponentObserver(text3Ref, options);
  const text4Observer = useComponentObserver(text4Ref, options);
  const observers = [
    text1Observer,
    text2Observer,
    text3Observer,
    text4Observer,
  ];

  return (
    <div id="introduction">
      <div className={styles['introduction-container']}>
        {introduceTexts.map((text, idx) => (
          <div className={styles.sticky} ref={refs[idx]} key={text.id}>
            <div className={styles['text-container']}>
              <div
                className={
                  observers[idx]
                    ? styles['text-fade-in']
                    : styles['text-fade-out']
                }
              >
                {text.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Introduction;
