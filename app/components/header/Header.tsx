import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <div>
    <header className="fixed z-20 left-0 top-0 flex h-20 w-screen flex-row items-center justify-between gap-7 bg-transparent text-white backdrop-blur-md">
      <Image
        src="./logos/letra-s-verde.png"
        alt=""
        width={55}
        height={55}
        className="ml-2"
        id='logo-verde'
      />
      <p className="text-3xl text-white" style={{ letterSpacing: '0.4em' }}>
        Bienvenido
      </p>
      <div className="mr-8 flex flex-row gap-5">
        <Link href={'https://github.com/SantiSTC'}>
          <Image
            src="./logos/logo-github.png"
            alt=""
            width={23}
            height={23}
            className="cursor-pointer"
          />
        </Link>
        <Link href={'https://www.linkedin.com/in/santiago-iannello/'}>
          <Image
            src="./logos/logo-linkedin.png"
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