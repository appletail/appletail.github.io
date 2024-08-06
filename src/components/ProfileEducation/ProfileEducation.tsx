import React from 'react';
import styles from './ProfileEducation.module.css';

function ProfileEducation({
  education,
  setModalPicture,
  setIsModalOn,
}: {
  education: {
    period: string;
    content: string;
    picture?: string;
  };
  setModalPicture: React.Dispatch<React.SetStateAction<string>>;
  setIsModalOn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { period, content, picture } = education;
  const setPictureModal = () => {
    setIsModalOn(true);
    setModalPicture(picture as string);
  };
  return (
    <div className={styles['profile-block']}>
      {picture && (
        <div
          onClick={setPictureModal}
          onKeyDown={(e) => {
            if (e.key === 'Enter') setPictureModal();
          }}
          aria-label="open education picture modal"
          role="button"
          tabIndex={0}
          className={styles.picture}
        >
          <img src={picture} alt={content} />
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.name}>{content}</div>
        <div>{period}</div>
      </div>
    </div>
  );
}

export default ProfileEducation;
