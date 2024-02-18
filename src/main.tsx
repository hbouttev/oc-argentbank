import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './main.css';
import ErrorPage, { loader as errorLoader } from '~/routes/error-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: null, // TODO: layout
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: null, // TODO: index page
          },
          {
            path: '/*',
            element: <></>,
            loader: errorLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
