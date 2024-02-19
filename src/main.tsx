import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './main.css';
import ErrorPage, { loader as errorLoader } from '~/routes/error-page';
import RootLayout from '~/routes/rootLayout.tsx';
import RootIndex from '~/routes/index';
import Login, { action as loginAction } from '~/routes/login/login.tsx';
import Profile, {
  loader as profileLoader,
  action as loaderAction,
} from '~/routes/profile/profile.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <RootIndex />,
          },
          {
            path: 'login',
            element: <Login />,
            action: loginAction,
          },
          {
            path: 'profile',
            element: <Profile />,
            loader: profileLoader,
            action: loaderAction,
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
