// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom/client';
import AdsPage from './Page/AdsPage';
import ErrorPage from './Page/ErrorPage';
import './index.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AdsPage />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
