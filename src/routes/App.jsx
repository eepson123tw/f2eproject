import React, { useEffect } from 'react';
import { Routes, Route, Outlet, Navigate, useNavigate, Link, useSearchParams } from 'react-router-dom';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function App() {
  gsap.registerPlugin(ScrollTrigger);
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/secondPage');
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<FirstPage />}></Route>
        <Route path="/secondPage" element={<SecondPage />} />
      </Routes>
    </>
  );
}
