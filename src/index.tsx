import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Products } from './pages';
import { ProductDetail, ProductList } from './pages/products/pages';

// this can be moved to a separate file
const router = createBrowserRouter([
  {
    path: '/products',
    element: <Products />,
    children: [
      {
        index: true,
        element: <ProductList />,
      },
      {
        path: ':productId',
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/products" />,
  },
]);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
