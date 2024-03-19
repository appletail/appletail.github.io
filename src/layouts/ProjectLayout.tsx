import { Outlet } from 'react-router-dom';
import styles from '@/layouts/ProjcetLayout.module.css';
import SideBar from '@/components/SideBar/SideBar';

function ProjectLayout() {
  return (
    <div>
      <SideBar />
      <div className={styles['outlet-container']}>
        <div className={styles.background} />
        <div className={styles.projects}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ProjectLayout;
