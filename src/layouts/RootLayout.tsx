import { Outlet } from 'react-router-dom';
import NavBar from '@/components/NavBar/NavBar';
import styles from '@/layouts/RootLayout.module.css';

function RootLayout() {
  return (
    <div className={styles['root-layout']}>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default RootLayout;
