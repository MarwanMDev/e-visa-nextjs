'use client';

import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/24/solid';
import logo from '../public/eVisa.png';
import logoWhite from '../public/eVisaWhite.png';
import React from 'react';
import DarkModeButton from './DarkModeButton';
import { useTheme } from 'next-themes';

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className="bg-white mb-4 flex flex-col md:flex-row items-center justify-between space-x-2 font-bold px-10 py-5 shadow-lg dark:bg-zinc-700 transition-all duration-700">
      <div className="flex items-center">
        <Link href="/">
          {theme === 'dark' ? (
            <Image
              className="cursor-pointer object-contain w-[220px] md:w-[280px]"
              src={logoWhite}
              width={360}
              height={360}
              alt="logo"
            />
          ) : (
            <Image
              className="cursor-pointer object-contain w-[220px] md:w-[280px]"
              src={logo}
              width={360}
              height={360}
              alt="logo"
            />
          )}
        </Link>
      </div>

      <div className="hidden 2xl:inline-flex flex-row justify-center items-center space-x-2">
        <h2 className="text-4xl text-[#2c3072] dark:text-white transition duration-100">
          Join More Than 95,000+ Satisfied Travelers
        </h2>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((value, i) => (
            <StarIcon className="h-6 text-yellow-400" key={i} />
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-3 items-center justify-center ">
        <div>
          <DarkModeButton />
        </div>
        <div>
          <h2 className="text-xs md:text-xl text-[#2c3072] dark:text-white transition duration-100">
            English
          </h2>
        </div>

        <Link
          href="/"
          className="hidden md:inline px-3 py-2 md:px-5 md:py-3 text-xs md:text-xl bg-gray-200 text-[#2c3072] md:font-medium"
        >
          Live Help
        </Link>
      </div>
    </header>
  );
};

export default Header;
