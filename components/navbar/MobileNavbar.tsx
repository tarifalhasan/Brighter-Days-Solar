'use client';

import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import logo from '../../images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { RxCross2 } from 'react-icons/rx';

const Links = [
  {
    label: 'Home',
    href: '/',
    targetSegment: null,
  },
  {
    label: 'services',
    href: '#services',
    targetSegment: 'services',
  },
  {
    label: 'about',
    href: '#about',
    targetSegment: 'about',
  },
  {
    label: 'blog',
    href: '#blog',
    targetSegment: 'blog',
  },
  {
    label: 'contact',
    href: '#contact',
    targetSegment: 'contact',
  },
];

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={` lg:hidden  2xl:px-0 px-4 pt-6 w-full h-full   `}>
      <div className="logo  flex  justify-between">
        <div className="flex items-center">
          <Image src={logo} className=" w-[80%]" alt="" />
        </div>
        <FiMenu
          onClick={() => openNavbar()}
          className="text-white "
          size={36}
        />
      </div>
      <div
        className={` fixed bg-primary  mobile_navbar 2xl:px-0 px-4 pt-6 w-full h-full   ${
          isOpen ? 'right-0' : 'right-full'
        }  z-50 top-0 `}
      >
        <div className=" flex  items-center justify-between">
          <Image src={logo} className=" w-[70%]" alt="" />
          <RxCross2
            onClick={() => openNavbar()}
            className="text-white "
            size={36}
          />
        </div>
        <ul className="flex flex-col pt-7 md:flex-row gap-6">
          {Links.map(link => (
            <li key={link.href} onClick={openNavbar}>
              <Link
                href={link.href}
                className="block py-2 pl-3 pr-4 text-white text-base leading-[19px] font-bold font-segoe"
                aria-current="page"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
