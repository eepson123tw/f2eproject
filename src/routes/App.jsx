import React from 'react';
import { Routes, Route, Outlet, Navigate, Link, useSearchParams } from 'react-router-dom';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export default function App() {
  gsap.registerPlugin(ScrollTrigger);
  return (
    <>
      <Routes>
        <Route path="/" element={<FirstPage />}></Route>
        <Route path="/secondPage" element={<SecondPage />} />
      </Routes>
    </>
  );
}

function Layout() {
  return <Outlet />;
}
