import Image from 'next/image';
import {} from '@heroicons/react/24/solid';

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

function HeroSection() {
   return (
      <section className="min_container container m-auto flex ">
         <div className="flex flex-col-reverse gap-4 md:flex-row">
            <div className="main_container peer relative overflow-hidden rounded-lg p-6">
               <Image
                  src="/images/defaultcard.jpg"
                  height={300}
                  width={300}
                  alt="image"
                  className="bg_image pointer-events-none absolute left-0 top-0 -z-10 h-full w-full transition-transform duration-700"
               />
               <h1 className="mb-5 text-2xl md:mb-12 md:text-4xl">
                  Hello, I am Robin, a front-end Developer With 5 years of
                  experience.
               </h1>
               <p className="mb-12 max-w-[25rem] md:mb-32">
                  I care a lot about using design for positive impact. and enjoy
                  creating user-centric, delightful, and human experiences.
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
            <div className="relative min-w-[5rem] overflow-hidden rounded-lg md:max-w-[10rem] lg:max-w-fit">
               <Image
                  src="/images/IMG20220103160304.jpg"
                  height={500}
                  width={500}
                  alt="img"
                  className="pointer-events-none h-full w-full object-cover"
               />
            </div>
         </div>
      </section>
   );
}

export default HeroSection;
