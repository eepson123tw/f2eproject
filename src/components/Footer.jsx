import React, { useState } from 'react';

import blockstudio_logo from '../assets/blockstudio_logo.svg';
import kdan_logo from '../assets/kdan_logo.svg';
import titan_logo from '../assets/titan_logo.svg';

export default function Footer() {
  const [list, setList] = useState([{ url: kdan_logo }, { url: titan_logo }, { url: blockstudio_logo }]);
  return (
    <div className="h-[40vh] bg-black py-[50px] text-center text-white">
      <h2 className="mb-5 text-[40px] font-bold">贊助單位</h2>
      <div className="flex justify-center">
        {list.map((d, i) => (
          <div
            key={i}
            className="imgAnimation mx-6 h-[200px] w-[200px]"
            style={{
              backgroundImage: `url(${d.url})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center 10%',
              backgroundSize: 'contain'
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
