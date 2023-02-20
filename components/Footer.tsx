import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/eVisaWhite.png';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

function Footer() {
  return (
    <footer className="p-2 h-80 border-t border-gray-200 flex flex-col items-center justify-center gap-1 bg-[#013068] mt-5">
      <div>
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

      <div>
        <span className="text-lg">
          © 2023{' '}
          <a href="https://egyptair.com/" className="hover:underline">
            EGYPTAIR
          </a>
          . All Rights Reserved.
        </span>
      </div>

      <div className="">
        <span className="text-lg text-gray-100">
          Legal Disclaimer: This website is not affilated with the
          government
        </span>
      </div>

      <div className="flex justify-center items-center">
        <CheckBadgeIcon className="h-20 text-green-500" />
        <h2 className="text-2xl">Secure</h2>
      </div>
      <div className="">
        <span className="text-lg text-center">
          Terms & Conditions | Privacy Policy | Legal Disclaimer |
          Refund Policy
        </span>
      </div>
    </footer>
  );
}

export default Footer;
