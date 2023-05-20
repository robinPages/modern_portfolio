'use client';

import { Bars3Icon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

function Header() {
   const [showNav, setShowNav] = useState(false);

   const headerLInks = [
      {
         text: 'Home',
         link: './',
      },
      {
         text: 'Projects',
         link: '#projects',
      },
      {
         text: 'Contact',
         link: '#contact',
      },
   ];
   return (
      <header className="min_container m-auto w-full items-center px-16 py-3">
         <div className="relative flex w-full justify-between  text-black-lite">
            <div>
               <Image
                  src={'/images/icons/logo.svg'}
                  alt="logo"
                  height={50}
                  width={50}
               />
            </div>
            <Bars3Icon
               onClick={() => setShowNav((prev) => !prev)}
               className="h-6 w-6 cursor-pointer md:hidden"
            />
            <div
               className={`font-sm absolute left-1/2 top-full z-40 mt-2 flex w-full -translate-x-1/2 flex-col items-center gap-9 rounded-sm border border-gray-100 bg-slate-100 py-6 md:relative md:mt-0 md:bg-transparent ${
                  showNav ? 'flex' : 'hidden'
               } md:left-0 md:top-auto md:flex md:w-fit md:-translate-x-0 md:flex-row md:p-0`}
            >
               {headerLInks.map((link, key) => {
                  return (
                     <a
                        key={key}
                        href={link.link}
                        className={`${key == 0 && 'text-black'} text-am`}
                     >
                        {link.text}
                     </a>
                  );
               })}
            </div>
         </div>
      </header>
   );
}

export default Header;
