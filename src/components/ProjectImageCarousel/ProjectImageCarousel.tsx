import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from '@/components/ProjectImageCarousel/ProjectImageCarousel.module.css';

function ProjectImageCarousel({
  images,
  setModalPicture,
  setIsModalOn,
}: {
  images: string[];
  setModalPicture: React.Dispatch<React.SetStateAction<string>>;
  setIsModalOn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [currentImg, setCurrentImg] = useState(0);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.style.transform = `translateX(-${currentImg * 100}%)`;
    }
  }, [currentImg]);

  useEffect(() => {
    setCurrentImg(0);
  }, [images]);

  const Next = () => {
    if (currentImg >= images.length - 1) setCurrentImg(0);
    else setCurrentImg(currentImg + 1);
  };
  const Prev = () => {
    if (currentImg === 0) setCurrentImg(images.length - 1);
    else setCurrentImg(currentImg - 1);
  };
  const setPictureModal = useCallback((picture: string) => {
    setIsModalOn(true);
    setModalPicture(picture);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles['image-container']} ref={imgRef}>
        {images.map((image) => (
          <div
            key={image.split('/').reverse()[0]}
            className={styles['image-box']}
          >
            <div
              onClick={() => setPictureModal(image)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') setPictureModal(image);
              }}
              aria-label="open education picture modal"
              role="button"
              tabIndex={0}
            >
              <img className={styles.image} src={image} alt="carousel" />
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        className={`${styles.button} ${styles.left}`}
        onClick={Prev}
        aria-label="prev"
      >
        <div className={styles.prev} />
      </button>
      <button
        type="button"
        className={`${styles.button} ${styles.right}`}
        onClick={Next}
        aria-label="next"
      >
        <div className={styles.next} />
      </button>
    </div>
  );
}

export default ProjectImageCarousel;
