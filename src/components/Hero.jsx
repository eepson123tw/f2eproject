import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import background from '../assets/heroBig.svg';
import backgroundSmall from '../assets/heroSmall.svg';
import { gsap } from 'gsap';
export default function Hero() {
  const app = useRef();
  const backGroundSmallStyle = { backgroundRepeat: 'no-repeat', backgroundPosition: '35% 100%' };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();
      const textTimeline = gsap.timeline();
      gsap.to('.loader', {
        delay: 1.3,
        duration: 1,
        scale: 6
      });
      textTimeline.to('.text_hero', {
        opacity: 0,
        alpha: 0,
        delay: -1
      });
      textTimeline.to('.text_hero', {
        opacity: 1,
        alpha: 1,
        delay: 3.5
      });
      timeline.to('.bg', {
        backgroundSize: '120%',
        delay: 1.3,
        alpha: 0,
        ease: 'linear',
        duration: 1.5
      });
      timeline.to('.bg', {
        scale: 1.2,
        backgroundPosition: '50px 0',
        ease: 'linear',
        alpha: 1,
        duration: 1
      });
    }, app);
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    let text = document.querySelector('.text p');
    text.innerHTML = text.innerText
      .split('')
      .map((char, i) => `<b style="transform:rotate(${i * 20}deg)">${char}</b>`)
      .join('');
  }, []);

  return (
    <div ref={app} className="relative flex h-[calc(100vh-96px)] items-center justify-center overflow-hidden">
      <div
        className="bg relative h-[100%] flex-1"
        style={{ backgroundImage: `url(${backgroundSmall})`, ...backGroundSmallStyle }}
      ></div>
      <div className="loader">
        <div className="text">
          <p>TheF2E4thTheF2E4th</p>
        </div>
        <span>
          <i></i>
        </span>
      </div>

      <div className="text_hero">
        <h2 className="absolute left-[257px] top-[301px] text-center text-white">
          <span className="flex text-[20vh]">
            The F<span className="mt-14 text-[15vh]">2</span>E
            <span className="relative mt-20 ml-10 block text-[15vh]">4</span>
            th
          </span>
          <span className=" text-5xl font-bold ">互動式網站設計</span>
        </h2>
      </div>
    </div>
  );
}
