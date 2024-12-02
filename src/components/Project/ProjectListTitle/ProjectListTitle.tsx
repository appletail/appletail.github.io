import React from 'react';
import styles from './ProjectListTitle.module.css';
import Line from '../../Line/Line';

function ProjectListTitle({ name, count }: { name: string; count: number }) {
  return (
    <div className={styles.title}>
      <span>{name}</span>
      <span className={styles['list-count']}>{`(${count})`}</span>
      <Line color="#4e555f" />
    </div>
  );
}

export default ProjectListTitle;
