import { Outlet } from 'react-router-dom';
import styles from '@/layouts/ProjcetLayout.module.css';
import SideBar from '@/components/SideBar/SideBar';

function ProjectLayout() {
  return (
    <div>
      <div className={styles.background} />
      <div className={styles['side-bar']}>
        <SideBar />
      </div>
      <div className={styles['outlet-container']}>
        <div className={styles.projects}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ProjectLayout;
