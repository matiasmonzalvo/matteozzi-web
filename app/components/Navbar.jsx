"use client";

import React from 'react'
import { useRef, useEffect, useState } from 'react';
import { PaperAirplaneIcon, MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
    setIsClient(true);
    }, []);

  return (
    <nav className='fixed w-full z-40 border-b-[1px] border-gray-500'>
    <div className="max-w-full bg-teal-200">
      <div className="flex mx-auto justify-between w-full px-20">
        <div className="flex w-full items-center justify-between my-[1.5vw]">
          <div>
            <a href="/" className="flex gap-1 font-bold text-black items-center ">
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
              <a href='#' className='bg-black text-white px-4 py-2 rounded-md hover:bg-teal-700 transition'>Contacto</a>
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
  )
}

export default Navbar