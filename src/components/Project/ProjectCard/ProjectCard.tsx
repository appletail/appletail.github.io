import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';
import pathName from '@/route/pathName';

function ProjectCard({ project }: { project: Project }) {
  return (
    <div>
      <Link to={`${pathName.project}/${project.id}`}>
        <img
          className={`${styles.card} ${styles['card-size']}`}
          src={project.cardImg}
          alt={project.name}
        />
      </Link>
      <div className={styles['card-name']}>{project.name}</div>
    </div>
  );
}

export default ProjectCard;
