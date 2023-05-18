import React from 'react';

import image1 from '../images/services/all/1.png';
import image2 from '../images/services/all/2.png';
import image3 from '../images/services/all/3.png';
import image4 from '../images/services/all/4.png';
import Container from './Container';
import Image from 'next/image';

const TotalServices = () => {
  const Data = [
    {
      title: 'Rural Solar Panels Installation ',
      heading: `
       <h2 class="text-lg md:text-[36px]  lg:leading-[50px] font-normal text-dark">
       High-quality solar installations <span class="text-[#3A6451]">for homes</span> in Bridgend and the surrounding areas
       </h2>
      `,
      des: "We provide high-quality installations for homes, including the installation of solar panels in Bridgend. Our team of experts will collaborate with you to design a customised solution based on your energy requirements and budget. We understand that every home is different, and that's why we offer personalised solutions to meet your specific needs. Our systems help you save energy and contribute to a cleaner, more sustainable environment.",
      image: image1,
    },
    {
      title: 'Commercial Solar Power Systems',
      heading: `
       <h2 class="text-lg md:text-[36px]  lg:leading-[50px] font-normal text-dark">
      Solutions <span class="text-[#3A6451]">for businesses</span>  looking to save on energy costs and reduce their carbon footprint
       </h2>
      `,
      des: "We offer comprehensive solutions for businesses looking to save on energy costs and reduce their carbon footprint. We specialise in designing and installing high-quality photovoltaic systems that meet your specific energy needs. We'll work closely with you to customise a solution that meets your requirements and budget. By partnering with us, you can enjoy significant savings and contribute to a more sustainable future.",
      image: image2,
    },
    {
      title: 'Rural Solar Panels Installation ',
      heading: `
       <h2 class="text-lg md:text-[36px]  lg:leading-[50px] font-normal text-dark">
       Specialist solar installation and maintenance for <span class="text-[#3A6451]">rural properties</span>  and businesses
       </h2>
      `,
      des: 'Specialist solar installation and maintenance for farmers and business/residents situated in rural areas in Bridgend and the surrounding areas, including Bridgend solar panel installation, can benefit from our solar panel installation services. With our panels, you can generate your own energy and reduce your dependence on traditional sources. Our team will work with you to design a system that is tailored to your specific requirements.',
      image: image3,
    },
    {
      title: 'Schools, Colleges & Universities',
      heading: `
       <h2 class="text-lg md:text-[36px]  lg:leading-[50px] font-normal text-dark">
       Helping <span class="text-[#3A6451]">educational institutions</span>  reduce their contribute to a greener environment
       </h2>
      `,
      des: 'We provide installation of photovoltaic solar energy systems for schools, colleges, and universities in Bridgend and the surrounding areas. Our systems help educational institutions reduce their energy costs and contribute to a cleaner, greener environment. Systems that are tailored to your specific needs, enabling you to benefit from energy savings.',
      image: image4,
    },
  ];

  return (
    <>
      {Data.map((data, i) => (
        <div
          key={i}
          className={`flex ${i % 2 === 0 ? 'bg-white' : 'bg-[#F9F9FF]'} `}
        >
          <Container height="auto">
            <div
              className={`flex  flex-col lg:items-center  lg:flex-row gap-12  py-16 justify-between`}
              style={{ order: i % 2 === 0 ? '1' : '2' }} // Change the order based on index
            >
              <div
                className={`basis-[60%] ${
                  i % 2 === 0 ? 'order-first' : 'order-last'
                } space-y-4`}
              >
                <span className="section-title">{data.title}</span>
                {React.createElement('div', {
                  dangerouslySetInnerHTML: { __html: data.heading },
                })}
                <p className="text-base text-[#232536] opacity-60">
                  {data.des}
                </p>
              </div>
              <div
                className={`basis-[40%] ${
                  i % 2 === 0 ? 'order-last' : 'order-first'
                }`}
              >
                <Image src={data.image} alt={data.heading} />
              </div>
            </div>
          </Container>
        </div>
      ))}
    </>
  );
};

export default TotalServices;
