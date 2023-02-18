import { Inter } from '@next/font/google';
import styles from './page.module.css';
import {
  AcademicCapIcon,
  GlobeAltIcon,
  BriefcaseIcon,
  DocumentIcon,
} from '@heroicons/react/24/solid';

const inter = Inter({ subsets: ['latin'] });

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
          className="bg-gray-50 border border-gray-300 text-black text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5"
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
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring"
        />
        <label className="ml-2 text-lg text-black">
          I have more than one citizenship
        </label>
      </div>

      <p className="text-black text-lg font-bold">
        Select reason(s) for travel to Egypt:
      </p>

      <div className="text-black flex flex-col lg:flex-row justify-around items-center w-full space-y-2 md:space-x-2">
        <div className="w-full flex flex-col items-center justify-center space-y-2 p-10 border bg-slate-800 text-white rounded-md hover:scale-105 transition duration-200 ease-out cursor-pointer">
          <DocumentIcon className="h-20 w-20" />

          <h2 className="font-semibold text-lg">Tourism</h2>
        </div>
        <div className="w-full flex flex-col items-center justify-center space-y-2 p-10 border bg-slate-800 text-white rounded-md hover:scale-105 transition duration-200 ease-out cursor-pointer">
          <BriefcaseIcon className="h-20 w-20" />

          <h2 className="font-semibold text-lg">Business</h2>
        </div>
        <div className="w-full flex flex-col items-center justify-center space-y-2 p-10 border bg-slate-800 text-white rounded-md hover:scale-105 transition duration-200 ease-out cursor-pointer">
          <GlobeAltIcon className="h-20 w-20" />

          <h2 className="font-semibold text-lg">Transit</h2>
        </div>
        <div className="w-full flex flex-col items-center justify-center space-y-2 p-10 border bg-slate-800 text-white rounded-md hover:scale-105 transition duration-200 ease-out cursor-pointer">
          <AcademicCapIcon className="h-20 w-20" />

          <h2 className="font-semibold text-lg">Study</h2>
        </div>
      </div>

      <div className="w-full text-center">
        <button
          type="button"
          className="uppercase w-1/2 px-5 py-3 text-base font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
