import React from 'react';
import { Routes, Route, Outlet, Navigate, Link, useSearchParams } from 'react-router-dom';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<FirstPage />} />
          <Route path="*" element={<SecondPage />} />
        </Route>
      </Routes>
    </>
  );
}

function Layout() {
  return <Outlet />;
}
