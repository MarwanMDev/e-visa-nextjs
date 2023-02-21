'use client';
import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/24/solid';
import logo from '../public/eVisa.png';
import React from 'react';
import DarkModeButton from './DarkModeButton';

const Header = () => {
  return (
    <header className="bg-white mb-2 flex items-center justify-between space-x-2 font-bold px-10 py-5 shadow-lg">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src={logo}
            width={360}
            height={360}
            alt="logo"
          />
        </Link>
      </div>

      <div className="hidden xl:inline-flex flex-row justify-center items-center space-x-2">
        <h2 className="text-4xl text-[#2c3072]">
          Join More Than 95,000+ Satisfied Travelers
        </h2>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((value, i) => (
            <StarIcon className="h-6 text-yellow-400" key={i} />
          ))}
        </div>
      </div>
      <div className="flex flex-row space-x-5 items-center justify-center">
        <div>
          <DarkModeButton />
        </div>
        <div>
          <h2 className="text-xl text-[#2c3072]">English</h2>
        </div>

        <Link
          href="/"
          className="px-5 py-3 text-sm md:text-xl bg-gray-200 text-[#2c3072] flex items-center rounded-md text-center font-medium"
        >
          Live Help
        </Link>
      </div>
    </header>
  );
};

export default Header;
