import React from 'react';

export default function QsSection() {
  return (
    <section className="before:contents-['']  relative flex h-[636px] before:absolute before:top-0 before:left-[50%] before:block before:h-[100%] before:w-[1px] before:bg-black">
      <h2 className="seo_hidden">您是否有以下的困擾?</h2>
      <div className="flex flex-1 items-center justify-center">
        <p className="text-[10vh] font-extrabold ">
          您是否也有 <br />
          以下的困擾?
        </p>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <ul>
          <li className="mb-7 text-4xl font-extrabold">滿足不了同事的許願?</li>
          <li className="mb-7 text-4xl font-extrabold ">動畫技能樹太雜無從下手?</li>
          <li className="text-4xl font-extrabold ">羨慕別人酷酷的網頁動畫?</li>
        </ul>
      </div>
    </section>
  );
}
