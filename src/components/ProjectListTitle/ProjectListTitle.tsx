import React from 'react';
import styles from '@/components/ProjectListTitle/ProjectListTitle.module.css';

function ProjectListTitle({ name, count }: { name: string; count: number }) {
  return (
    <div className={styles.title}>
      <span>{name}</span>
      <span className={styles['list-count']}>{`(${count})`}</span>
      <hr className={styles.line} />
    </div>
  );
}

export default ProjectListTitle;
