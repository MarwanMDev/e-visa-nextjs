import React from 'react';
import { FormWrapper } from './FormWrapper';

export const SecurityQuestions = () => {
  return (
    <FormWrapper>
      <h2 className="text-lg sm:text-2xl lg:text-3xl text-[#2c3072] dark:text-white font-bold mb-4">
        Security Questions
      </h2>
      <hr />

      <div className="md:flex items-center gap-5 mt-4">
        <label
          htmlFor="military"
          className="w-full md:w-3/4 block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          1) HAVE YOU EVER SERVED IN THE MILITARY?
          <span className="text-red-400">*</span>
        </label>

        <div className="flex">
          <div className="flex items-center mr-4">
            <input
              id="military-radio"
              type="radio"
              value="yes"
              name="military-radio-group"
              className="w-4 h-4 md:w-5 md:h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="military-radio"
              className="ml-2 text-sm md:text-lg text-gray-900 dark:text-gray-300"
            >
              Yes
            </label>
          </div>
          <div className="flex items-center mr-4">
            <input
              id="military-radio-2"
              type="radio"
              value="no"
              name="military-radio-group"
              className="w-4 h-4 md:w-5 md:h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="military-radio-2"
              className="ml-2 text-sm md:text-lg text-gray-900 dark:text-gray-300"
            >
              No
            </label>
          </div>
        </div>
      </div>

      <div className="md:flex items-center gap-5 mt-4">
        <label
          htmlFor="military"
          className="w-full md:w-3/4 block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          2) HAVE YOU TRAVELED OUTSIDE YOUR COUNTRY (NOT INCLUDING THE
          UNITED STATES) IN THE LAST 5 YEARS?
          <span className="text-red-400">*</span>
        </label>

        <label
          htmlFor="Toggle3"
          className="inline-flex items-center p-2 rounded-md cursor-pointer text-black"
        >
          <input
            id="Toggle3"
            type="checkbox"
            className="hidden peer"
          />
          <span className="px-6 py-3 rounded-l-md bg-red-500 peer-checked:bg-gray-200 transition-all duration-700">
            No
          </span>
          <span className="px-6 py-3 rounded-r-md bg-gray-200 peer-checked:bg-red-500 transition-all duration-700">
            Yes
          </span>
        </label>
      </div>

      <div className="md:flex items-center gap-5 mt-4">
        <label
          htmlFor="military"
          className="w-full md:w-3/4 block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          3) DO YOU HAVE ANY SPECIALIZED SKILLS OR TRAINING, SUCH AS
          FIREARMS, EXPLOSIVES, NUCLEAR, BIOLOGICAL, OR CHEMICAL
          EXPERIENCE?
          <span className="text-red-400">*</span>
        </label>

        <label
          htmlFor="Toggle4"
          className="inline-flex items-center p-2 rounded-md cursor-pointer text-black"
        >
          <input
            id="Toggle4"
            type="checkbox"
            className="hidden peer"
          />
          <span className="px-6 py-3 rounded-l-md bg-red-500 peer-checked:bg-gray-200 transition-all duration-700">
            No
          </span>
          <span className="px-6 py-3 rounded-r-md bg-gray-200 peer-checked:bg-red-500 transition-all duration-700">
            Yes
          </span>
        </label>
      </div>

      <div className="md:flex items-center gap-5 mt-4">
        <label
          htmlFor="military"
          className="w-full md:w-3/4 block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          4) HAVE YOU EVER SERVED IN, BEEN A MEMBER OF, OR BEEN
          INVOLVED WITH A PARAMILITARY UNIT, VIGILANTE UNIT, REBEL
          GROUP, GUERRILLA GROUP, OR INSURGENT ORGANIZATION?
          <span className="text-red-400">*</span>
        </label>

        <label
          htmlFor="Toggle5"
          className="inline-flex items-center p-2 rounded-md cursor-pointer text-black"
        >
          <input
            id="Toggle5"
            type="checkbox"
            className="hidden peer"
          />
          <span className="px-6 py-3 rounded-l-md bg-red-500 peer-checked:bg-gray-200 transition-all duration-700">
            No
          </span>
          <span className="px-6 py-3 rounded-r-md bg-gray-200 peer-checked:bg-red-500 transition-all duration-700">
            Yes
          </span>
        </label>
      </div>

      <div className="md:flex items-center gap-5 mt-4">
        <label
          htmlFor="military"
          className="w-full md:w-3/4 block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          5) DO YOU HAVE A COMMUNICABLE DISEASE OF PUBLIC HEALTH
          SIGNIFICANCE? (COMMUNICABLE DISEASES OF PUBLIC SIGNIFICANCE
          INCLUDE CHANCROID, GONORRHEA, GRANULOMA INGUINALE,
          INFECTIOUS LEPROSY, LYMPHOGRANULOMA VENEREUM, INFECTIOUS
          STAGE SYPHILIS, ACTIVE TUBERCULOSIS, AND OTHER DISEASES AS
          DETERMINED BY THE DEPARTMENT OF HEALTH AND HUMAN SERVICES.)
          <span className="text-red-400">*</span>
        </label>

        <label
          htmlFor="Toggle6"
          className="inline-flex items-center p-2 rounded-md cursor-pointer text-black"
        >
          <input
            id="Toggle6"
            type="checkbox"
            className="hidden peer"
          />
          <span className="px-6 py-3 rounded-l-md bg-red-500 peer-checked:bg-gray-200 transition-all duration-700">
            No
          </span>
          <span className="px-6 py-3 rounded-r-md bg-gray-200 peer-checked:bg-red-500 transition-all duration-700">
            Yes
          </span>
        </label>
      </div>

      <div className="md:flex items-center gap-5 mt-4">
        <label
          htmlFor="military"
          className="w-full md:w-3/4 block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          6) DO YOU HAVE A MENTAL OR PHYSICAL DISORDER THAT POSES OR
          IS LIKELY TO POSE A THREAT TO THE SAFETY OR WELFARE OF
          YOURSELF OR OTHERS?
          <span className="text-red-400">*</span>
        </label>

        <label
          htmlFor="Toggle7"
          className="inline-flex items-center p-2 rounded-md cursor-pointer text-black"
        >
          <input
            id="Toggle7"
            type="checkbox"
            className="hidden peer"
          />
          <span className="px-6 py-3 rounded-l-md bg-red-500 peer-checked:bg-gray-200 transition-all duration-700">
            No
          </span>
          <span className="px-6 py-3 rounded-r-md bg-gray-200 peer-checked:bg-red-500 transition-all duration-700">
            Yes
          </span>
        </label>
      </div>
    </FormWrapper>
  );
};
