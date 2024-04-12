import { FC } from 'react';

import styles from './Skeleton.module.scss';

export type SkeletonProps = {
  width: number;
  height: number;
};

export const Skeleton: FC<SkeletonProps> = ({ height, width }) => {
  const style = {
    maxWidth: width,
    maxHeight: height,
    minWidth: width,
    minHeight: height,
  };

  return <div className={styles.skeleton} style={style} />;
};
