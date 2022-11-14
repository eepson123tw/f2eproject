import React, { useRef, useLayoutEffect } from 'react';
import background from '../assets/heroBig.svg';
import { gsap } from 'gsap';
export default function Hero() {
  const app = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.box', {
        x: 100,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true
      });
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={app}
      style={{ backgroundImage: `url(${background})` }}
      className="relative flex h-[calc(100vh-96px)] items-center justify-center "
    >
      <div>
        <h2 className="box absolute left-[257px] top-[301px] text-center text-white">
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
