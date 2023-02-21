import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import React from 'react';

type Props = {
  params: {
    token: string;
  };
};

function Confirmation({ params: { token } }: Props) {
  return (
    <div className="mb-auto text-white w-full sm:w-[768px] lg:w-[900px] xl:w-[1240px] 2xl:w-[1600px] mx-auto bg-white p-5">
      <div className="flex flex-col justify-center items-center gap-3 text-black">
        <CheckBadgeIcon className="text-green-500 h-28" />

        <h2 className="mt-10 text-center text-3xl lg:text-4xl xl:text-5xl tracking-widest">
          CONGRATULATIONS
        </h2>
        <p className="text-center text-lg md:text-2xl font-thin">
          Thank you, you are entitled to a Visit Permit to EGYPT.
        </p>
        <p className="font-bold text-center text-sm md:text-lg">
          If you apply, make sure:
        </p>
        <p className="flex flex-row justify-center items-center text-sm md:text-lg">
          <CheckBadgeIcon className="h-6 text-green-600" />
          You’re visiting for a maximum of 6 months
        </p>
        <p className="flex flex-row justify-center items-center text-sm md:text-lg">
          <CheckBadgeIcon className="h-6 text-green-600" />
          You’re traveling exclusively for business, transit or
          pleasure
        </p>
      </div>
    </div>
  );
}

export default Confirmation;
