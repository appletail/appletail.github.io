import { useState, useEffect } from 'react';
import styles from './NavBar.module.css';
import navMenuNames from '@/constants/navbar';

function NavBar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navColorFlag, setNavColorFlag] = useState(false);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition < 100) {
      setNavColorFlag(false);
    } else {
      setNavColorFlag(true);
    }
  }, [scrollPosition]);

  return (
    <header className={styles.gnb}>
      <div
        className={`${styles['header-content']} ${
          navColorFlag
            ? styles['header-content-after-scroll']
            : styles['header-content-before-scroll']
        } `}
      >
        <div>logo</div>
        <ul className={styles['nav-layout']}>
          {navMenuNames.map((navMenuName) => (
            <li id={navMenuName.id}>{navMenuName.menuName}</li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
