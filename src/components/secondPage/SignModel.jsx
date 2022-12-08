import React, { useContext, useState, useRef, useEffect } from 'react';

export default function SignModel() {
  const [tab, setTab] = useState('one');

  const tabOneClass = `rounded-tl-md bg-white px-[46px] py-[4px] ${tab === 'one' ? 'active' : ''}`;
  const tabTwoClass = `rounded-tr-md bg-white px-[46px] py-[4px] ${tab === 'two' ? 'active' : ''}`;

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const canvasDom = document.querySelector('#canvas');
    const resetBtn = document.querySelector('.resetBtn');
    const ctx = canvas.getContext('2d');

    //Our first draw
    ctx.fillStyle = '#fff';
    ctx.fillRect(20, 16, 1200, 800);

    ctx.lineWidth = 4;
    ctx.lineCap = 'round';

    let isPainting = false;

    // 取得滑鼠 / 手指在畫布上的位置
    function getPaintPosition(e) {
      const canvasSize = canvas.getBoundingClientRect();
      if (e.type === 'mousemove') {
        return {
          x: e.clientX - canvasSize.left,
          y: e.clientY - canvasSize.top
        };
      } else {
        return {
          x: e.touches[0].clientX - canvasSize.left,
          y: e.touches[0].clientY - canvasSize.top
        };
      }
    }

    // 開始繪圖時，將狀態開啟
    function startPosition(e) {
      e.preventDefault();
      isPainting = true;
    }

    // 結束繪圖時，將狀態關閉，並產生新路徑
    function finishedPosition() {
      isPainting = false;
      ctx.beginPath();
    }

    // 繪圖過程
    function draw(e) {
      // 滑鼠移動過程中，若非繪圖狀態，則跳出
      if (!isPainting) return;
      // 取得滑鼠 / 手指在畫布上的 x, y 軸位置位置
      const paintPosition = getPaintPosition(e);
      // 移動滑鼠位置並產生圖案
      ctx.lineTo(paintPosition.x, paintPosition.y);
      ctx.stroke();
    }

    // 重新設定畫布
    function reset() {
      ctx.clearRect(0, 0, 1200, 800);
      ctx.fillStyle = '#fff';
      ctx.fillRect(20, 16, 1200, 800);
    }

    canvasDom.addEventListener('mousedown', startPosition);
    canvasDom.addEventListener('mouseup', finishedPosition);
    canvasDom.addEventListener('mouseleave', finishedPosition);
    canvasDom.addEventListener('mousemove', draw);
    resetBtn.addEventListener('click', reset);
  }, []);

  return (
    <div className="fixed top-0 left-0  flex h-[100vh] w-[100vw] items-center justify-center ">
      <div className="absolute top-0 left-0 h-[100%] w-[100%] bg-black opacity-25"></div>
      <div className="relative  z-10 h-[543px] w-[876px]  rounded bg-slate-100">
        <h2 className="py-2 px-4">新增新的簽名檔</h2>
        <div className="h-full bg-[#E1EDDF] py-[30px] px-[100px] pb-[160px]">
          <label className="mb-2 block" htmlFor="name">
            簽名檔名稱
          </label>
          <input type="text" name="" id="name" className="mb-8" />
          <div className="flex flex-col ">
            <ul className="tab flex cursor-pointer">
              <li className={tabOneClass} onClick={() => setTab((d) => (d = 'one'))}>
                繪製簽名檔
              </li>
              <li className={tabTwoClass} onClick={() => setTab((d) => (d = 'two'))}>
                上傳簽名檔
              </li>
            </ul>
            <div className="relative h-[300px] rounded-lg rounded-tl-none bg-black ">
              <canvas id="canvas" ref={canvasRef} width="600" height="280"></canvas>
              <button className="z-5 resetBtn absolute right-5 top-4 rounded bg-[#CFCFCF] py-1 px-2 text-[12px] text-black">
                重做
              </button>
              <button className=" z-5 absolute right-5 top-[60px] rounded bg-[#CFCFCF] py-1 px-2 text-[12px] text-black">
                刪除
              </button>
            </div>
            <button className="mt-4 self-center rounded  bg-[#CFCFCF] py-1 px-2 text-center text-[24px] text-white">
              確認新增簽名檔
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
