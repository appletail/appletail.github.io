import { LuExternalLink } from 'react-icons/lu';
import { useState } from 'react';
import profileData from '@/constants/profile';
import styles from './Profile.module.css';
import Github from '@/assets/images/icons/Github.svg';
import Tistory from '@/assets/images/icons/Tistory.svg';
import ProfileCustomization from '@/components/ProfileCustomization/ProfileCustomization';
import ProfileEducation from '@/components/ProfileEducation/ProfileEducation';
import PictureModal from '@/components/PictureModal/PictureModal';
import ProfileCertificate from '@/components/ProfileCertificate/ProfileCertificate';
import ProfileAward from '@/components/ProfileAward/ProfileAward';
import ProfileSkill from '@/components/ProfileSkill/ProfileSkill';

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
      <PictureModal
        picture={modalPicture}
        isModalOn={isModalOn}
        setIsModalOn={setIsModalOn}
      />
    </div>
  );
}

export default Profile;
