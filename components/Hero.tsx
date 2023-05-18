import React from 'react';
import Navbar from './navbar/Navbar';
import Container from './Container';
import heroImg from '../images/hero.png';
import Image from 'next/image';
const Hero = () => {
  return (
    <section className="hero-section lg:h-full lg:max-h-[660px] 2xl:max-h-[814px]  overflow-hidden relative  ">
      <Container height="">
        <Navbar />

        <div className="grid   place-items-center grid-cols-12">
          <div className=" col-span-12 lg:col-span-9 xl:col-span-7 pt-10 pb-24 space-y-5">
            <h2 className=" text-4xl text-left md:text-2xl text-white">
              Solar installation & maintenance in Bridgend, Wales
            </h2>
            <p className="text-base text-white opacity-80">
              We use the latest technology & equipment to design and install
              solar panel systems that meet your specific energy needs.
            </p>
            <button className="btn-white flex items-center gap-4">
              <span>Get a free quote</span>
              <svg
                width="21"
                height="9"
                viewBox="0 0 21 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.3536 4.89579C20.5489 4.70053 20.5489 4.38395 20.3536 4.18868L17.1716 1.0067C16.9764 0.81144 16.6598 0.81144 16.4645 1.0067C16.2693 1.20196 16.2693 1.51855 16.4645 1.71381L19.293 4.54224L16.4645 7.37066C16.2693 7.56593 16.2693 7.88251 16.4645 8.07777C16.6598 8.27303 16.9764 8.27303 17.1716 8.07777L20.3536 4.89579ZM6.10352e-05 5.04224L20.0001 5.04224V4.04224L6.10352e-05 4.04224L6.10352e-05 5.04224Z"
                  fill="#3A6451"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
      <div className=" hidden lg:block absolute right-0 xl:top-[12%] 2xl:top-0">
        <Image
          className="lg:max-w-[70%] 2xl:max-w-full ml-auto"
          src={heroImg}
          alt="bright_days_hero"
        />
      </div>
    </section>
  );
};

export default Hero;
