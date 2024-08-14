import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from './NavBar.module.css';
import navMenus from '@/constants/navbar';

function NavBar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <header className={styles.gnb}>
      <div className={styles['header-content']}>
        <div className={styles['nav-arrow-container']}>
          <FaArrowLeft
            type="button"
            className={styles['nav-arrow']}
            onClick={() => navigate(-1)}
            aria-label="previous page"
          />
          <FaArrowRight
            type="button"
            onClick={() => navigate(1)}
            className={styles['nav-arrow']}
            aria-label="next page"
          />
        </div>
        <div className={styles['nav-layout']}>
          {navMenus.map((navMenu) => (
            <NavLink
              to={navMenu.to}
              key={navMenu.id}
              className={({ isActive }) =>
                isActive ? styles['nav-item-active'] : styles['nav-item']
              }
            >
              {navMenu.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}

export default NavBar;
