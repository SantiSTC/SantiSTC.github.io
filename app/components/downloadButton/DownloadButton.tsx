"use client"

import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {

    // Enlace al PDF en la carpeta public
    const pdfPath = './docs/cv.pdf';

    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'cv_santiago_iannello.pdf'; 
    link.click();
  };

  return (
    <button onClick={handleDownload} className='rounded-2xl border border-green-700 p-3 text-sm hover:bg-green-700'>Descargar CV</button>
  );
};

export default DownloadButton;