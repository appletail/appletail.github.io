import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import projects from '@/constants/projectList';
import ProjectListTemplate from '@/template/ProjectListTemplate';

function ProjectList() {
  const [project, setProject] = useState<Project[]>([]);
  const [titleName, setTitleName] = useState('전체 프로젝트');
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const sort = searchParams.get('sort')?.toUpperCase();
    if (sort === 'WEB PROJECT' || sort === 'OTHERS') {
      setTitleName(sort);
      setProject(
        projects.reduce(
          (acc, projectGroup) =>
            projectGroup[0].category === sort ? [...acc, ...projectGroup] : acc,
          []
        )
      );
    } else {
      setTitleName('전체 프로젝트');
      setProject(
        projects.reduce((acc, projectGroup) => [...acc, ...projectGroup], [])
      );
    }
  }, [searchParams]);

  return (
    <ProjectListTemplate
      titleName={titleName}
      collections={project}
      titleCnt={project.length}
    />
  );
}

export default ProjectList;
