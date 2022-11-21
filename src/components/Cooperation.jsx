import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import designer from '../assets/designer.svg';
import engineer from '../assets/engineer.svg';
export default function Cooperation() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.cooperation',
          start: 'top center',
          end: 'center',
          markers: true,
          scrub: true
        }
      });
      tl.from('.imgAnimation', {
        alpha: 0,
        ease: 'power4.out',
        duration: 2
      });
      tl.from('.imgAnimation', {
        alpha: 1,
        ease: 'power4.out',
        duration: 1
      });
    });
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t2 = gsap.timeline({
        scrollTrigger: {
          trigger: '.cooperation',
          start: 'top center',
          end: 'center',
          markers: true,
          scrub: true
        }
      });
      const t3 = gsap.timeline({
        scrollTrigger: {
          trigger: '.cooperation',
          start: 'top center',
          end: 'center',
          markers: true,
          scrub: true
        }
      });
      t2.from('.feText', {
        x: -5000,
        // rotate: 180,
        ease: 'elastic.out(1, 0.3)',
        duration: 5
      });
      t2.from('.feText', {
        ease: 'elastic.out(1, 0.3)',
        duration: 5
      });
      t3.from('.uiText', {
        rotate: 180,
        opacity: 0,
        duration: 3,
        ease: 'elastic.out(1, 0.3)'
      });
      t3.from('.uiText', {
        ease: 'elastic.out(1, 0.3)',
        duration: 3
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="cooperation flex h-[80vh] px-[224px] py-[107px]">
      <h2 className="seo_hidden">互相合作</h2>
      <div className="flex flex-1">
        <div className="ui mr-2 flex h-[600px] flex-col justify-between">
          <div
            className="imgAnimation h-[500px] w-[445px]"
            style={{
              backgroundImage: `url(${engineer})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center 10%',
              backgroundSize: 'contain'
            }}
          ></div>
          <p className="feText inline-block bg-black p-[10px]  text-center text-[40px] text-white">
            Front-End Engineer
          </p>
        </div>
        <div className="fe flex h-[600px] flex-col justify-between">
          <div
            className="imgAnimation relative h-[500px]  w-[375px]"
            style={{
              backgroundImage: `url(${designer})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'bottom center',
              backgroundSize: '100%'
            }}
          ></div>
          <p className="uiText inline-block bg-black p-[10px] text-center text-[40px] text-white">UI / UX Designer</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-end  text-center">
        <div className="w-[480px] border border-black">
          <p className="bg-black px-[160px] py-[23px] text-4xl font-bold text-white">本屆主題</p>
          <h3 className="border-b border-black px-[90px] py-[18.5px] text-6xl font-extrabold leading-[70px]">
            <span>互動式</span>
            <br />
            <span className="text-5xl">網頁設計</span>
          </h3>
          <p className="flex text-4xl font-bold">
            <span className="inline-block flex-1 border-r border-black px-[60px] py-[36px]">設計師</span>
            <span className="inline-block flex-1 px-[60px] py-[36px]">工程師</span>
          </p>
        </div>
        <p className="mt-9 text-4xl font-bold text-pink-300">攜手合作</p>
      </div>
    </section>
  );
}
