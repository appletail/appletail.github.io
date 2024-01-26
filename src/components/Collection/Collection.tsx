import styles from '@/components/Collection/Collection.module.css';

function Collection({ name, count }: { name: string; count: number }) {
  return (
    <div className={styles['collection-name']}>
      <span>{name}</span>
      <span className={styles.count}>{`(${count})`}</span>
    </div>
  );
}

export default Collection;
