
import React from 'react';
import { useTranslation } from 'react-i18next';
import "../../../i18n"

const DownloadButton = () => {
  const handleDownload = () => {
    const pdfPath = '/docs/cv.pdf';

    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'cv_santiago_iannello.pdf';
    link.click();
  };

  const { t } = useTranslation();

  return (
    <button onClick={handleDownload} className='rounded-2xl border border-green-700 p-3 text-sm hover:bg-green-700'>{t('boton_descargar')}</button>
  );
};

export default DownloadButton;