import React from 'react';
import logo_small from '../../assets/secondpage/logo_small.svg';
import { useSearchParams } from 'react-router-dom';
export default function Header() {
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <header className="py-[15px] px-6">
      <ul className="flex items-center justify-between">
        <li
          className="mr-auto h-[68px] w-[100px]"
          style={{
            backgroundImage: `url(${logo_small})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center 10%',
            backgroundSize: 'contain'
          }}
        ></li>
        <li
          className="mx-4 cursor-pointer rounded-sm bg-black py-2 px-6 text-white"
          onClick={() => setSearchParams('')}
        >
          服務介紹
        </li>
        <li
          className="mx-4 cursor-pointer rounded-sm bg-black py-2 px-6 text-white"
          onClick={() => setSearchParams({ methods: 'sign' })}
        >
          簽署文件
        </li>
        <li className="mx-4 cursor-pointer rounded-sm bg-black py-2 px-6 text-white">註冊</li>
        <li className="mx-4 cursor-pointer rounded-sm bg-black py-2 px-6 text-white">登入</li>
      </ul>
    </header>
  );
}
