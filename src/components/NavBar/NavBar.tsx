import { MutableRefObject } from 'react';
import styles from './NavBar.module.css';
import navMenuNames from '@/constants/navbar';
import useComponentObserver from '@/hooks/useComponentObserver';

function NavBar({
  introductionRef,
}: {
  introductionRef: MutableRefObject<HTMLElement | null>;
}) {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.05,
  };

  const introductionIntersect = useComponentObserver(introductionRef, options);

  return (
    <header
      className={`${styles.gnb} ${
        introductionIntersect
          ? styles['gnb-before-scroll']
          : styles['gnb-after-scroll']
      } `}
    >
      <div className={styles['header-content']}>
        <div>logo</div>
        <ul className={styles['nav-layout']}>
          {navMenuNames.map((navMenuName) => (
            <li key={navMenuName.id}>{navMenuName.menuName}</li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
