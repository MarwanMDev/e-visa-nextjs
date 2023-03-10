'use client';

import {
  AcademicCapIcon,
  GlobeAltIcon,
  BriefcaseIcon,
  DocumentIcon,
} from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <div className="shadow p-5 border border-gray-100 m-auto mx-auto w-full sm:w-[768px] lg:w-[900px] xl:w-[1240px] 2xl:w-[1600px] flex flex-col space-y-10 bg-white dark:bg-zinc-700 transition-all duration-700">
      <h1 className="text-3xl lg:text-4xl xl:text-5xl text-black dark:text-white tracking-widest text-center">
        GET STARTED
      </h1>

      <div className="w-full">
        <label className="block mb-2 text-base md:text-lg lg:text-xl font-bold text-gray-900 dark:text-white">
          What is your citizenship ?
        </label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-base focus:ring-blue-500 focus:border-blue-500 block w-full p-3 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-200"
        >
          <option>United States</option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </select>
      </div>

      <div className="flex items-center mb-4">
        <input
          id="checkbox-1"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label className="ml-2 text-xs md:text-sm lg:text-base font-medium text-gray-900 dark:text-gray-300">
          I have more than one citizenship
        </label>
      </div>

      <p className="text-black text-base md:text-lg lg:text-xl dark:text-white font-bold">
        Select reason(s) for travel to Egypt:
      </p>

      <div className="text-black flex flex-col lg:flex-row justify-center items-center w-full gap-2 md:gap-2">
        <div className="w-full h-36 sm:h-48 flex flex-col items-center justify-center space-y-2 p-10 border bg-[#2c3072] dark:bg-transparent text-white hover:scale-105 transition duration-700 ease-out cursor-pointer">
          <DocumentIcon className="h-18 md:h-20 w-10 md:w-20" />

          <h2 className="font-semibold text-base md:text-lg">
            Tourism
          </h2>
        </div>
        <div className="w-full h-36 sm:h-48 flex flex-col items-center justify-center space-y-2 p-10 border bg-[#2c3072] dark:bg-transparent text-white hover:scale-105 transition duration-700 ease-out cursor-pointer">
          <BriefcaseIcon className="h-20 w-20" />

          <h2 className="font-semibold text-base md:text-lg">
            Business
          </h2>
        </div>
        <div className="w-full h-36 sm:h-48 flex flex-col items-center justify-center space-y-2 p-10 border bg-[#2c3072] dark:bg-transparent text-white hover:scale-105 transition duration-700 ease-out cursor-pointer">
          <GlobeAltIcon className="h-20 w-20" />

          <h2 className="font-semibold text-base md:text-lg">
            Transit
          </h2>
        </div>
        <div className="w-full h-36 sm:h-48 flex flex-col items-center justify-center space-y-2 p-10 border bg-[#2c3072] dark:bg-transparent text-white hover:scale-105 transition duration-700 ease-out cursor-pointer">
          <AcademicCapIcon className="h-20 w-20" />

          <h2 className="font-semibold text-base md:text-lg">
            Study
          </h2>
        </div>
      </div>

      <div className="w-full text-center">
        <button
          type="button"
          onClick={() =>
            router.push('visa/PkOvL59xXwh8vX3QK6yp/apply')
          }
          className="uppercase w-full md:w-1/4 p-5 text-base md:text-lg font-medium text-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
