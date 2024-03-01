
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import "../../../i18n"

function Header() {
  const { t, i18n } = useTranslation();
  const cambiarIdioma = (nuevoIdioma:string) => {
    i18n.changeLanguage(nuevoIdioma);
    localStorage.setItem('language', nuevoIdioma);
  };

  return (
    <div>
    <header className="fixed z-20 left-0 top-0 flex h-20 w-screen flex-row items-center justify-between gap-7 bg-transparent text-white backdrop-blur-md">
      <Image
        src="/logos/letra-s-verde.png"
        alt=""
        width={55}
        height={55}
        className="ml-2"
        id='logo-verde'
      />
      <p className="text-3xl text-white ml-52" style={{ letterSpacing: '0.4em' }}>
        {t('header_titulo')}
      </p>
      <div className="mr-8 flex flex-row gap-5">
        <div>
          <label htmlFor='selectIdioma' className='pt-1 text-sm'>{t('header_idioma')}</label>
          <select
            id="selectIdioma"
            onChange={(e) => cambiarIdioma(e.target.value)}
            value={i18n.language}
            className='h-8 bg-transparent focus:bg-customBlueGray_2 text-xs border-none focus:outline-none'
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