import React, { useEffect, useState } from 'react';
import remarkGfm from 'remark-gfm';
import Markdown from 'react-markdown';
import styles from './ProjectDetailTemplate.module.css';
import ProjectImageCarousel from '@/components/ProjectImageCarousel/ProjectImageCarousel';
import ProjectSummary from '@/components/ProjectSummary/ProjectSummary';
import Line from '@/components/Line/Line';

function ProjectDetailTemplate({
  projectName,
  images,
  projectSummary,
  markdown,
}: {
  projectName: string;
  images: string[];
  projectSummary: ProjectSummary;
  markdown: string;
}) {
  const [imageSrc, setImageSrc] = useState('');

  const img = (props) => {
    useEffect(() => {
      (() =>
        import(`@/assets/projects/${projectName}/${props.src}`)
          .then((imgSrc) => {
            setImageSrc(imgSrc.default);
          })
          .catch(() => {
            setImageSrc('');
          }))();
    }, [projectName]);

    return <img src={imageSrc} alt={projectName} />;
  };

  const h2 = (props) => (
    <h2>
      {props.children}
      <Line color="#3A6D89" />
    </h2>
  );

  const a = (props) => (
    <a href={props.href} target="_blank" rel="noreferrer">
      {props.href}
    </a>
  );

  return (
    <div className={styles['detail-container']}>
      <div className={styles.name}>{projectName}</div>
      <div className={styles.hightlight}>
        <ProjectImageCarousel images={images} />
        <ProjectSummary
          description={projectSummary.description}
          member={projectSummary.member}
          period={projectSummary.period}
          stacks={projectSummary.stacks}
          platform={projectSummary.platform}
        />
      </div>
      <Markdown
        components={{ img, h2, a }}
        className={styles.markdown}
        remarkPlugins={[remarkGfm]}
      >
        {markdown}
      </Markdown>
    </div>
  );
}

export default ProjectDetailTemplate;
