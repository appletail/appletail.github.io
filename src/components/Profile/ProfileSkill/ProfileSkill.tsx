import React from 'react';
import styles from './ProfileSkill.module.css';

function ProfileSkill({
  skills,
}: {
  skills: {
    name: string;
    svg: React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & {
        title?: string;
      }
    >;
  }[];
}) {
  return (
    <div className={styles['icon-container']}>
      {skills.map((skill) => {
        const Icon = skill.svg;
        return <Icon className={styles.icon} key={skill.name} />;
      })}
    </div>
  );
}

export default ProfileSkill;
