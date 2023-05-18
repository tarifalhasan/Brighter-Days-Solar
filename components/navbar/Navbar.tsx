'use client';

import React from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';

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
      <div className="logo">
        <Link href={'/'}>
          <Image
            className="max-w-[80%] w-full"
            src={Logo}
            alt="brighter_days"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
