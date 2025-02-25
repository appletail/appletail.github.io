import { LuExternalLink } from 'react-icons/lu';
import { useState } from 'react';
import profileData from '@/constants/profile';
import styles from './Profile.module.css';
import Github from '@/assets/images/icons/Github.svg';
import Tistory from '@/assets/images/icons/Tistory.svg';
import ProfileCustomization from '@/components/Profile/ProfileCustomization/ProfileCustomization';
import ProfileEducation from '@/components/Profile/ProfileEducation/ProfileEducation';
import PictureModal from '@/components/PictureModal/PictureModal';
import ProfileCertificate from '@/components/Profile/ProfileCertificate/ProfileCertificate';
import ProfileAward from '@/components/Profile/ProfileAward/ProfileAward';
import ProfileSkill from '@/components/Profile/ProfileSkill/ProfileSkill';

function Profile() {
  const {
    profileImg,
    name,
    selfIntroduction,
    skills,
    educations,
    certificates,
    contact,
    awards,
  } = profileData;

  const [modalPicture, setModalPicture] = useState('');
  const [isModalOn, setIsModalOn] = useState(false);

  const educationComponent = educations.map((education) => (
    <ProfileEducation
      setModalPicture={setModalPicture}
      setIsModalOn={setIsModalOn}
      key={education.content}
      education={education}
    />
  ));

  const certificateComponent = certificates.map((certificate) => (
    <ProfileCertificate
      setModalPicture={setModalPicture}
      setIsModalOn={setIsModalOn}
      key={certificate.content}
      certificate={certificate}
    />
  ));

  const awardComponent = awards.map((award) => (
    <ProfileAward
      setModalPicture={setModalPicture}
      setIsModalOn={setIsModalOn}
      key={award.name}
      award={award}
    />
  ));

  return (
    <div className={styles['about-me']}>
      <div
        className={`${styles['profile-background']} ${styles['profile-size']}`}
      >
        <div className={styles.header}>
          <div className={styles['profile-mobile']}>
            <img
              src={profileImg}
              alt="profileImg"
              className={styles['profile-img']}
            />
            <div className={styles['contact-mobile']}>
              <div>
                <div className={styles.contact}>CONTACT</div>
                <div className={styles['contact-content']}>
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
          <div>
            <div className={styles.name}>{name}</div>
            <div className={styles['self-introduction']}>
              {selfIntroduction}
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles['content-left']}>
            <ProfileCustomization
              header_name="기술 스택"
              component={<ProfileSkill skills={skills} />}
            />
            <ProfileCustomization
              header_name="교육 정보"
              component={educationComponent}
            />
            <ProfileCustomization
              header_name="자격 사항"
              component={certificateComponent}
            />
            <ProfileCustomization
              header_name="수상 내역"
              component={awardComponent}
            />
          </div>
          <div className={styles['contact-desktop']}>
            <div className={styles['contact-box']}>
              <div className={styles.contact}>CONTACT</div>
              <div className={styles['contact-content']}>
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
      <PictureModal
        picture={modalPicture}
        isModalOn={isModalOn}
        setIsModalOn={setIsModalOn}
      />
    </div>
  );
}

export default Profile;
