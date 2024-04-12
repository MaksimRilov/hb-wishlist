import { FC, SyntheticEvent, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { Title } from '../../../../../../components';
import { FilledHeart, OutlinedHeart } from '../../../../../../icons';
import { Product } from '../../../types';
import { useAddingFavorites } from '../../../queries';

import styles from './Card.module.scss';

export type CardProps = {
  product: Product;
};

export const Card: FC<CardProps> = ({ product }) => {
  const { title, url, id, isFavored } = product;

  const { mutate } = useAddingFavorites();

  const addToFavorities = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();

      mutate({ productId: id, isFavored: true });
    },
    [id, mutate],
  );

  return (
    <Link className={styles.link} to={id}>
      <div className={styles.card}>
        <div className={styles.header}>
          <Title title={title} />
          {isFavored ? (
            <FilledHeart />
          ) : (
            <OutlinedHeart className={styles['outlined-heart']} onClick={addToFavorities} />
          )}
        </div>
        <img alt="product" className={styles.image} loading="lazy" src={url} />
      </div>
    </Link>
  );
};
