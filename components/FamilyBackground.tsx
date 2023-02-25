import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import { FormWrapper } from './FormWrapper';

export const FamilyBackground = () => {
  return (
    <FormWrapper>
      <h2 className="text-lg sm:text-2xl lg:text-3xl text-[#2c3072] dark:text-white font-bold mb-4">
        Family Background
      </h2>
      <hr />
      <div className="md:flex items-center gap-5 mt-4">
        <label
          htmlFor="fatherFirstName"
          className="w-full md:w-1/2 flex flex-row items-center mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          WHAT IS YOUR {`FATHER'S`} NAME
          <span className="text-red-400"> * </span>
          <a
            href="#"
            className="group relative inline-block text-[#2c3072] underline hover:text-red-500 duration-300"
          >
            <QuestionMarkCircleIcon className="h-6 dark:text-white" />
            <span className="absolute hidden group-hover:flex -left-5 -top-2 -translate-y-full w-48 px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
              Most passport numbers are 8 to 10 characters long. If
              the number you plan to add is much longher or much
              smaller than this, check you are using the right number.
            </span>
          </a>
        </label>
        <div className="flex flex-row gap-1 w-full md:w-1/2">
          <input
            type="text"
            id="fatherFirstName"
            className="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-base focus:ring-blue-500 focus:border-blue-500 block p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-700"
            placeholder="Father's First (Given) Name(s)"
            // required
          />
          <input
            type="text"
            id="fatherFamilyName"
            className="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-base focus:ring-blue-500 focus:border-blue-500 block p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-700"
            placeholder="Father's Family Name(s)"
            // required
          />
        </div>
      </div>

      <div className="md:flex items-center gap-5 mt-4">
        <label
          htmlFor="fatherDateOfBirth"
          className="w-full md:w-1/2 block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          DO YOU KNOW YOUR {`FATHER'S`} DATE OF BIRTH?
          <span className="text-red-400">*</span>
        </label>

        <div className="flex">
          <div className="flex items-center mr-4">
            <input
              id="fatherDateOfBirth-radio"
              type="radio"
              value="yes"
              name="fatherDateOfBirth-radio-group"
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="fatherDateOfBirth-radio"
              className="ml-2 text-lg text-gray-900 dark:text-gray-300"
            >
              Yes
            </label>
          </div>
          <div className="flex items-center mr-4">
            <input
              id="fatherDateOfBirth-radio-2"
              type="radio"
              value="no"
              name="fatherDateOfBirth-radio-group"
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="fatherDateOfBirth-radio-2"
              className="ml-2 text-lg text-gray-900 dark:text-gray-300"
            >
              No
            </label>
          </div>
        </div>
      </div>
    </FormWrapper>
  );
};
