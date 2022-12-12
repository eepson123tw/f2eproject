import React, { useContext, useState, useRef, useEffect } from 'react';
import CanvasArea from '../canvas/CanvasArea';
import { modalContext } from '../../utils/modalContext';
export default function SignModel() {
  const [tab, setTab] = useState('one');
  const [inputValue, setInputValue] = useState('');
  const { hasSignModelShow, setSignModel } = useContext(modalContext);
  const tabOneClass = `rounded-tl-md bg-white px-[46px] py-[4px] ${tab === 'one' ? 'active' : ''}`;
  const tabTwoClass = `rounded-tr-md bg-white px-[46px] py-[4px] ${tab === 'two' ? 'active' : ''}`;

  return (
    hasSignModelShow && (
      <div className="fixed top-0 left-0  flex h-[100vh] w-[100vw] items-center justify-center ">
        <div className="absolute top-0 left-0 h-[100%] w-[100%] bg-black opacity-25"></div>
        <div className="relative  z-10 h-[543px] w-[876px]  rounded bg-slate-100">
          <h2 className="py-2 px-4">新增新的簽名檔</h2>
          <div className="h-full bg-[#E1EDDF] py-[30px] px-[100px] pb-[160px]">
            <label className="mb-2 block" htmlFor="name">
              簽名檔名稱
            </label>
            <input
              type="text"
              name=""
              id="name"
              className="mb-8"
              placeholder="img"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <div className="flex flex-col ">
              <ul className="tab flex cursor-pointer">
                <li className={tabOneClass} onClick={() => setTab((d) => (d = 'one'))}>
                  繪製簽名檔
                </li>
                <li className={tabTwoClass} onClick={() => setTab((d) => (d = 'two'))}>
                  上傳簽名檔
                </li>
              </ul>
              {tab === 'one' && <CanvasArea imgName={inputValue}></CanvasArea>}
            </div>
          </div>
        </div>
      </div>
    )
  );
}
