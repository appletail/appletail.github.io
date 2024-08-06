import React from 'react';
import styles from './ProfileCertificate.module.css';

function ProfileCertificate({
  certificate,
  setModalPicture,
  setIsModalOn,
}: {
  certificate: {
    picture: string;
    date: string;
    content: string;
  };
  setModalPicture: React.Dispatch<React.SetStateAction<string>>;
  setIsModalOn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { date, content, picture } = certificate;
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
          aria-label="open certificate picture modal"
          role="button"
          tabIndex={0}
          className={styles.picture}
        >
          <img src={picture} alt={content} />
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.name}>{content}</div>
        <div>{date}</div>
      </div>
    </div>
  );
}

export default ProfileCertificate;
