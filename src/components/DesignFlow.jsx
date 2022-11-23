import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
export default function DesignFlow() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.sectionX');
      let maxWidth = 0;

      const getMaxWidth = () => {
        maxWidth = 0;
        sections.forEach((section) => {
          maxWidth += section.offsetWidth;
        });
      };
      getMaxWidth();
      ScrollTrigger.addEventListener('refreshInit', getMaxWidth);

      gsap.to(sections, {
        x: () => `-${maxWidth - window.innerWidth}`,
        ease: 'none',
        scrollTrigger: {
          trigger: '.wrapper',
          pin: true,
          scrub: true,
          end: () => `+=${maxWidth}`,
          invalidateOnRefresh: true
        }
      });

      sections.forEach((sct, i) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: sections[i],
            start: () =>
              'top top-=' + (sct.offsetLeft - window.innerWidth / 2) * (maxWidth / (maxWidth - window.innerWidth)),
            end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
            toggleClass: { targets: sct, className: 'active' }
          }
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="wrapper  h-[100vh] bg-black text-white">
      <div className=" flex flex-nowrap">
        <section className="sectionX section--large flex h-[100vh] w-[100vw] flex-shrink-0 items-center justify-center">
          Part One
        </section>
        <section className="sectionX section--dark section--large flex h-[100vh] flex-shrink-0 items-center justify-center">
          Part Two
        </section>
        <section className="sectionX section--large flex h-[100vh] w-[100vw] flex-shrink-0 items-center justify-center">
          Part Four
        </section>
      </div>
      <div className="center-marker"></div>
    </section>
  );
}
