import React, { useCallback, useEffect, useState } from 'react';
import remarkGfm from 'remark-gfm';
import Markdown from 'react-markdown';
import styles from './ProjectDetailTemplate.module.css';
import ProjectImageCarousel from '@/components/Project/ProjectImageCarousel/ProjectImageCarousel';
import ProjectSummary from '@/components/Project/ProjectSummary/ProjectSummary';
import Line from '@/components/Line/Line';
import PictureModal from '@/components/PictureModal/PictureModal';
import Github from '@/assets/images/icons/Github.svg';
import Figma from '@/assets/images/icons/Figma.svg';

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
  const [isModalOn, setIsModalOn] = useState(false);
  const [modalPicture, setModalPicture] = useState('');

  const setPictureModal = useCallback((picture: string) => {
    setIsModalOn(true);
    setModalPicture(picture as string);
  }, []);

  const img = (props) => {
    const [imageSrc, setImageSrc] = useState('');

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

    return (
      <button
        onClick={() => setPictureModal(imageSrc)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') setPictureModal(imageSrc);
        }}
        type="button"
        aria-label="open picture modal"
        tabIndex={0}
      >
        <img
          src={imageSrc}
          style={{ width: '100%' }}
          alt={props.node.properties.alt}
        />
      </button>
    );
  };

  const h2 = (props) => (
    <h2>
      {props.children}
      <Line color="#3A6D89" />
    </h2>
  );

  const a = (props) => (
    <a href={props.href} target="_blank" rel="noreferrer">
      {props.children === 'github' ? (
        <Github />
      ) : props.children === 'figma' ? (
        <Figma />
      ) : (
        <span>{props.children}</span>
      )}
    </a>
  );

  return (
    <div className={styles['detail-container']}>
      <div className={styles.name}>{projectName}</div>
      <div className={styles.hightlight}>
        <div className={styles['project-image-carusel']}>
          <ProjectImageCarousel
            images={images}
            setModalPicture={setModalPicture}
            setIsModalOn={setIsModalOn}
          />
        </div>
        <div className={styles['project-summary']}>
          <ProjectSummary
            header_image={projectSummary.header_image}
            description={projectSummary.description}
            member={projectSummary.member}
            period={projectSummary.period}
            stacks={projectSummary.stacks}
            platform={projectSummary.platform}
          />
        </div>
      </div>
      <Markdown
        components={{ img, h2, a }}
        className={styles.markdown}
        remarkPlugins={[remarkGfm]}
      >
        {markdown}
      </Markdown>
      <PictureModal
        picture={modalPicture}
        isModalOn={isModalOn}
        setIsModalOn={setIsModalOn}
      />
    </div>
  );
}

export default ProjectDetailTemplate;
