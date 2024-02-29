"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Flecha from './components/Flecha/Flecha';
import Header from './components/Header/Header';
import Linea from './components/Linea/Linea';
import Caja from './components/Caja/Caja';
import DownloadButton from './components/DownloadButton/DownloadButton';
import Logo from './components/Logo/Logo';
import CajaSmall from './components/CajaSmall/CajaSmall';
import FormInputs from './components/FormInputs/FormInputs';
import Button from './components/Button/Button';
import { Reveal } from './components/Reveal/Reveal';
import { useTranslation } from 'react-i18next';
import "../i18n"

function page() { 
  const { t, i18n } = useTranslation();

  const cambiarIdioma = (nuevoIdioma:string) => {
    i18n.changeLanguage(nuevoIdioma);
  };

  return (
    <div className="h-screen w-screen overflow-x-hidden overflow-y-scroll bg-gradient-to-t from-customBlueGray_1 to-customBlueGray_2">
      <div>
        <Header />
        {/* Aca abajo va mt-32 si hago andar el tema del header con la current section */}
        <div className="mb-16 mt-14 lg:flex lg:flex-row">
          <div className="lg:ml-20 mt-10 font-black text-white">
          <Reveal>
          <div className="flex flex-row gap-1.5 text-sm">
              <h4 className="">{t('hola')}</h4>
              <h4 className="text-green-700">{t('presentacion')}</h4>
            </div>
          </Reveal>
            <br />
          <Reveal>
            <div className="flex flex-row gap-5 text-6xl">
                <h1 className="text-green-700">{t('nombre')}</h1>
                <h1>{t('apellido')}</h1>
              </div>
          </Reveal>
            <br />
          <Reveal>
            <div className="flex flex-row gap-1.5 mb-2">
              <h3 className="text-base mt-0.5">{t('soy')}</h3>
              <h3 className="font-kodemono text-lg italic pb-6">
                {t('puesto')}
              </h3>
            </div>
          </Reveal>
          <Reveal>
            <div className="font-semibold text-gray-500 text-sm mb-10">
              <p>{t('estudiando')}</p>
              <p>{t('descripcion')}</p>
              <p>{t('descripcion2')}</p>
              <p>{t('descripcion3')}</p>
            </div>
          </Reveal>
          <Reveal>
            <DownloadButton />
          </Reveal>
          </div>
          <Reveal>
            <div className="lg:ml-24 mt-8">
              <Link href={'https://www.instagram.com/santi.iannello/'}>
                <Image
                  src={'/foto/santiago.jpg'}
                  alt={''}
                  width={320}
                  height={320}
                  className="rounded-full transition duration-300 ease-in-out shadow-xl"
                />
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="mb-16 flex justify-center">
          <Reveal>
            <Flecha />
          </Reveal>
        </div>
        <div className="mb-24 flex justify-center">
          <Linea />
        </div>
        <div>
        <div className="flex justify-center">
        <Reveal>
          <h3 className="mb-28 text-3xl font-black text-white">
            {t('titulo_experiencia')}
          </h3>
        </Reveal>
        </div>
        <Reveal>
          <div className="mb-16 flex h-96 w-screen justify-center gap-6">
            <Caja
              title={'GreenPlus'}
              position={t('experiencia_greenplus_puesto')}
              description={t('experiencia_greenplus_descripcion')}
              repository={'https://github.com/juansalinas-xyz/greenplus'}
              images={[
                '/tecnologias/typescript.png',
                '/tecnologias/js.png',
                '/tecnologias/html.png',
                '/tecnologias/css.png',
                '/tecnologias/reactjs.png',
                '/tecnologias/nextjs.png',
                '/tecnologias/nodejs.png',
              ]}
            />
            <Caja
              title={'Backend - Frontend - API'}
              position={t('experiencia_api1_puesto')}
              description={t('experiencia_api1_descripcion')}
              repository={'https://github.com/SantiSTC/SPP3'}
              images={[
                '/tecnologias/php.png',
                '/tecnologias/html.png',
                '/tecnologias/slim.png',
                '/tecnologias/nodejs.png',
                '/tecnologias/jwt.png',
                '/tecnologias/sql.png',
              ]}
            />
            <Caja
              title={'Backend - Frontend - API'}
              position={t('experiencia_api2_puesto')}
              description={t('experiencia_api2_descripcion')}
              repository={'https://github.com/SantiSTC/SPL3---Node---Frontend'}
              images={[
                '/tecnologias/typescript.png',
                '/tecnologias/js.png',
                '/tecnologias/html.png',
                '/tecnologias/nodejs.png',
                '/tecnologias/jwt.png',
                '/tecnologias/sql.png',
              ]}
            />
            <Caja
              title={'AeroHub'}
              position={t('experiencia_aerohub_puesto')}
              description={t('experiencia_aerohub_descripcion')}
              repository={
                'https://github.com/SantiSTC/Iannello.Santiago.PrimerParcial_AeroHub'
              }
              images={[
                '/tecnologias/csharp.png',
                '/tecnologias/netcore.png',
                '/tecnologias/winforms.png',
              ]}
            />
          </div>
        </Reveal>
        </div>
        <div className="mb-16 flex justify-center">
          <Reveal>
            <Flecha />
          </Reveal>
        </div>
        <div className="mb-24 flex justify-center">
          <Linea />
        </div>
        <div>
          <div className="flex justify-center">
            <Reveal>
              <h3 className="mb-24 text-3xl font-black text-white">
                {t('titulo_tecnologias')}
              </h3>
            </Reveal>
          </div>
          <div className="flex justify-center">
            <Reveal>
              <p className="mb-20 text-lg font-bold text-white border border-green-700 p-4 rounded-xl">
                {t('desc_tecnologias')}
              </p>
            </Reveal>
          </div>
          <div className="mb-24 flex justify-center">
            <Reveal>
              <div className="grid grid-cols-7 gap-14">
                <Logo path={'/tecnologias/typescript.png'} />
                <Logo path={'/tecnologias/js.png'} />
                <Logo path={'/tecnologias/php.png'} />
                <Logo path={'/tecnologias/csharp.png'} />
                <Logo path={'/tecnologias/c.png'} />
                <Logo path={'/tecnologias/html.png'} />
                <Logo path={'/tecnologias/css.png'} />
                <Logo path={'/tecnologias/tailwind.png'} />
                <Logo path={'/tecnologias/reactjs.png'} />
                <Logo path={'/tecnologias/nextjs.png'} />
                <Logo path={'/tecnologias/nodejs.png'} />
                <Logo path={'/tecnologias/netcore.png'} />
                <Logo path={'/tecnologias/slim.png'} />
                <Logo path={'/tecnologias/jquery.png'} />
                <Logo path={'/tecnologias/ajax.png'} />
                <Logo path={'/tecnologias/winforms.png'} />
                <Logo path={'/tecnologias/jwt.png'} />
                <Logo path={'/tecnologias/sql.png'} />
                <Logo path={'/tecnologias/git.png'} />
                <Logo path={'/tecnologias/arduino.png'} />
                <Logo path={'/tecnologias/linux.png'} />
              </div>
            </Reveal>
          </div>
        </div>
        <div className="mb-16 flex justify-center">
          <Reveal>
            <Flecha />
          </Reveal>
        </div>
        <div className="mb-24 flex justify-center">
          <Linea />
        </div>
        <div>
          <div className="flex justify-center">
            <Reveal>
              <h3 className="mb-24 text-3xl font-black text-white">
                {t('titulo_habilidades')}
              </h3>
            </Reveal>
          </div>
          <div className="mb-24 flex justify-center">
            <Reveal>
              <div className="grid grid-cols-4 gap-6">
                <CajaSmall title={t('habilidades_proactividad')} />
                <CajaSmall title={t('habilidades_autodidaxia')} />
                <CajaSmall title={t('habilidades_prolijidad')} />
                <CajaSmall title={t('habilidades_problemas')} />
                <CajaSmall title={t('habilidades_comunicacion')} />
                <CajaSmall title={t('habilidades_resiliencia')} />
                <CajaSmall title={t('habilidades_aprender')} />
                <CajaSmall title={t('habilidades_scrum')} />
              </div>
            </Reveal>
          </div>
        </div>
        <div className="mb-16 flex justify-center">
          <Reveal>
            <Flecha />
          </Reveal>
        </div>
        <div className="mb-24 flex justify-center">
          <Linea />
        </div>
        <div className="flex justify-center">
          <Reveal>
            <h3 className="mb-24 text-3xl font-black text-white">{t('titulo_educacion')}</h3>
          </Reveal>
        </div>
        <div className='text-white flex flex-row justify-center mb-28'>
          <Reveal>
            <div className='flex flex-row justify-center'>
              <div className='mt-2.5'>
                <Logo path={'/icons/utn.png'}/>
              </div>
              <div className='flex flex-row justify-center'>
                <div className='h-px w-36 bg-gray-200 rotate-90 mt-16'></div>
                  <div className='mt-4'>
                    <p className='font-black text-lg'>{t('universidad')}</p>
                    <p className='font-extrabold text-base text-green-700'><Link href={"https://fra.utn.edu.ar/tecnicatura-universitaria/"}>{t('carrera')}</Link></p>
                    <p className='font-semibold text-sm'>{t('facultad')}</p>
                    <p className='font-semibold text-base'>{t('periodo')}</p>
                  </div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="mb-16 flex justify-center">
          <Reveal>
            <Flecha />
          </Reveal>
        </div>
        <div className="mb-24 flex justify-center">
          <Linea />
        </div>
        <div className="flex justify-center">
          <Reveal>
            <h3 className="mb-24 text-3xl font-black text-white">{t('titulo_contacto')}</h3>
          </Reveal>
        </div>
        <div className='flex justify-start flex-row gap-10'>
          <Reveal>
            <form action="https://formsubmit.co/863e586cb7b58db69694d0c99c7dfc57" method="POST" className='ml-28 border border-green-700 bg-customBlueGray_2 px-24 py-12 rounded-xl'>
              <div className="flex justify-center mb-10 text">
                <p className="mb-6 text-xl font-bold text-white">
                  {t('titulo_form')}
                </p>
              </div>
              <FormInputs title={t('form_nombre_title')} id={'nombre'} name={'nombre'} placeholder={t('form_nombre_placeholder')} type={'text'} />
              <FormInputs title={t('form_email_title')} id={'email'} name={'email'} placeholder={t('form_email_placeholder')} type={'email'} />
              <FormInputs title={t('form_asunto_title')} id={'asunto'} name={'asunto'} placeholder={t('form_asunto_placeholder')} type={'text'} />
              <div className="mb-8 flex flex-col">
                <div className='flex flex-col'>
                  <label htmlFor={"mensaje"} className="text-white text-sm">{t('form_mensaje_title')}</label>
                  <input
                    type={"text"}
                    id={"mensaje"}
                    name={"mensaje"}
                    className={`mt-1 h-32 w-72 rounded-md border border-green-700 bg-transparent p-2 text-white focus:placeholder-transparent focus:outline-none`}
                  />
                </div>
              </div>
              <Button />
              <input type="hidden" name='_next' value={"http://localhost:3000"} />
              <input type="hidden" name='_captcha' value={"false"} />
            </form>
          </Reveal>
          <Reveal>
            <div className='ml-24'>
              <div className='flex justify-center flex-col mt-8'>
                <div className='flex flex-row gap-2'>
                  <p className='flex mt-4 font-bold text-xl text-white'>{t('contacto_telefono')}</p>
                  <p className='flex mt-4 font-bold text-xl text-green-700'>{t('contacto_whatsapp')}</p>
                </div>
                <div className='w-full flex justify-center mt-14'>
                  <Link href={"https://api.whatsapp .com/send/?phone=5492944798893&text&type=phone_number&app_absent=0"} className='flex'>
                    <Image src={'/icons/wpp.png'} alt={''} width={80} height={80}/>
                  </Link>
                </div>
                <div className='w-full flex justify-center mt-4'>
                  <p className='flex mt-8 font-medium text-base text-white'>
                    +54 9 2944798893
                  </p>
                </div>
                <div className="mb-24 mt-12 flex justify-center">
                    <Linea />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="mb-12 mt-24 flex justify-center">
          <Linea />
        </div>
        <br /><br /><br />
        <footer className='border-t border-t-gray-200 pt-10'>
          <div className='flex w-full justify-center text-white mb-4 flex-col'>
            <p className='flex justify-center text-base'>{t('footer_dueno')}</p>
            <p className='flex justify-center mt-5 text-sm'>{t('footer_iconos')}</p>
            <div className='flex flex-row justify-center mt-5 gap-1'>
              <p className='text-base'>{t('footer_creador')}</p>
              <Link href={"https://github.com/SantiSTC"}  className='flex justify-center text-green-700 text-base'>github.com/SantiSTC</Link>
            </div>
            <div className='flex justify-center mt-5'>
              <Image
                src="/logos/letra-s-verde.png"
                alt=""
                width={60}
                height={60}
                className="flex justify-center"
              />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default page;
