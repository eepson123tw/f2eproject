import React, { useRef, useEffect, useState } from 'react';
import PDF from '../../assets/read.pdf';
import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin, ToolbarProps } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function Pdf() {
  const viewerRef = useRef(null);

  const customCanvasPlugin = () => {
    const onCanvasLayerRender = (e) => {
      // if (e.status !== LayerRenderStatus.DidRender) {
      //   return;
      // }

      // `e.ele` is the canvas element
      const canvas = e.ele;

      const ctx = canvas.getContext('2d');
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      const fonts = ctx.font.split(' ');
      const fontSize = parseInt(fonts[0], 10);

      ctx.textAlign = 'center';
      ctx.font = `${fontSize * e.scale * 4}px ${fonts[1]}`;

      ctx.fillStyle = '#CCC';
      ctx.fillText('陳小姐', centerX, 600);
    };

    return {
      onCanvasLayerRender
    };
  };

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const customCanvasPluginInstance = customCanvasPlugin();
  return (
    <div className="relative h-full ">
      <div className="fixed bottom-5 right-5 z-40">
        <p className=" h-13 w-13 flex cursor-pointer items-center justify-center rounded-full bg-black p-3 uppercase text-white hover:bg-slate-200 hover:text-black">
          open
        </p>
      </div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
        <div
          className="flex items-center"
          style={{
            border: '1px solid rgba(0, 0, 0, 0.3)',
            height: '90vh'
          }}
        >
          <Viewer
            fileUrl={PDF}
            defaultScale={SpecialZoomLevel.PageFit}
            plugins={[defaultLayoutPluginInstance, customCanvasPluginInstance]}
          />
          ;
        </div>
      </Worker>
    </div>
  );
}
