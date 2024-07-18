import React, { useEffect, useRef, useState } from 'react';
import styles from '@/components/ProjectImageCarousel/ProjectImageCarousel.module.css';

function ProjectImageCarousel({ images }: { images: string[] }) {
  const [currentImg, setCurrentImg] = useState(0);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.style.transform = `translateX(-${currentImg * 100}%)`;
    }
  }, [currentImg]);

  const Next = () => {
    if (currentImg >= images.length - 1) setCurrentImg(0);
    else setCurrentImg(currentImg + 1);
  };
  const Prev = () => {
    if (currentImg === 0) setCurrentImg(images.length - 1);
    else setCurrentImg(currentImg - 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles['image-container']} ref={imgRef}>
        {images.map((image) => (
          <div
            key={image.split('/').reverse()[0]}
            className={styles['image-box']}
          >
            <img className={styles.image} src={image} alt="carousel" />
          </div>
        ))}
      </div>
      <div className={styles['button-container']}>
        <button
          type="button"
          className={styles.button}
          onClick={Prev}
          aria-label="prev"
        >
          <div className={styles.prev} />
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={Next}
          aria-label="next"
        >
          <div className={styles.next} />
        </button>
      </div>
    </div>
  );
}

export default ProjectImageCarousel;
