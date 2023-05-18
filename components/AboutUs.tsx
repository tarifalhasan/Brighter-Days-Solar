import React from 'react';
import Container from './Container';
import image1 from '../images/about/1.png';
import image2 from '../images/about/2.png';
import image3 from '../images/about/3.png';
import Image from 'next/image';
const AboutUs = () => {
  const Gallery = [image1, image2, image3];

  return (
    <Container height="auto py-10 md:py-16">
      <div className=" space-y-4" id="about">
        <span className="section-title text-black opacity-75">
          A LITTLE ABOUT US
        </span>
        <h2 className=" text-lg md:text-xl text-dark">
          Bridgend&apos; premier provider of renewable energy{' '}
          <span className="t text-primary">installation & maintenance</span>{' '}
          services across mainland UK
        </h2>
        <p className="text-base text-dark opacity-75">
          Our highly trained team use the latest technology and equipment to
          design and install solar panels in Bridgend that meet your specific
          energy needs. We offer comprehensive renewable energy solutions
          tailored to meet your unique requirements, including solar panel
          installation for homes, businesses, schools, colleges, and
          universities in Bridgend and surrounding areas.
        </p>
        <p className="text-base text-dark opacity-75">
          We believe that quality and reliability are crucial, which is why we
          offer a 10-year warranty on all our installations. At Brighter Days
          Solar, customer satisfaction is our top priority. That&apos; why we
          provide personalised service and ensure that every client is satisfied
          with their system. Our free consultations are designed to help you
          understand the benefits of renewable energy and how it can help you
          save money on your energy bills while reducing your carbon footprint.
        </p>
        <div className="grid pt-6 gap-4 lg:grid-rows-1 lg:grid-cols-3">
          {Gallery.map((data, i) => (
            <div key={i} className=" relative">
              <Image src={data} className="w-full h-full" alt="tarif" />

              {i === 2 && (
                <div className=" absolute  top-[100%] right-0">
                  <svg
                    width="300"
                    height="16"
                    viewBox="0 0 340 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 7.83846e-05L340 8.2293e-05L340 15.9993L-6.99351e-07 15.9993L0 7.83846e-05Z"
                      fill="#3A6451"
                      fill-opacity="0.4"
                    />
                    <path
                      d="M49.1334 -1.27142e-05L340 8.2293e-05L340 15.9993L49.1334 15.9992L49.1334 -1.27142e-05Z"
                      fill="#3A6451"
                    />
                    <path
                      d="M48.9706 0.0257144L259.794 0.0257168L259.794 16L48.9706 16L48.9706 0.0257144Z"
                      fill="white"
                      fill-opacity="0.3"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
