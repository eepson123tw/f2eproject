import React, { useRef, useEffect, useState, useContext } from 'react';
import { fabric } from 'fabric';
import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin, ToolbarProps } from '@react-pdf-viewer/default-layout';
import { modalContext } from '../../utils/modalContext';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function Pdf() {
  const { file, setFile } = useContext(modalContext);
  const viewerRef = useRef(null);

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

  const pdfDownload = () => {
    let canvas = document.querySelector('.rpv-core__canvas-layer > canvas');
    const image = canvas.toDataURL('image/png');
    let canvasTwo = document.querySelector('canvas');
    const imageTwo = canvasTwo.toDataURL('image/png');
    const pdf = new jsPDF();
    // 設定背景在 PDF 中的位置及大小
    const width = pdf.internal.pageSize.width;
    const height = pdf.internal.pageSize.height;
    pdf.addImage(image, 'png', 0, 0, width, height);
    pdf.addImage(imageTwo, 'png', 0, 0, width, height);
    // 將檔案取名並下載
    pdf.save('download.pdf');
  };

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const customCanvasPluginInstance = customCanvasPlugin();

  return (
    <div className="relative h-full ">
      <button onClick={pdfDownload}>download</button>
      <div className="fixed bottom-5 right-5 z-40">
        <p className=" h-13 w-13 flex cursor-pointer items-center justify-center rounded-full bg-black p-3 uppercase text-white hover:bg-slate-200 hover:text-black">
          open
        </p>
      </div>
      <canvas id="canvasTw" width="553" height="783" className="fixed top-[50px] left-[100%] z-10 "></canvas>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
        <div
          className=" relative flex justify-items-center"
          style={{
            border: '1px solid rgba(0, 0, 0, 0.3)',
            height: '90vh'
          }}
        >
          <Viewer
            fileUrl={file}
            defaultScale={SpecialZoomLevel.PageFit}
            plugins={[defaultLayoutPluginInstance, customCanvasPluginInstance]}
          />
        </div>
      </Worker>
    </div>
  );
}
