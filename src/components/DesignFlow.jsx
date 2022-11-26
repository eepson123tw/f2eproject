import React, { useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import go from '../assets/go.png';
export default function DesignFlow() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let block = gsap.utils.toArray('.blockBox');

      gsap.to(block, {
        xPercent: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: '.target',
          start: 'top 50%',
          end: 'top 55%',
          pin: true,
          pinSpacing: false,
          scrub: 50,
          invalidateOnRefresh: true
        }
      });
    });
    return () => ctx.revert();
  }, []);

  const [list, setList] = useState([
    { title: '版塊設計', text: 'The F2E 活動網站設計', tag: '#視差滾動' },
    { title: '凱鈿行動科技', text: '今晚 我想來點點簽', tag: '#Canvas' },
    { title: '鈦坦科技', text: 'Scrum  新手村', tag: '#JS draggable' }
  ]);

  return (
    <section className="designFlow relative z-0 flex bg-black " id="container ">
      <div className="absolute z-10 flex h-[500px] w-[700px] flex-col justify-center bg-black px-3 text-left">
        <h3 className="mb-2 text-[100px] font-black leading-[1.2] text-white">
          年度最強合作
          <br />
          三大主題來襲
        </h3>
        <p className="text-4xl leading-[1.2] text-gray-500">各路廠商強強聯手</p>
        <p className=" text-4xl leading-[1.2]  text-gray-500">共同設計出接地器的網頁互動挑戰關卡</p>
      </div>
      <div className="target h-[500px] ">
        <section className="content" id="content">
          {list.map((d, i) => (
            <div className="blockBox ">
              <div className="item relative  flex h-[100%] flex-1 flex-col ">
                <p className="item_title flex justify-between">
                  {d.title}
                  <div className="relative -top-5 -right-5 h-[150px] w-[150px] bg-white"></div>
                </p>
                <p className="item_text text-[40px] "> {d.text}</p>
                <p className="mb-2">{d.tag}</p>
                <p className=" flex items-center">
                  閱讀更多
                  <span
                    className="ml-4 block h-[60px] w-[60px]"
                    style={{
                      backgroundImage: `url(${go})`
                    }}
                  ></span>
                </p>
                <p className=" leading-0 absolute -bottom-5 right-5 text-[130px] font-black text-gray-200 opacity-25">
                  0{i + 1}
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}
