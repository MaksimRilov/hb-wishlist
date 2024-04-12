import { FC } from 'react';

import styles from './Title.module.scss';

export type TitleProps = {
  title?: string;
};

export const Title: FC<TitleProps> = ({ title }) => {
  return <div className={styles.title}>{title}</div>;
};
