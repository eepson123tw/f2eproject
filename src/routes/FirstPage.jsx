import React from 'react';
import Hero from '../components/Hero';
export default function FirstPage() {
  return (
    <div>
      <nav className="px-6 py-5">
        <ul className="flex items-center font-bold">
          <li className="mr-auto text-2xl">TheF2E</li>
          <li className="mr-8  cursor-pointer py-4 px-6 duration-300  ease-in-out hover:bg-black hover:text-white">
            關卡資訊
          </li>
          <li className="mr-8  cursor-pointer py-4  px-6 duration-300 ease-in-out hover:bg-black hover:text-white">
            作品列表
          </li>
          <li className="mr-8  cursor-pointer py-4  px-6 duration-300 ease-in-out hover:bg-black hover:text-white">
            攻略資源
          </li>
          <li className="mr-8  cursor-pointer py-4  px-6 duration-300 ease-in-out hover:bg-black hover:text-white">
            求職專區
          </li>
          <li className="cursor-pointer bg-black py-4 px-6 text-white">登入</li>
        </ul>
      </nav>
      <Hero></Hero>
    </div>
  );
}
