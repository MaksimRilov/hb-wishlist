import { FC, useMemo } from 'react';

import { Skeleton } from '../../../../components';
import { Card } from './components';
import { useProductList } from '../queries';

import styles from './ProductList.module.scss';

export const ProductList: FC = () => {
  const { data: products, isLoading } = useProductList();

  const skeletonLayout = useMemo(
    () => Array.from({ length: 9 }).map((_, index) => <Skeleton key={index} height={300} width={300} />),
    [],
  );

  if (isLoading || !products) {
    return <div className={styles.wrapper}>{skeletonLayout}</div>;
  }

  return (
    <div className={styles.wrapper}>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};
