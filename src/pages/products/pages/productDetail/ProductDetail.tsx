import { FC, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Skeleton, Title } from '../../../../components';
import { FilledHeart, OutlinedHeart } from '../../../../icons';
import { useAddingFavorites, useProducDetail } from '../queries';

import styles from './ProductDetail.module.scss';

export const ProductDetail: FC = () => {
  const { productId } = useParams();
  const { data: product, isLoading } = useProducDetail(productId as string);

  const { mutate } = useAddingFavorites();

  const toggleFavorities = useCallback(
    (productId: string, isFavored: boolean) => {
      mutate({ productId, isFavored });
    },
    [mutate],
  );

  if (isLoading || !product) {
    return (
      <div className={styles.card}>
        <div className={styles.header}>
          <Skeleton height={40} width={350} />
          <Skeleton height={30} width={30} />
        </div>
        <div className={styles.content}>
          <Skeleton height={400} width={600} />
          <Skeleton height={400} width={500} />
        </div>
        <div>
          <Skeleton height={32} width={150} />
        </div>
      </div>
    );
  }

  const { description, id, isFavored, title, url } = product;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <Title title={title} />
        {isFavored ? (
          <FilledHeart className={styles['filled-heart']} onClick={() => toggleFavorities(id, false)} />
        ) : (
          <OutlinedHeart className={styles['outlined-heart']} onClick={() => toggleFavorities(id, true)} />
        )}
      </div>
      <div className={styles.content}>
        <img alt="product" className={styles.image} src={url} />
        <div className={styles.description}>{description}</div>
      </div>
      <div>
        <Link to="/products">Back</Link>
      </div>
    </div>
  );
};
