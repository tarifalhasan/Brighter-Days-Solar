import React from 'react';
import Container from './Container';

const Footer = () => {
  return (
    <div className="bg-[#F9F9FF]">
      <Container height="auto py-10 lg:py-16">
        <div>
          <svg
            width="42"
            height="42"
            className="pb-4"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0642 0.000488281C11.3967 1.34061 11.0127 2.85122 11.0138 4.45581C11.0153 8.97235 14.0039 12.773 18.08 13.9523C19.9222 10.244 19.3228 5.60595 16.2711 2.51044C15.0581 1.2796 13.6042 0.445838 12.0642 0.000488281Z"
              fill="#3A6451"
            />
            <path
              d="M14.0685 18.1678C12.9436 13.9684 9.17114 10.877 4.67896 10.8794C2.98249 10.88 1.38857 11.323 0 12.0981C0.430233 13.7092 1.2605 15.2328 2.50724 16.4969C5.63978 19.6753 10.3722 20.228 14.0685 18.1678Z"
              fill="#3A6451"
            />
            <path
              d="M23.679 27.6509C21.5354 31.4316 22.045 36.3392 25.23 39.5687C26.3771 40.7325 27.7406 41.5386 29.1876 42.0001C30.01 40.549 30.4874 38.8708 30.4865 37.0762C30.485 32.6543 27.623 28.9131 23.679 27.6509Z"
              fill="#3A6451"
            />
            <path
              d="M27.5641 23.8317C28.8363 27.7914 32.4982 30.6544 36.8223 30.6514C38.4621 30.6509 40.0047 30.2344 41.3603 29.5067C40.8999 28.0725 40.1171 26.7216 38.994 25.5824C35.8986 22.4417 31.2401 21.8595 27.5641 23.8317Z"
              fill="#3A6451"
            />
            <path
              d="M11.0138 37.0846C11.0144 38.8762 11.4916 40.5517 12.3131 42.0007C13.7627 41.5383 15.1285 40.7298 16.2767 39.5625C19.4558 36.3323 19.9638 31.4284 17.8213 27.6509C13.8735 28.9138 11.0108 32.6593 11.0138 37.0846Z"
              fill="#3A6451"
            />
            <path
              d="M13.9362 23.8314C10.2578 21.8568 5.59625 22.4418 2.50161 25.5869C1.3811 26.7255 0.600215 28.0749 0.140625 29.5072C1.49852 30.2361 3.04432 30.6524 4.6873 30.6512C9.00765 30.6497 12.6652 27.7878 13.9362 23.8314Z"
              fill="#3A6451"
            />
            <path
              d="M30.4865 4.44783C30.486 2.84581 30.1016 1.33798 29.435 0C27.8933 0.446206 26.438 1.28168 25.2245 2.51498C22.1772 5.61134 21.5808 10.2463 23.4208 13.952C27.4998 12.7719 30.4888 8.96779 30.4865 4.44783Z"
              fill="#3A6451"
            />
            <path
              d="M27.4323 18.1675C31.1318 20.2291 35.8673 19.6748 38.9997 16.4903C40.2427 15.2274 41.071 13.7062 41.5004 12.0979C40.1097 11.3217 38.5133 10.8785 36.8141 10.8794C32.3249 10.8811 28.5571 13.9718 27.4323 18.1675Z"
              fill="#3A6451"
            />
          </svg>

          <h2 className="text-[24px] lg:max-w-[60%] w-full leading-[36px] font-normal text-dark">
            Get in touch with our friendly team now, we’re happy to help with
            any questions you may have
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row  relative before:absolute before:h-[80%] before:w-[1px] before:bg-slate-400/20 before:inset-0  before:left-[23%] before:top-[10%]   justify-between items-center">
          <div className="w-full lg:w-1/2  grid gap-7 lg:grid-cols-2 py-5">
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
          <div className="w-full  lg:w-1/2">
            <ul className=" hidden lg:flex items-center  justify-end gap-5">
              <li className="text-base text-dark">Home</li>
              <li className="text-base text-dark">About</li>
              <li className="text-base text-dark">Privacy Policy</li>
              <li className="text-base text-dark">Terms of use</li>
              <li className="text-base text-dark">Blog</li>
            </ul>
            <h3 className="text-base text-center lg:text-right opacity-50 text-dark">
              Copyright © 2023 Brighter Days Solar LTD. All rights reserved.
            </h3>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
