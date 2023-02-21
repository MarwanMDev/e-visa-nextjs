import { FormWrapper } from './FormWrapper';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
type ApplicantInfoData = {
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  gender: string;
  dob: Date;
  maritalStatus: string;
  cityOfBirth: string;
  countryOfBirth: string;
};

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
  return (
    <FormWrapper>
      <h2 className="text-lg sm:text-2xl lg:text-3xl text-[#2c3072] font-bold mb-4">
        General Information
      </h2>
      <div className="mb-6 p-1 md:p-2.5">
        <label
          htmlFor="email"
          className="flex flex-row items-center mb-2 font-bold text-sm md:text-lg text-[#2c3072] uppercase"
        >
          Email address <span className="text-red-400"> * </span>
          <a
            href="#"
            className="group relative inline-block text-[#2c3072] underline hover:text-red-500 duration-300"
          >
            <QuestionMarkCircleIcon className="h-6" />
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
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-[#2c3072] focus:border-[#2c3072] block w-full p-2 md:p-5"
          placeholder="Email Address"
        />

        <p className="text-xs sm:text-base text-justify text-[#2c3072]/70 font-light w-full tracking-wider mt-1">
          Email Address Please make sure you enter a valid email
          address. We will use it to contact you about your
          application.
        </p>
      </div>
      <hr className="mb-8" />

      <h2 className="text-lg sm:text-2xl lg:text-3xl text-[#2c3072] font-bold mb-4">
        Applicant Information
      </h2>
      <div className="grid gap-6 mb-6 md:grid-cols-2 p-2.5">
        <div>
          <label
            htmlFor="firstName"
            className="block mb-2 font-bold text-sm md:text-lg text-[#2c3072] uppercase"
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-5"
            placeholder="FIRST (GIVEN) NAME(S)"
            required
          />
          <p className="text-xs sm:text-base text-[#2c3072]/70 font-light w-full tracking-wider mt-1 text-justify">
            Please make sure the first name(s) are exactly as shown on
            your passport or travel document
          </p>
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block mb-2 font-bold text-sm md:text-lg text-blue-900 uppercase"
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-5"
            placeholder="FAMILY NAME(S)"
            required
          />
          <p className="text-xs sm:text-base text-[#2c3072]/70 font-light w-full tracking-wider mt-1 text-justify">
            Please make sure the family name(s) are exactly as shown
            on your passport or travel document
          </p>
        </div>
      </div>
      <div className="mb-6 p-2.5">
        <label
          htmlFor="fullName"
          className="block mb-2 font-bold text-sm md:text-lg text-[#2c3072] uppercase"
        >
          FULL NAME IN NATIVE ALPHABET
          <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => updateFields({ fullName: e.target.value })}
          id="fullName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-5"
          placeholder="Full Name In Native Alphabet"
          required
        />
      </div>
      <div className="grid gap-6 mb-6 md:grid-cols-2 p-2.5">
        <div>
          <label
            htmlFor="gender"
            className="block mb-2 font-bold text-sm md:text-lg text-blue-900 uppercase"
          >
            Gender
            <span className="text-red-400">*</span>
          </label>
          <ul className="items-center w-full text-sm font-medium text-gray-900 bg-transparent sm:flex p-1">
            <li className="w-full">
              <div className="flex items-center pl-3">
                <input
                  id="horizontal-list-radio-license"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="w-2 h-2 md:w-6 md:h-6 bg-white"
                />
                <label
                  htmlFor="horizontal-list-radio-license"
                  className="w-full py-3 ml-2 text-xs md:text-lg font-medium text-[#2c3072]"
                >
                  Male
                </label>
              </div>
            </li>
            <li className="w-full">
              <div className="flex items-center pl-3">
                <input
                  id="horizontal-list-radio-id"
                  type="radio"
                  value=""
                  name="list-radio"
                  className="w-2 h-2 md:w-6 md:h-6 bg-white"
                />
                <label
                  htmlFor="horizontal-list-radio-id"
                  className="w-full py-3 ml-2 text-xs md:text-lg font-medium text-[#2c3072]"
                >
                  Female
                </label>
              </div>
            </li>
          </ul>

          {/* <label
            htmlFor="gender"
            className="block mb-2 font-bold text-lg text-blue-900 uppercase"
          >
            Gender
            <span className="text-red-400">*</span>
          </label>
          <select
            value={gender}
            onChange={(e) => updateFields({ gender: e.target.value })}
            id="gender"
            required
            className="bg-gray-50 border text-lg border-gray-300 text-black rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5"
          >
            <option selected>Choose a gender</option>
            <option>Male</option>
            <option>Female</option>
          </select> */}
        </div>
        <div>
          <label
            htmlFor="maritalStatus"
            className="block mb-2 font-bold text-sm md:text-lg text-blue-900 uppercase"
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
            required
            className="bg-gray-50 border text-xs md:text-lg border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-5"
          >
            <option value="" selected disabled>
              Choose a marital status
            </option>
            <option>Single</option>
            <option>Married</option>
            <option>Divorced</option>
            <option>Legally Separated</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="dob"
            className="block mb-2 font-bold text-sm md:text-lg text-blue-900 uppercase"
          >
            Date of Birth
            <span className="text-red-400">*</span>
          </label>
          <DatePicker
            className="bg-white text-black w-full p-2 md:p-5 text-xs md:text-lg"
            selected={dob}
            onChange={(date) => console.log(date)}
          />
        </div>
        <div>
          <label
            htmlFor="cityOfBirth"
            className="block mb-2 font-bold text-sm md:text-lg text-blue-900 uppercase"
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-5"
            placeholder="City Of Birth"
            required
          />
        </div>
      </div>
      <div className="p-2.5">
        <label
          htmlFor="countryOfBirth"
          className="block mb-2 font-bold text-sm md:text-lg text-blue-900 uppercase"
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
          required
          placeholder="Select Country"
          className="bg-gray-50 border text-xs md:text-lg border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-5"
        >
          <option value="" selected disabled>
            Select Country
          </option>
          <option>United States</option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </select>
      </div>
    </FormWrapper>
  );
}
