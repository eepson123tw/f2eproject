import React, { useRef, useEffect, useState } from 'react';

import PDF from '../../assets/read.pdf';

export default function Pdf() {
  const viewerRef = useRef(null);

  return (
    <div className="relative h-full bg-black">
      <div className="absolute top-0 right-0 h-full w-[450px] bg-white">bar</div>
      <iframe frameborder="0" width="100%" height="100%" src={PDF}></iframe>
    </div>
  );
}
