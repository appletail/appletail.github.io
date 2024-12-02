import React from 'react';
import styles from './ProjectSummary.module.css';

function ProjectSummary({
  header_image,
  description,
  period,
  member,
  platform,
  stacks,
}: ProjectSummary) {
  return (
    <div className={styles['project-summary']}>
      <img
        className={styles['header-image']}
        src={header_image}
        alt="header_image"
      />
      <div className={styles.description}>{description}</div>
      <div className={styles['subtitle-container']}>
        <div className={styles.subtitle}>
          <div className={styles['subtitle-name']}>개발 기간</div>
          <div className={styles['subtitle-content']}>{period}</div>
        </div>
        <div className={styles.subtitle}>
          <div className={styles['subtitle-name']}>개발 인원</div>
          <div className={styles['subtitle-content']}>{member}</div>
        </div>
        <div className={styles.subtitle}>
          <div className={styles['subtitle-name']}>플랫폼</div>
          <div className={styles['subtitle-content']}>{platform}</div>
        </div>
      </div>
      <div>
        <div className={styles['stack-name']}>스택</div>
        <div className={styles['stack-container']}>
          {stacks.map((stack) => (
            <div className={styles.stack} key={stack}>
              {stack}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectSummary;
