import React, { useRef, useEffect, useState } from 'react';
import PDF from '../../assets/read.pdf';
import { fabric } from 'fabric';
import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin, ToolbarProps } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function Pdf() {
  const viewerRef = useRef(null);
  let [pdf, setPdf] = useState(PDF);

  const drawSign = () => {
    const canvastw = new fabric.Canvas(document.querySelector('#canvasTw'));

    fabric.Image.fromURL(localStorage.getItem('img'), function (oImg) {
      oImg.set({
        top: 150,
        left: 100
      });
      oImg.scaleToWidth(300);
      canvastw.add(oImg).setActiveObject(oImg);
      canvastw.renderAll();
    });

    let canvasContainer = document.querySelector('.canvas-container');
    canvasContainer.setAttribute('style', 'position:absolute;top:100');
  };

  const customCanvasPlugin = () => {
    const onCanvasLayerRender = (e) => {
      // `e.ele` is the canvas element
      const canvas = e.ele;

      const ctx = canvas.getContext('2d');
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      const fonts = ctx.font.split(' ');
      const fontSize = parseInt(fonts[0], 10);

      ctx.textAlign = 'center';
      ctx.font = `${fontSize * e.scale * 4}px ${fonts[1]}`;
      drawSign();
    };

    return {
      onCanvasLayerRender
    };
  };

  const fileChange = (e) => {
    if (e.target.files[0] === undefined) return;
    // 透過 input 所選取的檔案
    const file = e.target.files[0];
    // 產生fileReader物件
    const fileReader = new FileReader();
    // 將資料做處理
    fileReader.readAsArrayBuffer(file);
    // 綁入事件監聽
    fileReader.addEventListener('load', () => {
      // 獲取readAsArrayBuffer產生的結果，並用來渲染PDF
      const typedarray = new Uint8Array(fileReader.result);
      setPdf(typedarray);
    });
    drawSign();
  };

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const customCanvasPluginInstance = customCanvasPlugin();

  return (
    <div className="relative h-full ">
      <input type="file" name="" id="" onChange={fileChange} accept="application/pdf" />
      <div className="fixed bottom-5 right-5 z-40">
        <p className=" h-13 w-13 flex cursor-pointer items-center justify-center rounded-full bg-black p-3 uppercase text-white hover:bg-slate-200 hover:text-black">
          open
        </p>
      </div>
      <canvas id="canvasTw" width="1500" height="1500" className="absolute top-10 left-0 z-10"></canvas>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
        <div
          className=" flex justify-items-center"
          style={{
            border: '1px solid rgba(0, 0, 0, 0.3)',
            height: '90vh'
          }}
        >
          <Viewer
            fileUrl={pdf}
            defaultScale={SpecialZoomLevel.PageFit}
            plugins={[defaultLayoutPluginInstance, customCanvasPluginInstance]}
          />
        </div>
      </Worker>
    </div>
  );
}
