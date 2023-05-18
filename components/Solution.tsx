import React from 'react';
import Container from './Container';

const Solution = () => {
  return (
    <div className="bg-[#F9F9FF] py-10 relative lg:py-16">
      <Container height="auto">
        <div className="flex gap-x-10 flex-col gap-y-16 lg:flex-row">
          <div className="basis-[55%]">
            <span className="section-title">RENEWABLE SOLUTIONS</span>
            <h2 className="  text-lg md:text-xl text-dark">
              Why choose <span className=" text-primary">solar</span>?
            </h2>
            <div className="py-5">
              <p className="text-[#5D5F6D] text-base">
                Switching to solar energy can provide numerous benefits,
                including energy savings, reduced carbon emissions, and
                increased home value.
              </p>
              <p className="text-[#5D5F6D] pt-10 text-base">
                Solar energy is a clean and renewable source of energy that can
                help you save money on your energy bills while contributing to a
                more sustainable future. Our team of experts can help you
                understand the many benefits of solar energy and how it can help
                you achieve your energy goals.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <button className="btn-green">Get a free quote</button>
              <span className="text-base  text-primary">01656 667 345</span>
            </div>
          </div>
          <div className="basis-[45%] relative grid grid-rows-3  space-y-4">
            <div className="bg-white  flex flex-col justify-center py-4 px-5 rounded-md">
              <h2 className="text-[18px] text-[#000000] leading-7">
                Lower Carbon Footprint
              </h2>
              <p className="text-base text-[#5D5F6D]">
                Generate your own clean energy from the sun, reduce your
                reliance on traditional energy sources
              </p>
            </div>
            <div className="bg-white flex flex-col justify-center py-4 px-5 rounded-md">
              <h2 className="text-[18px] text-[#000000] leading-7">
                Reduced Energy Bills
              </h2>
              <p className="text-base text-[#5D5F6D]">
                Investing in solar provides reliable energy generation and
                savings for decades.
              </p>
            </div>
            <div className="bg-white flex flex-col justify-center py-4  px-5 rounded-md">
              <h2 className="text-[18px] text-[#000000] leading-7">
                Energy Independence
              </h2>
              <p className="text-base text-[#5D5F6D]">
                Generating your own electricity helps you become less reliant on
                the grid.
              </p>
            </div>
            <div className=" absolute top-[96%]  right-0">
              <svg
                width="340"
                height="16"
                viewBox="0 0 340 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 7.83846e-05L340 8.2293e-05L340 15.9993L-6.99351e-07 15.9993L0 7.83846e-05Z"
                  fill="#3A6451"
                  fillOpacity="0.4"
                />
                <path
                  d="M49.1334 -1.27142e-05L340 8.2293e-05L340 15.9993L49.1334 15.9992L49.1334 -1.27142e-05Z"
                  fill="#3A6451"
                />
                <path
                  d="M48.9706 0.0257144L259.794 0.0257168L259.794 16L48.9706 16L48.9706 0.0257144Z"
                  fill="white"
                  fillOpacity="0.3"
                />
              </svg>
            </div>
          </div>
        </div>
      </Container>
      <div className=" hidden lg:block absolute left-[95%] 2xl:left-[82%] top-[10%]">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="16" y="16" width="16" height="16" fill="#3A6451" />
          <rect width="16" height="16" fill="#3A6451" fillOpacity="0.5" />
        </svg>
      </div>
    </div>
  );
};

export default Solution;
