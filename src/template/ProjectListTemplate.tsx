import styles from '@/template/ProjectListTemplate.module.css';
import ProjectListTitle from '@/components/ProjectListTitle/ProjectListTitle';
import ProjectCard from '@/components/ProjectCard/ProjectCard';

interface Template {
  titleName: string;
  titleCnt: number;
  collections: Project[];
}

function ProjectListTemplate({ titleName, titleCnt, collections }: Template) {
  return (
    <div className={styles['project-list']}>
      <ProjectListTitle name={titleName} count={titleCnt} />
      <div className={styles['card-container']}>
        {collections.map((collection) => (
          <ProjectCard key={collection.id} project={collection} />
        ))}
      </div>
    </div>
  );
}

export default ProjectListTemplate;
