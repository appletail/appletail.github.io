import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import styles from './Introduction.module.css';
import useComponentObserver from '@/hooks/useComponentObserver';
import introduceTexts from '@/constants/introduction';

function Introduction() {
  const { introductionRef } = useOutletContext<{
    introductionRef: MutableRefObject<null>;
  }>();
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
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

  const [observeCnt, setObserveCnt] = useState(1);

  useEffect(() => {
    const cnt = observers.reduce((count, observer) => {
      if (observer) {
        return count + 1;
      }
      return count;
    }, 0);
    setObserveCnt(cnt);
  }, [text1Observer, text2Observer, text3Observer, text4Observer]);

  return (
    <div id="introduction" ref={introductionRef}>
      <div className={styles['introduction-container']}>
        {introduceTexts(2.5, 11, 5, 20).map((text, idx) => (
          <div className={styles.sticky} ref={refs[idx]} key={text.id}>
            <div className={styles['text-container']}>
              <div
                style={text.style}
                className={
                  observeCnt >= idx + 1 || observeCnt === 0
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
