import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import "../../../i18n"

function Header() {
  const { t, i18n } = useTranslation();

  const banderas = {
    es: '/icons/argentina.png',
    en: '/icons/reino-unido.png',
  };

  const cambiarIdioma = (nuevoIdioma:string) => {
    i18n.changeLanguage(nuevoIdioma);
    localStorage.setItem('language', nuevoIdioma);
  };

  const idiomaActual = i18n.language as keyof typeof banderas;

  return (
    <div>
    <header className="z-20 left-0 top-0 flex h-20 w-screen flex-row items-center justify-between gap-7 bg-transparent text-white">
      <Image
        src="/logos/letra-s-verdeClaro.png"
        alt=""
        width={55}
        height={55}
        className="ml-2"
        id='logo-verde'
      />
      <p className="text-xl text-white ml-52" style={{ letterSpacing: '0.3em' }}>
        {t('header_titulo')}
      </p>
      <div className="mr-8 flex flex-row gap-5">
        <div className='flex flex-row gap-2'>
          {banderas[idiomaActual] && (
            <Image
              src={banderas[idiomaActual]}
              alt={`Bandera ${idiomaActual}`}
              width={25}
              height={25}
              className='m-auto'
            />
          )}

          <select
            id="selectIdioma"
            onChange={(e) => cambiarIdioma(e.target.value)}
            value={i18n.language}
            className='h-8 bg-transparent focus:bg-customBlackBackground text-xs border-none focus:outline-none'
          >
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </div>
        <Link href={'https://github.com/SantiSTC'}>
          <Image
            src="/logos/logo-github.png"
            alt=""
            width={23}
            height={23}
            className="cursor-pointer"
          />
        </Link>
        <Link href={'https://www.linkedin.com/in/santiago-iannello/'}>
          <Image
            src="/logos/logo-linkedin.png"
            alt=""
            width={23}
            height={23}
            className="cursor-pointer"
          />
        </Link>
      </div>
    </header>
  </div>
  );
}

export default Header;