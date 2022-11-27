import React from 'react';

export default function TimeLine() {
  return (
    <section
      className="h-[850px] bg-gradient-to-b
      from-[#4363AE] to-[#E73863]
  py-[72px]
  px-[120px]"
    >
      <h2 className="mb-[275px] text-center text-6xl text-white">額外競賽 主題豐厚獎金等著你</h2>

      <ul className="timeline flex items-center justify-between">
        <li className="relative text-[32px] text-white">
          <div className="mb-5 flex h-[96px]  w-[96px] items-center justify-center rounded-full bg-zinc-50/20">
            <div className="relative z-10 h-5 w-5 rounded-full bg-white"></div>
          </div>
          <p>10/13</p>
        </li>
        <li className="relative text-[32px] text-white">
          <div className="mb-5 flex h-[96px]  w-[96px] items-center justify-center rounded-full bg-zinc-50/20">
            <div className="relative z-10 h-5 w-5 rounded-full bg-white"></div>
          </div>
          <p>10/30</p>
        </li>
        <li className="relative text-[32px] text-white">
          <div className="mb-5 flex h-[96px]  w-[96px] items-center justify-center rounded-full bg-zinc-50/20">
            <div className="relative z-10 h-5 w-5 rounded-full bg-white"></div>
          </div>
          <p className="info info-one">10/31</p>
        </li>
        <li className="relative text-[32px] text-white">
          <div className="mb-5 flex h-[96px]  w-[96px] items-center justify-center rounded-full bg-zinc-50/20">
            <div className="relative z-10 h-5 w-5 rounded-full bg-white"></div>
          </div>
          <p className="info info-two">11/07</p>
        </li>
        <li className="relative text-[32px] text-white">
          <div className="mb-5 flex h-[96px]  w-[96px] items-center justify-center rounded-full bg-zinc-50/20">
            <div className="relative z-10 h-5 w-5 rounded-full bg-white"></div>
          </div>
          <p>11/28</p>
        </li>
      </ul>
    </section>
  );
}
