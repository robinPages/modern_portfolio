import Image from 'next/image';
import React from 'react';
import SingleProject from './SingleProject';

function Projects() {
   return (
      <div className="min_container mx-auto mt-4 flex grid-cols-2 flex-col gap-5 md:grid">
         <SingleProject imageUrl={'/images/IMG20220103160304.jpg'} link={'#'} />
         <SingleProject imageUrl={'/images/IMG20220103160304.jpg'} link={'#'} />
         <SingleProject imageUrl={'/images/IMG20220103160304.jpg'} link={'#'} />
         <SingleProject imageUrl={'/images/IMG20220103160304.jpg'} link={'#'} />
         <SingleProject imageUrl={'/images/IMG20220103160304.jpg'} link={'#'} />
      </div>
   );
}

export default Projects;
