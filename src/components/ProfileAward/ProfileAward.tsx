import React from 'react';
import styles from './ProfileAward.module.css';

function ProfileAward({
  award,
  setModalPicture,
  setIsModalOn,
}: {
  award: {
    picture: string;
    date: string;
    name: string;
    prize: string;
    host: string;
    detail: string;
  };
  setModalPicture: React.Dispatch<React.SetStateAction<string>>;
  setIsModalOn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { picture, date, detail, host, name, prize } = award;
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
          aria-label="open award picture modal"
          role="button"
          tabIndex={0}
          className={styles.picture}
        >
          <img src={picture} alt={name} />
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.name}>{name}</div>
        <div className={styles.host}>{host}</div>
        <hr />
        <div>
          <span>수상 일자:</span>
          {date}
        </div>
        <div>
          <span>수상 내역:</span>
          {prize}
        </div>
        <div className={styles.detail}>{detail}</div>
      </div>
    </div>
  );
}

export default ProfileAward;
