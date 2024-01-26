import { Link, NavLink } from 'react-router-dom';
import styles from '@/components/SideBar/SideBar.module.css';
import Collection from '../Collection/Collection';
import projects from '@/constants/project';
import pathName from '@/route/pathName';

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Link to={pathName.project} className={styles['all-project']}>
        전체 프로젝트
      </Link>
      {projects.map((collections) => (
        <div key={collections[0].category}>
          <Collection
            name={collections[0].category}
            count={collections.length}
          />
          <div>
            {collections.map((collection) => (
              <NavLink
                to={`${pathName.project}/${collection.id}`}
                className={({ isActive }) =>
                  [
                    styles.collection,
                    isActive ? styles['collection-active'] : styles.collection,
                  ].join(' ')
                }
                key={collection.id}
              >
                {collection.name}
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SideBar;
