import React, { useContext } from 'react';

import { modalContext } from '../../utils/modalContext';
export default function ProcessModal() {
  const { hasShow, setShow } = useContext(modalContext);
  return (
    <div className="fixed top-0 left-0  flex h-[100vh] w-[100vw] items-center justify-center ">
      <div className="absolute top-0 left-0 h-[100%] w-[100%] bg-black opacity-25"></div>
      <div className="relative z-10 h-[700px] w-[1080px] rounded bg-white">
        <button className="rounded bg-black p-5 text-white ring-purple-100" onClick={(d) => setShow((d) => !d)}>
          cancel
        </button>
        <div>X</div>
        <ul>
          <li>{hasShow ? 'true' : 'false'}</li>
          <li></li>
          <li></li>
        </ul>
        <div>
          <div>
            <button>上傳PDF檔案</button>
            <p>從你的裝置直接上傳PDF檔案。</p>
          </div>
          <div>
            <button>拍照上傳文件</button>
            <p>使用裝置相機將實體文件拍下後上傳。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
