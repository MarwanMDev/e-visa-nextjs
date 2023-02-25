import { FormWrapper } from './FormWrapper';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import { ApplicantInfoData } from '@/typings';

type ApplicantInfoFormProps = ApplicantInfoData & {
  updateFields: (fields: Partial<ApplicantInfoData>) => void;
};

export function ApplicantInfo({
  email,
  firstName,
  lastName,
  fullName,
  gender,
  dob,
  maritalStatus,
  cityOfBirth,
  countryOfBirth,
  updateFields,
}: ApplicantInfoFormProps) {
  const genderChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    updateFields({ gender: e.target.value });
  };

  return (
    <FormWrapper>
      <h2 className="text-lg sm:text-2xl lg:text-3xl text-[#2c3072] dark:text-white font-bold mb-4">
        General Information
      </h2>
      <div className="mb-6 p-1 md:p-2.5">
        <label
          htmlFor="email"
          className="flex flex-row items-center mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          Email address <span className="text-red-400"> * </span>
          <a
            href="#"
            className="group relative inline-block text-[#2c3072] underline hover:text-red-500 duration-300"
          >
            <QuestionMarkCircleIcon className="h-6 dark:text-white" />
            <span className="absolute hidden group-hover:flex -left-5 -top-2 -translate-y-full w-48 px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
              Please add a personal email address that you use
              frequantly
            </span>
          </a>
        </label>
        <input
          autoFocus
          type="email"
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-700"
          placeholder="Email Address"
          // required
        />
        <p className="text-xs sm:text-base text-justify text-[#2c3072]/70 dark:text-gray-400 font-light w-full tracking-wider mt-1">
          Email Address Please make sure you enter a valid email
          address. We will use it to contact you about your
          application.
        </p>
      </div>
      <hr className="mb-8" />

      <h2 className="text-lg sm:text-2xl lg:text-3xl text-[#2c3072] dark:text-white font-bold mb-4">
        Applicant Information
      </h2>
      <div className="grid gap-6 mb-6 md:grid-cols-2 p-2.5">
        <div>
          <label
            htmlFor="firstName"
            className="block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
          >
            FIRST (GIVEN) NAME(S){' '}
            <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) =>
              updateFields({ firstName: e.target.value })
            }
            id="firstName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-700"
            placeholder="FIRST (GIVEN) NAME(S)"
            // required
          />
          <p className="text-xs sm:text-base text-[#2c3072]/70 dark:text-gray-400 font-light w-full tracking-wider mt-1 text-justify">
            Please make sure the first name(s) are exactly as shown on
            your passport or travel document
          </p>
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
          >
            FAMILY NAME(S)
            <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) =>
              updateFields({ lastName: e.target.value })
            }
            id="lastName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-700"
            placeholder="FAMILY NAME(S)"
            // required
          />
          <p className="text-xs sm:text-base text-[#2c3072]/70 dark:text-gray-400 font-light w-full tracking-wider mt-1 text-justify">
            Please make sure the family name(s) are exactly as shown
            on your passport or travel document
          </p>
        </div>
      </div>
      <div className="mb-6 p-2.5">
        <label
          htmlFor="fullName"
          className="block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          FULL NAME IN NATIVE ALPHABET
          <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => updateFields({ fullName: e.target.value })}
          id="fullName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-700"
          placeholder="Full Name In Native Alphabet"
          // required
        />
      </div>
      <div className="grid gap-6 mb-6 md:grid-cols-2 p-2.5">
        <div>
          <label
            htmlFor="gender"
            className="block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
          >
            Gender
            <span className="text-red-400">*</span>
          </label>
          <div className="flex flex-row items-center">
            <div className="flex items-center mr-4">
              <input
                id="inline-radio"
                type="radio"
                value="male"
                onChange={genderChangeHandler}
                name="inline-radio-group"
                className="w-3 md:w-5 h-3 md:h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="inline-radio"
                className="ml-2 text-sm md:text-lg text-gray-900 dark:text-gray-300"
              >
                Male
              </label>
            </div>
            <div className="flex items-center mr-4">
              <input
                id="inline-2-radio"
                type="radio"
                value="female"
                onChange={genderChangeHandler}
                name="inline-radio-group"
                className="w-3 md:w-5 h-3 md:h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="inline-2-radio"
                className="ml-2 text-sm md:text-lg text-gray-900 dark:text-gray-300"
              >
                Female
              </label>
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="maritalStatus"
            className="block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
          >
            Marital Status
            <span className="text-red-400">*</span>
          </label>
          <select
            value={maritalStatus}
            onChange={(e) =>
              updateFields({ maritalStatus: e.target.value })
            }
            id="maritalStatus"
            // required
            className="bg-gray-50 border text-xs md:text-lg border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="" disabled>
              Choose a marital status
            </option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="legally separated">
              Legally Separated
            </option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="dob"
            className="block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
          >
            Date of Birth
            <span className="text-red-400">*</span>
          </label>
          <DatePicker
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-700"
            selected={dob}
            onChange={(date) => console.log(date)}
          />
        </div>
        <div>
          <label
            htmlFor="cityOfBirth"
            className="block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
          >
            City of Birth
            <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={cityOfBirth}
            onChange={(e) =>
              updateFields({ cityOfBirth: e.target.value })
            }
            id="cityOfBirth"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-700"
            placeholder="City Of Birth"
            // required
          />
        </div>
      </div>
      <div className="p-2.5">
        <label
          htmlFor="countryOfBirth"
          className="block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          Country Of Birth
          <span className="text-red-400">*</span>
        </label>

        <select
          value={countryOfBirth}
          onChange={(e) =>
            updateFields({ countryOfBirth: e.target.value })
          }
          id="countryOfBirth"
          // required
          placeholder="Select Country"
          className="bg-gray-50 border text-xs md:text-lg border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="" disabled>
            Select Country
          </option>
          <option value="united states">United States</option>
          <option value="canada">Canada</option>
          <option value="france">France</option>
          <option value="germany">Germany</option>
        </select>
      </div>
    </FormWrapper>
  );
}
