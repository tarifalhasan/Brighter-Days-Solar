import React from 'react';
import Container from './Container';

import services1 from '../images/services/services1.png';
import services2 from '../images/services/services2.png';
import services3 from '../images/services/services3.png';
import services4 from '../images/services/services4.png';
import Image from 'next/image';
const Services = () => {
  const Data = [services1, services2, services3, services4];

  return (
    <Container height="auto">
      <div className=" py-7 md:py-10 lg:py-16" id="services">
        <div>
          <span className="section-title">Our SERVICES</span>
          <h2 className="  text-lg md:text-xl text-dark">
            We offer comprehensive{' '}
            <span className=" text-primary">renewable energy</span> solutions
            tailored to meet your unique requirements
          </h2>
        </div>
        <div className="py-10 relative">
          <div className=" absolute top-[8%] -z-10 right-0">
            <svg
              width="213"
              height="16"
              viewBox="0 0 213 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 8.39359e-05L213 8.2293e-05L213 15.9993L-6.99351e-07 15.9993L0 8.39359e-05Z"
                fill="#3A6451"
                fillOpacity="0.4"
              />
              <path
                d="M30.7806 -7.96506e-06L213 8.2293e-05L213 15.9993L30.7806 15.9992L30.7806 -7.96506e-06Z"
                fill="#3A6451"
              />
              <path
                d="M30.6786 0.0257192L162.753 0.0257181L162.753 16L30.6786 16L30.6786 0.0257192Z"
                fill="white"
                fillOpacity="0.3"
              />
            </svg>
          </div>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {Data.map((data, i) => (
              <div key={i}>
                <Image src={data} alt="servicesImage" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Services;
