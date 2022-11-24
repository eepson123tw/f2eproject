import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
export default function DesignFlow() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let block = gsap.utils.toArray('.blockBox');

      gsap.to(block, {
        xPercent: -200,
        ease: 'none',
        scrollTrigger: {
          trigger: '.target',
          start: 'top 50%',
          end: 'top 55%',
          pin: true,
          pinSpacing: false,
          scrub: 50,
          // markers: true,
          invalidateOnRefresh: true,
          snap: {
            snapTo: 1 / (block.length - 1),
            duration: { min: 0.25, max: 0.75 },
            directional: false
            // ease: 'power1.inOut'
          }
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="designFlow relative z-0 flex bg-black " id="container ">
      <div className="absolute z-10 flex h-[500px] w-[700px] flex-col justify-center bg-black">
        <h3 className="text-[100px] font-black leading-[1.2] text-white">
          年度最強合作
          <br />
          三大主題來襲
        </h3>
        <p className="text-4xl leading-[1.2] text-gray-500">各路廠商強強聯手</p>
        <p className=" text-4xl leading-[1.2]  text-gray-500">共同設計出接地器的網頁互動挑戰關卡</p>
      </div>
      <div className="target h-[500px] ">
        <section className="content" id="content">
          <div className="blockBox">
            <div className="item">
              <p className="copy1">headline 1</p>
              <p className="copy">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>

          <div className="blockBox">
            <div className="item">
              <p className="copy">headline 2</p>
              <p className="copy">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div className="blockBox">
            <div className="item">
              <p className="copy"> headline 3</p>
              <p className="copy">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
