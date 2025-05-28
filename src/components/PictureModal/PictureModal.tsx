import React from 'react';
import styles from './PictureModal.module.css';

function PictureModal({
  picture,
  isModalOn,
  setIsModalOn,
}: {
  picture: string;
  isModalOn: boolean;
  setIsModalOn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const setModal = () => setIsModalOn(false);
  return (
    <div style={{ display: isModalOn ? 'block' : 'none' }}>
      <div
        className={styles['modal-background']}
        onClick={setModal}
        onKeyDown={setModal}
        role="button"
        aria-label="close modal"
        tabIndex={-1}
      />
      <div className={styles.modal}>
        <div className={styles['modal-label']}>
          <span>모달을 종료하려면 배경을 클릭하세요.</span>
          <button
            type="button"
            className={styles['modal-close-button']}
            onClick={setModal}
            aria-label="close modal">
              <span className={styles['modal-close-button-text']}>닫기</span>
          </button>
        </div>
        <img
          src={picture}
          alt="모달 사진"
          className={styles['modal-picture']}
        />
      </div>
    </div>
  );
}

export default PictureModal;
