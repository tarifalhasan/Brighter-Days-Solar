'use client';

import React from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';
import { TbPhoneCall } from 'react-icons/tb';
import Logo from '../../images/logo.png';
import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
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
  const activeSegment = useSelectedLayoutSegment();

  return (
    <nav className=" hidden lg:flex py-7 items-center justify-between">
      <div className="logo basis-[30%] ">
        <Link href={'/'}>
          <Image
            className=" 2xl:max-w-[70%] w-full"
            src={Logo}
            alt="brighter_days"
          />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <ul className="flex items-center gap-x-5">
          {Links.map((link, i) => (
            <li key={i}>
              <Link
                className={`${
                  i === 0 ? 'opacity-100' : 'opacity-80'
                } text-base font-normal text-white`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button className=" btn-white text-primary font-medium ">
          <span className="flex w-full items-center gap-2">
            <TbPhoneCall size={20} />
            <span className="text-base">01656 667 345</span>
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
