import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';
import "../../../i18n"

interface Props {
  title: string;
  position: string;
  description: string;
  repository: string;
  images: string[];
}

function Caja({
  title,
  position,
  description,
  repository,
  images,
}: Props) {
  const { t } = useTranslation();

  return (
    <div className={`h-72 w-60 flex flex-col rounded-lg bg-gray-900 text-white shadow-2xl hover:border border-green-700`}>
      <div className="flex justify-center">
        <p className="mb-2 mt-4 text-sm font-bold">{title}</p>
      </div>
      <div className="ml-4 mr-4">
        <p className="mb-2 font-semibold italic text-green-700 text-xs">{position}</p>
        <p className="leading-relaxed text-xs">{description}</p>
      </div>
      <div className="ml-4 mt-auto mb-2">
        <p className="mb-6 mt-3 text-xs">{t('experiencia_manejode')}</p>
        <div className="flex flex-row justify-center gap-3 mb-4">
          {images?.map((image, index) => (
            <Image key={index} src={image} alt={''} width={20} height={20} className='h-auto w-auto'/>
          ))}
        </div>
        <Link href={repository} className="ml-4 mt-4 underline text-xs hover:text-green-700">
          {t('experiencia_vermas')}
        </Link>
      </div>
    </div>
  );
}

export default Caja;
