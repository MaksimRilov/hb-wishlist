import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './Products.module.scss';

// there may be general layout here. Or general state
export const Products: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Outlet />
    </div>
  );
};
