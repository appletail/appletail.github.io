import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';
import pathName from '@/route/pathName';

function ProjectCard({ project }: { project: Project }) {
  return (
    <div>
      <Link to={`${pathName.project}/${project.id}`}>
        <img className={styles.card} src={project.cardImg} alt={project.name} />
      </Link>
      <div style={{ textAlign: 'center' }}>{project.name}</div>
    </div>
  );
}

export default ProjectCard;
