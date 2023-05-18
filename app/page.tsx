import AboutUs from '@/components/AboutUs';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import OurProcess from '@/components/OurProcess';
import Services from '@/components/Services';
import Solution from '@/components/Solution';
import Sustainability from '@/components/Sustainability';
import TotalServices from '@/components/TotalServices';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Solution />
      <TotalServices />
      <OurProcess />
      <AboutUs />
      <Blog />
      <Sustainability />
      <Footer />
    </>
  );
}
