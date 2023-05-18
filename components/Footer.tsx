import React from 'react';
import Container from './Container';

const Footer = () => {
  return (
    <div className="bg-[#F9F9FF]">
      <Container height="auto py-10 lg:py-16">
        <div>
          <h2 className="text-[24px] lg:max-w-[60%] w-full leading-[36px] font-normal text-primary">
            Get in touch with our friendly team now, we’re happy to help with
            any questions you may have
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full lg:w-1/2 grid grid-cols-2 py-5">
            <ul className="block border-r-2 border-white border-opacity-70">
              <li className="text-base text-dark">01656 667 345</li>
              <li className="text-base text-dark">
                info@brighterdayssolar.co.uk
              </li>
              <li className="text-base text-dark">Social icons</li>
            </ul>
            <ul className="block">
              <li className="text-base text-dark">Brighter Days Solar LTD</li>
              <li className="text-base text-dark">
                Unit 3 Newmarket, Ogmore Vale
              </li>
              <li className="text-base text-dark">Bridgend, CF32 7AQ</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2">
            <ul className="flex items-center justify-end gap-5">
              <li className="text-base text-dark">Home</li>
              <li className="text-base text-dark">About</li>
              <li className="text-base text-dark">Privacy Policy</li>
              <li className="text-base text-dark">Terms of use</li>
              <li className="text-base text-dark">Blog</li>
            </ul>
            <h3 className="text-base text-center opacity-50 text-dark">
              Copyright © 2023 Brighter Days Solar LTD. All rights reserved.
            </h3>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
