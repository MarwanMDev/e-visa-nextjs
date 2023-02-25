import { ContactInfoData } from '@/typings';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import { FormWrapper } from './FormWrapper';

type ContactInfoFormProps = ContactInfoData & {
  updateFields: (fields: Partial<ContactInfoData>) => void;
};

export function ContactInfo({
  streetAddressOne,
  streetAddressTwo,
  contactCity,
  contactPostalCode,
  contactCountry,
  primaryPhoneNumber,
  secondaryPhoneNumber,
  workPhoneNumber,
  updateFields,
}: ContactInfoFormProps) {
  return (
    <FormWrapper>
      <h2 className="text-lg sm:text-2xl lg:text-3xl text-[#2c3072] dark:text-white font-bold mb-4">
        Contact Information
      </h2>
      <hr />
      <div className="md:flex items-center gap-5 mt-4">
        <label
          htmlFor="streetAddressOne"
          className="w-full md:w-1/2 flex flex-row items-center mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          STREET ADDRESS (LINE 1)
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
        <div className="flex flex-col w-full md:w-1/2">
          <input
            type="text"
            id="streetAddressOne"
            value={streetAddressOne}
            onChange={(e) =>
              updateFields({ streetAddressOne: e.target.value })
            }
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-700"
            placeholder="Street Address (Line 1)"
            // required
          />
        </div>
      </div>
      <div className="md:flex items-center gap-5 mt-4">
        <label
          htmlFor="streetAddressTwo"
          className="w-full md:w-1/2 flex flex-row items-center mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          STREET ADDRESS (LINE 2)
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
        <div className="flex flex-col w-full md:w-1/2">
          <input
            type="text"
            id="streetAddressTwo"
            value={streetAddressTwo}
            onChange={(e) =>
              updateFields({ streetAddressTwo: e.target.value })
            }
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-700"
            placeholder="Street Address (Line 2)"
          />
        </div>
      </div>
      <div className="md:flex items-center gap-5 mt-4">
        <label
          htmlFor="contactCity"
          className="w-full md:w-1/2 block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          City
          <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="contactCity"
          value={contactCity}
          onChange={(e) =>
            updateFields({ contactCity: e.target.value })
          }
          className="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-700"
          placeholder="City"
          // required
        />
      </div>
      <div className="md:flex items-center gap-5 mt-4">
        <label
          htmlFor="contactPostalCode"
          className="w-full md:w-1/2 block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          POSTAL ZONE/ZIP CODE
          <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="contactPostalCode"
          value={contactPostalCode}
          onChange={(e) =>
            updateFields({ contactPostalCode: e.target.value })
          }
          className="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-700"
          placeholder="POSTAL ZONE/ZIP CODE"
          // required
        />
      </div>
      <div className="md:flex items-center gap-5 mt-4">
        <label
          htmlFor="contactCountry"
          className="w-full md:w-1/2 block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          COUNTRY/REGION
          <span className="text-red-400">*</span>
        </label>

        <select
          id="contactCountry"
          // required
          value={contactCountry}
          onChange={(e) =>
            updateFields({ contactCountry: e.target.value })
          }
          placeholder="Select Country"
          className="w-full md:w-1/2 bg-gray-50 border text-xs md:text-lg border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500 block p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
      <div className="md:flex items-center gap-5 mt-4">
        <label
          htmlFor="primaryPhoneNumber"
          className="w-full md:w-1/2 flex flex-row items-center mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          PRIMARY PHONE NUMBER
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
        <div className="flex flex-col w-full md:w-1/2">
          <input
            type="text"
            id="primaryPhoneNumber"
            value={primaryPhoneNumber}
            onChange={(e) =>
              updateFields({ primaryPhoneNumber: e.target.value })
            }
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-700"
            placeholder="Enter your phone number"
          />
        </div>
      </div>
      <div className="md:flex items-center gap-5 mt-4">
        <label
          htmlFor="secondaryPhoneNumber"
          className="w-full md:w-1/2 flex flex-row items-center mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          SECONDARY PHONE NUMBER
        </label>
        <div className="flex flex-col w-full md:w-1/2">
          <input
            type="text"
            id="secondaryPhoneNumber"
            value={secondaryPhoneNumber}
            onChange={(e) =>
              updateFields({ secondaryPhoneNumber: e.target.value })
            }
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-700"
            placeholder="Enter your phone number"
          />
        </div>
      </div>
      <div className="md:flex items-center gap-5 mt-4">
        <label
          htmlFor="workPhoneNumber"
          className="w-full md:w-1/2 flex flex-row items-center mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          WORK PHONE NUMBER
        </label>
        <div className="flex flex-col w-full md:w-1/2">
          <input
            type="text"
            id="workPhoneNumber"
            value={workPhoneNumber}
            onChange={(e) =>
              updateFields({ workPhoneNumber: e.target.value })
            }
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-700"
            placeholder="Enter your phone number"
          />
        </div>
      </div>
    </FormWrapper>
  );
}
