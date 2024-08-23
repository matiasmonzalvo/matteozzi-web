"use client";

import { useRef, useEffect, useState } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { PaperAirplaneIcon, MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import './globals.css'

export default function Home() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        scrollbar: true
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
      <nav className='w-full'>
        <div className="max-w-full bg-green-400">
          <div className="flex mx-auto justify-between w-5/6">
            <div className="flex w-full items-center justify-between my-10">
              <div>
                <a href="/" className="flex gap-1 font-bold text-gray-700 items-center ">
                  <span className='leading-6 text-xl'>Matteozzi<br/>Lavilla</span>
                </a>
              </div>
              <div className="hidden lg:flex gap-8">
                <a href="#">Home</a>
                <a href="#">Benefits</a>
                <a href="#">Our Classes</a>
              </div>
              {isClient && (
                <div>
                  <a className='bg-blue-500 px-4 py-2 rounded-3xl'>Contacto</a>
                </div>
              )}
            </div>
            <div className="flex gap-6">
              <div className="hidden xs:flex items-center gap-10">
                <div className="hidden lg:flex items-center gap-2">
                  <MoonIcon className="h-6 w-6" />
                  <SunIcon className="h-6 w-6" />
                </div>
                <div>
                  <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                    Free Trial
                  </button>
                </div>
              </div>
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {isClient && (
          <div
            className={`fixed z-40 w-full bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
              !toggleMenu ? 'h-0' : 'h-full'
            }`}
          >
            <div className="px-8">
              <div className="flex flex-col gap-8 font-bold tracking-wider">
                <a href="#" className="border-l-4 border-gray-600">
                  Features
                </a>
                <a href="#">Pricing</a>
                <a href="#">Download</a>
                <a href="#">Classic</a>
              </div>
            </div>
          </div>
        )}
      </nav>
      <section className="w-screen h-screen bg-red-500"></section>
      <section className="w-screen h-screen bg-blue-600"></section>
    </div>
    </LocomotiveScrollProvider>
  );
}
