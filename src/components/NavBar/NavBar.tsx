import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './NavBar.module.css';
import navMenus from '@/constants/navbar';
import pathName from '@/route/pathName';

function NavBar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <header
      className={`${styles.gnb} ${
        pathname === pathName.Introduction
          ? styles['gnb-Introduction']
          : styles['gnb-default']
      } `}
    >
      <div className={styles['header-content']}>
        <div>
          <button
            type="button"
            className={styles['nav-arrow']}
            onClick={() => navigate(-1)}
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => navigate(1)}
            className={styles['nav-arrow']}
          >
            →
          </button>
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
