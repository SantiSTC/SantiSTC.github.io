"use client"
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
import React, { useEffect, useRef, useState } from 'react';
import { Reveal } from './components/Reveal/Reveal';

function page() {
  return (
    <div className="h-screen w-screen overflow-x-hidden overflow-y-scroll bg-gradient-to-t from-customBlueGray_1 to-customBlueGray_2">
      <div>
        <Header />
        {/* Aca abajo va mt-32 si hago andar el tema del header con la current section */}
        <div className="mb-16 mt-14 lg:flex lg:flex-row">
          <div className="lg:ml-20 mt-10 font-black text-white">
          <Reveal>
          <div className="flex flex-row gap-1.5 text-sm">
              <h4 className="">Hola,</h4>
              <h4 className="text-green-700">mi nombre es</h4>
            </div>
          </Reveal>
            <br />
          <Reveal>
            <div className="flex flex-row gap-5 text-6xl">
                <h1 className="text-green-700">Santiago</h1>
                <h1>Iannello</h1>
              </div>
          </Reveal>
            <br />
          <Reveal>
            <div className="flex flex-row gap-1.5 mb-2">
              <h3 className="text-base mt-0.5">Soy</h3>
              <h3 className="font-kodemono text-lg italic pb-6">
                Desarrollador de Software
              </h3>
            </div>
          </Reveal>
          <Reveal>
            <div className="font-semibold text-gray-500 text-sm mb-10">
              <p>Estudiando en UTN.</p>
              <p>
                Viviendo en Buenos Aires, Argentina. Apasionado por la
                tecnologia,
              </p>
              <p>
                con el objetivo de dar soluciones a problemas. Programando a
                diario hace 2 años.
              </p>
              <p>Entusiasta tanto de backend como frontend.</p>
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
                  src={'./foto/santiago.jpg'}
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
            Mi Experiencia
          </h3>
        </Reveal>
        </div>
        <Reveal>
          <div className="mb-16 flex h-96 w-screen justify-center gap-6">
            <Caja
              title={'GreenPlus'}
              position={'Desarrollador frontend'}
              description={
                'GreenPlus es una una plataforma de tokenizacion y comercializacion de creditos de carbono.'
              }
              repository={'https://github.com/juansalinas-xyz/greenplus'}
              images={[
                './tecnologias/typescript.png',
                './tecnologias/js.png',
                './tecnologias/html.png',
                './tecnologias/css.png',
                './tecnologias/reactjs.png',
                './tecnologias/nextjs.png',
                './tecnologias/nodejs.png',
              ]}
            />
            <Caja
              title={'Backend - Frontend - API'}
              position={'Proyecto personal'}
              description={
                '(Proyecto realizado para un examen de universidad) Desarrollado 100% por mi cuenta. Un Login - CRUD de usuarios.'
              }
              repository={'https://github.com/SantiSTC/SPP3'}
              images={[
                './tecnologias/php.png',
                './tecnologias/html.png',
                './tecnologias/slim.png',
                './tecnologias/nodejs.png',
                './tecnologias/jwt.png',
                './tecnologias/sql.png',
              ]}
            />
            <Caja
              title={'Backend - Frontend - API'}
              position={'Proyecto personal'}
              description={
                '(Proyecto realizado para un examen de universidad) Desarrollado 100% por mi cuenta. Un Login - CRUD de usuarios y juguetes.'
              }
              repository={'https://github.com/SantiSTC/SPL3---Node---Frontend'}
              images={[
                './tecnologias/typescript.png',
                './tecnologias/js.png',
                './tecnologias/html.png',
                './tecnologias/nodejs.png',
                './tecnologias/jwt.png',
                './tecnologias/sql.png',
              ]}
            />
            <Caja
              title={'AeroHub'}
              position={'Proyecto personal'}
              description={
                'Desarrollado 100% por mi cuenta. AeroHub es una aplicacion de gestión de vuelos, aviones y pasajeros destinada a aerolineas.'
              }
              repository={
                'https://github.com/SantiSTC/Iannello.Santiago.PrimerParcial_AeroHub'
              }
              images={[
                './tecnologias/csharp.png',
                './tecnologias/netcore.png',
                './tecnologias/winforms.png',
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
                Tecnologias
              </h3>
            </Reveal>
          </div>
          <div className="flex justify-center">
            <Reveal>
              <p className="mb-20 text-lg font-bold text-white border border-green-700 p-4 rounded-xl">
                Estos son las tecnologias que manejo
              </p>
            </Reveal>
          </div>
          <div className="mb-24 flex justify-center">
            <Reveal>
              <div className="grid grid-cols-7 gap-14">
                <Logo path={'./tecnologias/typescript.png'} />
                <Logo path={'./tecnologias/js.png'} />
                <Logo path={'./tecnologias/php.png'} />
                <Logo path={'./tecnologias/csharp.png'} />
                <Logo path={'./tecnologias/c.png'} />
                <Logo path={'./tecnologias/html.png'} />
                <Logo path={'./tecnologias/css.png'} />
                <Logo path={'./tecnologias/tailwind.png'} />
                <Logo path={'./tecnologias/reactjs.png'} />
                <Logo path={'./tecnologias/nextjs.png'} />
                <Logo path={'./tecnologias/nodejs.png'} />
                <Logo path={'./tecnologias/netcore.png'} />
                <Logo path={'./tecnologias/slim.png'} />
                <Logo path={'./tecnologias/jquery.png'} />
                <Logo path={'./tecnologias/ajax.png'} />
                <Logo path={'./tecnologias/winforms.png'} />
                <Logo path={'./tecnologias/jwt.png'} />
                <Logo path={'./tecnologias/sql.png'} />
                <Logo path={'./tecnologias/git.png'} />
                <Logo path={'./tecnologias/arduino.png'} />
                <Logo path={'./tecnologias/linux.png'} />
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
                Habilidades personales
              </h3>
            </Reveal>
          </div>
          <div className="mb-24 flex justify-center">
            <Reveal>
              <div className="grid grid-cols-4 gap-6">
                <CajaSmall title={'Proactividad'} />
                <CajaSmall title={'Autotodidaxia'} />
                <CajaSmall title={'Prolijidad'} />
                <CajaSmall title={'Resolución de problemas'} />
                <CajaSmall title={'Buena comunicación'} />
                <CajaSmall title={'Resiliencia'} />
                <CajaSmall title={'Ganas de aprender'} />
                <CajaSmall title={'SCRUM'} />
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
            <h3 className="mb-24 text-3xl font-black text-white">Educación</h3>
          </Reveal>
        </div>
        <div className='text-white flex flex-row justify-center mb-28'>
          <Reveal>
            <div className='flex flex-row justify-center'>
              <div className='mt-2.5'>
                <Logo path={'./icons/utn.png'}/>
              </div>
              <div className='flex flex-row justify-center'>
                <div className='h-px w-36 bg-gray-200 rotate-90 mt-16'></div>
                  <div className='mt-4'>
                    <p className='font-black text-lg'>Universidad Tecnologica Nacional | UTN</p>
                    <p className='font-extrabold text-base text-green-700'><Link href={"https://fra.utn.edu.ar/tecnicatura-universitaria/"}>Tecnicatura Universitaria en Programación</Link></p>
                    <p className='font-semibold text-sm'>Facultad Regional Avellaneda</p>
                    <p className='font-semibold text-base'>2022 - actualidad.</p>
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
            <h3 className="mb-24 text-3xl font-black text-white">Contacto</h3>
          </Reveal>
        </div>
        <div className='flex justify-start flex-row gap-10'>
          <Reveal>
            <form action="https://formsubmit.co/863e586cb7b58db69694d0c99c7dfc57" method="POST" className='ml-28 border border-green-700 bg-customBlueGray_2 px-24 py-12 rounded-xl'>
              <div className="flex justify-center mb-10 text">
                <p className="mb-6 text-xl font-bold text-white">
                  Enviame un email
                </p>
              </div>
              <FormInputs title={'Nombre'} id={'nombre'} name={'nombre'} placeholder={'Nombre y apellido'} type={'text'} />
              <FormInputs title={'Email'} id={'email'} name={'email'} placeholder={'Correo electronico'} type={'email'} />
              <FormInputs title={'Asunto'} id={'asunto'} name={'asunto'} placeholder={'Asunto'} type={'text'} />
              <div className="mb-8 flex flex-col">
                <div className='flex flex-col'>
                  <label htmlFor={"mensaje"} className="text-white text-sm">{"Comentarios"}</label>
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
                  <p className='flex mt-4 font-bold text-xl text-white'>O contactame por</p>
                  <p className='flex mt-4 font-bold text-xl text-green-700'>Whatsapp</p>
                </div>
                <div className='w-full flex justify-center mt-14'>
                  <Link href={"https://api.whatsapp .com/send/?phone=5492944798893&text&type=phone_number&app_absent=0"} className='flex'>
                    <Image src={'./icons/wpp.png'} alt={''} width={80} height={80}/>
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
            <p className='flex justify-center text-base'>Santiago Iannello © 2024</p>
            <p className='flex justify-center mt-5 text-sm'>Iconos por flaticon.es</p>
            <div className='flex flex-row justify-center mt-5 gap-1'>
              <p className='text-base'>Desarrollado y diseñado por y para </p>
              <Link href={"https://github.com/SantiSTC"}  className='flex justify-center text-green-700 text-base'>github.com/SantiSTC</Link>
            </div>
            <div className='flex justify-center mt-5'>
              <Image
                src="./logos/letra-s-verde.png"
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
