import Image from 'next/image';
import React from 'react';

const imgaes = [
   {
      colorImg: '/images/icons/dribble_color.svg',
      darkImg: '/images/icons/dribble_dark.svg',
   },
   {
      colorImg: '/images/icons/instragram_color.svg',
      darkImg: '/images/icons/instragram_dark.svg',
   },
   {
      colorImg: '/images/icons/linkedin_color.svg',
      darkImg: '/images/icons/linkedin_dark.svg',
   },
   {
      colorImg: '/images/icons/dribble_color.svg',
      darkImg: '/images/icons/dribble_dark.svg',
   },
];

function Contact() {
   return (
      <div className="min_container container m-auto p-6">
         <div className="peer relative m-auto overflow-hidden rounded-lg p-6">
            <Image
               src="/images/defaultcard.jpg"
               height={300}
               width={300}
               alt="image"
               className="bg_image pointer-events-none absolute left-0 top-0 -z-10 h-full w-full transition-transform duration-700"
            />
            <h1 className="mb-5 text-2xl md:mb-12 md:text-4xl">
               Want to work together?
            </h1>
            <p className="mb-6 max-w-[25rem] md:mb-14">
               Feel free to reach out for collaborations or just friendly hello
               robinmai8300@gmail.com
            </p>
            <div className="w-full items-center gap-2 md:flex">
               <button className="btn_black w-full">Contact me</button>
               <div className="my-auto mt-5 flex items-center justify-between gap-3 md:mt-0">
                  {imgaes.map(({ colorImg, darkImg }, key) => (
                     <div
                        key={key}
                        className="group relative flex h-fit w-fit items-center justify-between"
                     >
                        <Image
                           height={50}
                           width={50}
                           src={colorImg}
                           alt="First Image"
                           className="absolute opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                        />
                        <Image
                           height={50}
                           width={50}
                           src={darkImg}
                           alt="Second Image"
                           className="opacity-100 transition-opacity duration-200 group-hover:opacity-0"
                        />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}

export default Contact;
