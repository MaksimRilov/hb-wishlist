import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import mockProducts from '../../../mock/products.json';

import { mockFetch } from '../../../utils/mockFetch';
import { Product } from './types';

const QUERY_KEYS = {
  productList: () => ['productList'],
  productDetail: (productId: string) => ['productDetail', productId],
};

export const useProductList = () => {
  return useQuery({
    queryKey: QUERY_KEYS.productList(),
    refetchOnWindowFocus: false,
    queryFn: async () => {
      // there should be a request for a list of products here
      const response = await mockFetch(mockProducts);

      return response;
    },
  });
};

export const useProducDetail = (productId: string) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: QUERY_KEYS.productDetail(productId),
    refetchOnWindowFocus: false,
    queryFn: async () => {
      // there should be a request for a product
      await mockFetch(null);

      // but we don't have a server. We take data from the query using key productList
      const products: Product[] = queryClient.getQueryData(QUERY_KEYS.productList()) || [];

      return products.find((product) => product.id === productId);
    },
  });
};

export const useAddingFavorites = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ productId, isFavored }: { productId: string; isFavored: boolean }) => {
      // there should be a request to add to favorites here
      await mockFetch(null);
    },
    onMutate: async ({ productId, isFavored }) => {
      // optimistic updates. We do not wait for a response from the server 

      const previousProducts: Product[] = queryClient.getQueryData(QUERY_KEYS.productList()) || [];

      queryClient.setQueriesData({ queryKey: QUERY_KEYS.productList() }, (products: Product[] = []) => {
        const currentProductIndex = products?.findIndex((product) => product.id === productId);

        if (currentProductIndex !== -1) {
          products[currentProductIndex].isFavored = isFavored;
        }

        return products;
      });

      return { previousProducts };
    },
    onError: (err, variavles, context) => {
      queryClient.setQueryData(QUERY_KEYS.productList(), context?.previousProducts);
    },
  });
};
