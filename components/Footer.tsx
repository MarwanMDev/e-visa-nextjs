'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/eVisa.png';
import logoWhite from '../public/eVisaWhite.png';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';

function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="p-2 h-80 border-t border-gray-200 flex flex-col items-center justify-center gap-1 bg-white mt-5 dark:bg-zinc-700 transition-all duration-700">
      <div>
        <Link href="/">
          {theme === 'dark' ? (
            <Image
              className="cursor-pointer"
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

      <div>
        <span className="text-sm md:text-base text-black dark:text-white">
          © 2023{' '}
          <a href="https://egyptair.com/" className="hover:underline">
            EGYPTAIR
          </a>
          . All Rights Reserved.
        </span>
      </div>

      <div className="">
        <span className="text-sm md:text-base text-gray-500 dark:text-gray-400">
          Legal Disclaimer: This website is not affilated with the
          government
        </span>
      </div>

      <div className="flex justify-center items-center">
        <CheckBadgeIcon className="h-8 md:h-16 text-green-500" />
        <h2 className="text-base md:text-xl text-black dark:text-white">
          Secure
        </h2>
      </div>
      <div className="">
        <span className="text-sm md:text-base text-center text-black dark:text-white">
          Terms & Conditions | Privacy Policy | Legal Disclaimer |
          Refund Policy
        </span>
      </div>
    </footer>
  );
}

export default Footer;
