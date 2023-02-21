import {
  AcademicCapIcon,
  GlobeAltIcon,
  BriefcaseIcon,
  DocumentIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="shadow mt-5 p-5 rounded-md mb-auto mx-auto max-w-7xl w-3/4 flex flex-col space-y-10 bg-white">
      <h1 className="text-5xl font-normal text-black tracking-widest text-center">
        GET STARTED
      </h1>

      <div className="w-full">
        <label className="block mb-2 text-lg font-bold text-gray-900">
          What is your citizenship ?
        </label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-black text-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5"
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
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring"
        />
        <label className="ml-2 text-lg text-black">
          I have more than one citizenship
        </label>
      </div>

      <p className="text-black text-lg font-bold">
        Select reason(s) for travel to Egypt:
      </p>

      <div className="text-black flex flex-col lg:flex-row justify-center items-center w-full gap-2 md:gap-2">
        <div className="w-full h-48 flex flex-col items-center justify-center space-y-2 p-10 border bg-[#2c3072] text-white hover:scale-105 transition duration-200 ease-out cursor-pointer">
          <DocumentIcon className="h-20 w-20" />

          <h2 className="font-semibold text-lg">Tourism</h2>
        </div>
        <div className="w-full h-48 flex flex-col items-center justify-center space-y-2 p-10 border bg-[#2c3072] text-white hover:scale-105 transition duration-200 ease-out cursor-pointer">
          <BriefcaseIcon className="h-20 w-20" />

          <h2 className="font-semibold text-lg">Business</h2>
        </div>
        <div className="w-full h-48 flex flex-col items-center justify-center space-y-2 p-10 border bg-[#2c3072] text-white hover:scale-105 transition duration-200 ease-out cursor-pointer">
          <GlobeAltIcon className="h-20 w-20" />

          <h2 className="font-semibold text-lg">Transit</h2>
        </div>
        <div className="w-full h-48 flex flex-col items-center justify-center space-y-2 p-10 border bg-[#2c3072] text-white hover:scale-105 transition duration-200 ease-out cursor-pointer">
          <AcademicCapIcon className="h-20 w-20" />

          <h2 className="font-semibold text-lg">Study</h2>
        </div>
      </div>

      <div className="w-full text-center">
        {/* <button
          type="button"
          onClick={() =>
            router.push('visa/PkOvL59xXwh8vX3QK6yp/apply')
          }
          className="uppercase w-1/2 p-5 text-lg font-medium text-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
        >
          Continue
        </button> */}
        <Link href="visa/PkOvL59xXwh8vX3QK6yp/apply">Continue</Link>
      </div>
    </div>
  );
}
