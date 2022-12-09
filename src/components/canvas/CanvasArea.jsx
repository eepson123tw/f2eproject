import React, { useContext, useState, useRef, useEffect } from 'react';
export default function CanvasArea(props) {
  const canvasRef = useRef(null);
  // let isPainting = false;
  let [isPainting, setPainting] = useState(false);
  const buttonClass = `z-5 resetBtn absolute right-5 top-4 rounded ${
    isPainting ? ' bg-[#6C8268]' : ' bg-[#CFCFCF]'
  } py-1 px-2 text-[12px] ${isPainting ? 'text-white' : 'text-black'} `;

  const buttonDeleteClass = `z-5 absolute right-5 top-[60px] rounded ${
    isPainting ? ' bg-[#6C8268]' : ' bg-[#CFCFCF]'
  } py-1 px-2 text-[12px] ${isPainting ? 'text-white' : 'text-black'}`;

  const confirmBtnClass = `mt-4 self-center rounded  ${
    isPainting ? ' bg-[#6C8268]' : ' bg-[#CFCFCF]'
  } py-1 px-2 text-center text-[24px] text-white`;

  function saveImg() {
    const canvas = canvasRef.current;
    const newImg = canvas.toDataURL('image/png');
    localStorage.setItem(props.imgName, newImg);
  }
  useEffect(() => {
    const canvas = canvasRef.current;
    const canvasDom = document.querySelector('#canvas');
    const resetBtn = document.querySelector('.resetBtn');
    const ctx = canvas.getContext('2d');
    let isPaint = false;
    //Our first draw
    ctx.fillStyle = '#fff';
    ctx.fillRect(20, 16, 1200, 800);

    ctx.lineWidth = 4;
    ctx.lineCap = 'round';

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

    function startPosition(e) {
      e.preventDefault();
      setPainting(true);
      isPaint = true;
    }

    function finishedPosition() {
      isPaint = false;
      ctx.beginPath();
    }

    function draw(e) {
      // 滑鼠移動過程中，若非繪圖狀態，則跳出
      if (!isPaint) return;
      // 取得滑鼠 / 手指在畫布上的 x, y 軸位置位置
      const paintPosition = getPaintPosition(e);
      // 移動滑鼠位置並產生圖案
      ctx.lineTo(paintPosition.x, paintPosition.y);
      ctx.stroke();
    }

    function reset() {
      ctx.clearRect(0, 0, 1200, 800);
      ctx.fillStyle = '#fff';
      ctx.fillRect(20, 16, 1200, 800);
      setPainting(false);
    }

    canvasDom.addEventListener('mousedown', startPosition);
    canvasDom.addEventListener('mouseup', finishedPosition);
    canvasDom.addEventListener('mouseleave', finishedPosition);
    canvasDom.addEventListener('mousemove', draw);
    resetBtn.addEventListener('click', reset);
  }, []);
  return (
    <>
      <div className="relative h-[300px] rounded-lg rounded-tl-none bg-black ">
        <canvas id="canvas" ref={canvasRef} width="600" height="280"></canvas>
        <button className={buttonClass}>重做</button>
        <button className={buttonDeleteClass}>刪除</button>
      </div>
      <button onClick={saveImg} className={confirmBtnClass}>
        確認新增簽名檔
      </button>
    </>
  );
}
