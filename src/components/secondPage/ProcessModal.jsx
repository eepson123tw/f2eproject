import React, { useContext, useState } from 'react';

import { modalContext } from '../../utils/modalContext';
export default function ProcessModal() {
  const { hasShow, setShow } = useContext(modalContext);

  let [processCount, setProcessCount] = useState(0);

  const setCount = () => {
    setProcessCount((d) => {
      d++;
      if (d > 2) {
        d = 0;
      }
      return d;
    });
  };

  return (
    hasShow && (
      <div className="fixed top-0 left-0  flex h-[100vh] w-[100vw] items-center justify-center ">
        <div className="absolute top-0 left-0 h-[100%] w-[100%] bg-black opacity-25"></div>
        <div className="relative relative z-10 h-[700px] w-[1080px] rounded bg-slate-100 p-[100px]">
          <div className=" absolute top-3 right-5 text-3xl">
            <i className="fa-solid fa-xmark  inline-block cursor-pointer" onClick={() => setShow((d) => !d)}></i>
          </div>
          <ul className="process mb-[150px] mt-5 flex justify-between text-2xl">
            <li className={processCount >= 0 ? 'active' : ''}>上傳文件</li>
            <li className={processCount >= 1 ? 'active' : ''}>建立簽名檔</li>
            <li className={processCount >= 2 ? 'active' : ''}>簽署文件</li>
          </ul>
          <div className="flex h-4/5 flex-col items-center text-center">
            <div className="mb-10">
              <button
                className="mb-2 rounded-xl bg-[#6C8268] py-[19px] px-[65.5px] text-[32px] font-bold text-white"
                onClick={setCount}
              >
                上傳PDF檔案
              </button>
              <p>從你 的裝置直接上傳PDF檔案。</p>
            </div>
            <div className="">
              <button className="mb-2 rounded-xl bg-[#6C8268] py-[19px] px-[65.5px] text-[32px] font-bold text-white">
                拍照上傳文件
              </button>
              <p>使用裝置相機將實體文件拍下後上傳。</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
