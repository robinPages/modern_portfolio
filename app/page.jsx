import Contact from '@/components/Contact';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Projects from '@/components/project/Projects';
import Image from 'next/image';

export default function Home() {
   return (
      <main>
         <Header />
         <HeroSection />
         <Projects />
         <Contact />
      </main>
   );
}
