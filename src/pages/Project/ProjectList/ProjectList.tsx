import React, { useEffect, useState } from 'react';
import styles from '@/pages/Project/ProjectList/ProjectList.module.css';
import projects from '@/constants/project';

function ProjectList() {
  const [projectLength, setProjectLength] = useState(0);
  useEffect(() => {
    setProjectLength(projects.reduce((acc, el) => acc + el.length, 0));
  }, []);

  return (
    <div className={styles['project-list']}>
      <div className={styles.title}>
        <span>전체</span>
        <span className={styles['list-count']}>{`(${projectLength})`}</span>
        <hr className={styles.line} />
      </div>
    </div>
  );
}

export default ProjectList;
