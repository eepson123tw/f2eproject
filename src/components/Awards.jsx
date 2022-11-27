import React, { useState, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
export default function Awards() {
  gsap.registerPlugin(TextPlugin);
  const [list, setList] = useState([
    { title: '初選佳作', text: '數位獎狀', num: '60位', awards: '' },
    { title: '初選佳作', text: '個人企業獎', num: '6位', awards: '3,000' },
    { title: '初選佳作', text: '數位獎狀', num: '6位', awards: '10,000' }
  ]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.typing', {
        text: '區區修煉已經無法滿足了嗎？還有比賽等著你！', //text屬性將自動為DOM元素嵌入我們所輸入的文字
        duration: 4.5,
        scrollTrigger: {
          trigger: '.typing',
          toggleActions: 'play pause resume reset' //見備註
        }
      });
      gsap.fromTo(
        '.cursor',
        0,
        {
          visibility: 'hidden'
        },
        {
          visibility: 'visible',
          repeat: -1,
          yoyo: true, // 若為true，則動畫repeat運行順序將會以倒放的形式回去，如溜溜球一樣
          repeatDelay: 0.3 // 下一次repeat的delay時間
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className=" awards h-[110vh] py-[110px] text-center font-black ">
      <h2 className="awards-title relative mb-8 text-6xl before:absolute before:top-1/2 before:left-1/2 before:-z-10 before:block before:h-[50px] before:w-[65%] before:-translate-y-[10%] before:-translate-x-[50%] before:bg-slate-200 before:content-['']">
        <span className="typing"></span>
        <span className="cursor">_</span>
      </h2>
      <div className="border-b border-black pb-8">
        <h3 className="text-4xl">評審機制</h3>
        <span className="my-4 inline-block h-1  w-12 bg-black"></span>
        <div className="flex justify-center">
          <div className="mr-4  w-[400px] border border-black">
            <p className=" border-b-[1px] border-black bg-blue-400 py-[13px] text-white">初選</p>
            <span className=" inline-block p-[12px]">
              由六角學院與贊助廠商討論， 進行最後篩選，並於 12/30(五) 由評審進行直播公布名單！
            </span>
          </div>
          <div className="ml-4 w-[400px]  border border-black">
            <p className=" border-b-[1px] border-black bg-blue-400 py-[13px] text-white">決選</p>
            <span className=" inline-block p-[12px]">將由六角學院前端、 UI 評審進行第一波篩選。</span>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="mb-5 text-[120px] leading-[1] text-gray-200">AWARDS</h3>
        <span className="relative inline-block text-4xl text-black">獎項</span>
        <span className="my-4  mx-auto flex h-1  w-12 bg-black"></span>
        <div className="mb-5 flex justify-center">
          {list.map((d, i) => (
            <div className="mr-4  w-[400px] border border-black" key={i}>
              <p className=" border-b-[1px] border-black bg-pink-600 py-[13px] text-white">{d.text}</p>
              <p className="py-[12px] text-[64px]">
                {d.awards === '' && <span className="block font-bold">{d.text}</span>}
                {d.awards !== '' && (
                  <span className="block font-serif  font-bold">
                    <span className="text-2xl">NTD</span>
                    {d.awards}
                  </span>
                )}
                <span className=" font-serif">{d.num}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <p>以上皆提供完賽數位獎狀</p>
    </section>
  );
}
