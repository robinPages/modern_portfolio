import Image from 'next/image';
import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

function SingleProject({ imageUrl, link }) {
   return (
      <div className="relative w-full overflow-hidden rounded-lg border border-slate-300 shadow-lg lg:max-w-[50rem]">
         <a
            href={link}
            className="absolute right-2 top-2 z-40 cursor-pointer rounded-full border border-slate-300 bg-white p-3 shadow-lg transition-transform duration-700 hover:rotate-6 hover:scale-110"
         >
            <ArrowLeftIcon className=" h-6 w-6 rotate-[145deg]" />
         </a>
         <Image
            className="h-full w-full object-cover transition-transform duration-700 ease-in-out hover:rotate-6 hover:scale-[1.3]"
            src={imageUrl}
            height={500}
            width={500}
            alt="image"
         />
      </div>
   );
}

export default SingleProject;
