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
       <h2 class="text-lg md:text-[36px]  lg:leading-[50px] font-normal text-dark">
       Maintain, <span class=" text-primary">Repair</span> & Cleaning
       </h2>
      `,
      des: "Solar energy systems require regular maintenance to ensure optimal performance. That's why we offer comprehensive maintenance and repair services to keep your system running efficiently.  We’re available to troubleshoot any issues and provide quick and effective solutions. We also offer monitoring services to detect any issues early.",
      image: image1,
    },
    {
      title: 'Commercial Solar Power Systems',
      heading: `
       <h2 class="text-lg md:text-[36px] lg:leading-[50px] font-normal text-dark">
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
        <div className=" py-10 relative md:py-16">
          <div className=" space-y-2">
            <span className="section-title text-white opacity-75">
              Our Process
            </span>
            <h2 className=" text-lg lg:max-w-[90%] md:text-xl text-white">
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
              <div
                key={i}
                className="px-5 relative py-3 rounded-md bg-white border-b-2 border-gray-200" // Added border-b-2 and border-gray-200 classes
              >
                <h4 className="text-[18px]">{data.title}</h4>
                <p className="text-base text-[#232536] py-1 opacity-60">
                  {data.heading}
                </p>
              </div>
            ))}
          </div>

          <div className=" absolute right-0 top-[1%] lg:top-[10%]">
            <svg
              width="54"
              height="55"
              viewBox="0 0 54 55"
              className="w-[50%] lg:w-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.6292 0.000488281C14.7644 1.72729 14.2669 3.67379 14.2684 5.74137C14.2704 11.5611 18.1421 16.4584 23.4226 17.9781C25.8092 13.1997 25.0327 7.22338 21.0792 3.23468C19.5078 1.64868 17.6242 0.574343 15.6292 0.000488281Z"
                fill="white"
              />
              <path
                d="M18.2257 23.4101C16.7683 17.999 11.8812 14.0156 6.06157 14.0187C3.86379 14.0195 1.79889 14.5903 0 15.5891C0.557365 17.6649 1.63297 19.6283 3.24812 21.2572C7.30631 25.3526 13.4372 26.0648 18.2257 23.4101Z"
                fill="white"
              />
              <path
                d="M30.676 35.6295C27.8989 40.5011 28.5592 46.8248 32.6853 50.9862C34.1713 52.4857 35.9377 53.5245 37.8123 54.1192C38.8778 52.2494 39.4962 50.0869 39.4951 47.7745C39.4931 42.0767 35.7854 37.2559 30.676 35.6295Z"
                fill="white"
              />
              <path
                d="M35.7092 30.708C37.3573 35.8102 42.1013 39.4993 47.7032 39.4955C49.8275 39.4948 51.826 38.958 53.5821 38.0204C52.9856 36.1723 51.9715 34.4317 50.5166 32.9638C46.5065 28.9169 40.4714 28.1666 35.7092 30.708Z"
                fill="white"
              />
              <path
                d="M14.2684 47.7849C14.2692 50.0936 14.8874 52.2524 15.9517 54.1195C17.8296 53.5237 19.5989 52.4819 21.0865 50.9779C25.205 46.8155 25.863 40.4966 23.0875 35.6292C17.9731 37.2565 14.2645 42.0828 14.2684 47.7849Z"
                fill="white"
              />
              <path
                d="M18.0543 30.708C13.2889 28.1636 7.24987 28.9173 3.24077 32.97C1.78915 34.4371 0.777525 36.1759 0.182129 38.0215C1.94128 38.9606 3.94384 39.4971 6.07232 39.4956C11.6693 39.4937 16.4077 35.8059 18.0543 30.708Z"
                fill="white"
              />
              <path
                d="M39.4951 5.73123C39.4944 3.66696 38.9965 1.72405 38.1328 0C36.1356 0.574957 34.2503 1.6515 32.6782 3.24067C28.7304 7.23048 27.9578 13.2028 30.3415 17.9779C35.6258 16.4572 39.4981 11.5554 39.4951 5.73123Z"
                fill="white"
              />
              <path
                d="M35.5383 23.4097C40.3311 26.0662 46.4659 25.3519 50.5239 21.2486C52.1342 19.6212 53.2072 17.6611 53.7636 15.5888C51.9618 14.5887 49.8937 14.0176 47.6924 14.0187C41.8768 14.0209 36.9956 18.0034 35.5383 23.4097Z"
                fill="white"
              />
            </svg>
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
