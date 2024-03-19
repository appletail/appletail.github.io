import { useEffect, useState, Fragment } from 'react';
import styles from '@/pages/Project/ProjectList/ProjectList.module.css';
import projects from '@/constants/project';
import ProjectListTitle from '@/components/ProjectListTitle/ProjectListTitle';
import ProjectCard from '@/components/ProjectCard/ProjectCard';

function ProjectList() {
  const [projectLength, setProjectLength] = useState(0);
  useEffect(() => {
    setProjectLength(projects.reduce((acc, el) => acc + el.length, 0));
  }, []);

  return (
    <div className={styles['project-list']}>
      <ProjectListTitle name="전체" count={projectLength} />
      <div className={styles['card-list']}>
        {projects.map((collections) => (
          <Fragment key={collections[0].category}>
            {collections.map((collection) => (
              <ProjectCard key={collection.id} project={collection} />
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
