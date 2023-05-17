import React from 'react';
import Container from './Container';
import image1 from '../images/OurProcess/1.png';
import image2 from '../images/OurProcess/2.png';
import Image from 'next/image';
const OurProcess = () => {
  const Data = [
    {
      title: '1. First contact',
      heading:
        'Take the first step by reaching out to us for a consultation on solar panel installation and maintenance.',
    },
    {
      title: '2. Arranging your installation',
      heading: `We'll guide you through scheduling and planning to ensure a hassle-free solar panel installation.`,
    },
    {
      title: '3. Scaffolding & mounts',
      heading: `Our experts use reliable scaffolding and mounts to securely position your solar panels.`,
    },
    {
      title: '4. Panels, inverter & battery',
      heading:
        'Our experienced solar team will securely and safely fit your new equipment to your home/business.',
    },
    {
      title: '5. Connect to the grid',
      heading:
        'We handle the necessary connections to seamlessly integrate your system with the grid.',
    },
    {
      title: '6. Clean renewable energy',
      heading:
        'Embrace a greener future with our solar solutions, harnessing clean and renewable energy sources.',
    },
  ];
  const DataServices = [
    {
      title: 'solar panel maintenance',
      heading: `
       <h2 class="text-lg md:text-[36px] leading-[50px] font-normal text-dark">
       Maintain, <span class=" text-primary">Repair</span> & Cleaning
       </h2>
      `,
      des: "Solar energy systems require regular maintenance to ensure optimal performance. That's why we offer comprehensive maintenance and repair services to keep your system running efficiently.  We’re available to troubleshoot any issues and provide quick and effective solutions. We also offer monitoring services to detect any issues early.",
      image: image1,
    },
    {
      title: 'Commercial Solar Power Systems',
      heading: `
       <h2 class="text-lg md:text-[36px] leading-[50px] font-normal text-dark">
      Solutions <span class="text-[#3A6451]">for businesses</span>  looking to save on energy costs and reduce their carbon footprint
       </h2>
      `,
      des: "We offer comprehensive solutions for businesses looking to save on energy costs and reduce their carbon footprint. We specialise in designing and installing high-quality photovoltaic systems that meet your specific energy needs. We'll work closely with you to customise a solution that meets your requirements and budget. By partnering with us, you can enjoy significant savings and contribute to a more sustainable future.",
      image: image2,
    },
  ];
  return (
    <div className=" bg-primary">
      <Container height="auto">
        <div className=" py-10 md:py-16">
          <div className=" space-y-6">
            <span className="section-title text-white opacity-75">
              Our Process
            </span>
            <h2 className=" text-lg md:text-xl text-white">
              We take a custom approach to designing and installing solar energy
              systems
            </h2>
            <p className="text-base text-white opacity-60">
              We will work with you to understand your energy requirements and
              design a system that meets your specific needs. Our installation
              process is seamless and hassle-free, with minimal disruption to
              your daily routine. We utilise the latest technology, ensuring our
              installations are of the highest quality possible.
            </p>
          </div>
          <div className="grid pt-8 md:grid-cols-2 gap-5 grid-rows-6 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2">
            {Data.map((data, i) => (
              <div key={i} className="px-5 py-3 rounded-md bg-white">
                <h4 className="text-[18px]">{data.title}</h4>
                <p className="text-base text-[#232536] py-1 opacity-60">
                  {data.heading}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <div>
        {DataServices.map((data, i) => (
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
                  {i % 2 === 0 ? (
                    <button className="btn-green">
                      <span className="flex   gap-4 items-center">
                        <span>Get a free quote</span>
                        <svg
                          width="21"
                          height="8"
                          viewBox="0 0 21 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.3536 4.45145C20.5489 4.25619 20.5489 3.93961 20.3536 3.74435L17.1716 0.562366C16.9764 0.367104 16.6598 0.367104 16.4645 0.562366C16.2693 0.757629 16.2693 1.07421 16.4645 1.26947L19.293 4.0979L16.4645 6.92633C16.2693 7.12159 16.2693 7.43817 16.4645 7.63343C16.6598 7.8287 16.9764 7.8287 17.1716 7.63343L20.3536 4.45145ZM6.10352e-05 4.5979L20.0001 4.5979V3.5979L6.10352e-05 3.5979L6.10352e-05 4.5979Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </button>
                  ) : (
                    <button className=" px-4 py-3 text-base text-primary border-[1px] rounded-md border-primary">
                      01656 667 345
                    </button>
                  )}
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
      </div>
    </div>
  );
};

export default OurProcess;
