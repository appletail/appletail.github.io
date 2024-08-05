import { LuExternalLink } from 'react-icons/lu';
import profileData from '@/constants/profile';
import styles from './Profile.module.css';
import Github from '@/assets/images/icons/GithubLogo.svg';
import Tistory from '@/assets/images/icons/Tistory.svg';
import ProfileCustomization from '@/components/ProfileCustomization/ProfileCustomization';

function Test({ props }: { props: string }) {
  return <div>{props}</div>;
}

function Profile() {
  const {
    profileImg,
    name,
    aboutMe,
    skills,
    educations,
    certificates,
    contact,
    awards,
  } = profileData;

  const skillComponent = skills.map((skill) => <Test props={skill} />);

  return (
    <div className={styles['about-me']}>
      <div className={styles['profile-background']}>
        <div className={styles.header}>
          <img
            src={profileImg}
            alt="profileImg"
            className={styles['profile-img']}
          />
          <div>
            <div className={styles.name}>{name}</div>
            <div>{aboutMe}</div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles['content-left']}>
            <ProfileCustomization
              header_name="교육 사항"
              Component={skillComponent}
            />
          </div>
          <div className={styles['content-right']}>
            <div className={styles.contact}>CONTACT</div>
            <div className={styles['contact-content']}>
              <div>{contact.phone}</div>
              <div>{contact.email}</div>
              <a href={contact.github} target="_blank" rel="noreferrer">
                <div className={styles['contact-detail']}>
                  <Github className={styles.icon} />
                  <span>Github</span>
                  <LuExternalLink className={styles['external-link']} />
                </div>
              </a>
              <a href={contact.blog} target="_blank" rel="noreferrer">
                <div className={styles['contact-detail']}>
                  <Tistory className={styles.icon} />
                  <span>Blog</span>
                  <LuExternalLink className={styles['external-link']} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
