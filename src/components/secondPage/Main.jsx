import React from 'react';
import hero from '../../assets/secondpage/hero.svg';

export default function Main() {
  return (
    <main
      className="flex h-[100%] w-[100%] items-start justify-center bg-black py-[200px] text-center"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center 10%',
        backgroundSize: 'contain'
      }}
    >
      <div className="text-white">
        <h2 className="mb-[100px] text-[64px] font-bold">
          隨時隨地都能簽，
          <br /> SIGNooo幫你省下大筆時間！
        </h2>
        <ul className="mb-[160px] flex justify-around">
          <li className="dot">上傳文件</li>
          <li className="dot">建立簽名檔</li>
          <li className="dot">簽署文件</li>
        </ul>
        <div>
          <p className="mb-4 font-light ">只需三步驟，立即簽署您的文件！</p>
          <button className="inline-block rounded bg-white px-[65.5px] py-[19px] font-bold text-black">
            立即簽署文件
          </button>
        </div>
      </div>
    </main>
  );
}