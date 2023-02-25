import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import { FormWrapper } from './FormWrapper';
import DatePicker from 'react-datepicker';
import { PassportInfoData } from '@/typings';

type PassportInfoFormProps = PassportInfoData & {
  updateFields: (fields: Partial<PassportInfoData>) => void;
};

export function PassportInfo({
  passportType,
  passportNumber,
  passportIssuanceCountry,
  passportIssuanceCity,
  passportIssuanceCountryTwo,
  passportIssuanceDate,
  passportExpiryDate,
  nationality,
  updateFields,
}: PassportInfoFormProps) {
  return (
    <FormWrapper>
      <h2 className="text-lg sm:text-2xl lg:text-3xl text-[#2c3072] dark:text-white font-bold mb-4">
        Passport Information
      </h2>
      <hr />
      <div className="md:flex items-center gap-5 mt-4">
        <label
          htmlFor="passportType"
          className="w-1/2 flex flex-row items-center mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          PASSPORT/TRAVEL DOCUMENT TYPE
          <span className="text-red-400"> * </span>
        </label>
        <select
          id="passportType"
          value={passportType}
          onChange={(e) =>
            updateFields({ passportType: e.target.value })
          }
          required
          placeholder="Select Type"
          className="bg-gray-50 border text-xs md:text-lg border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="" disabled>
            Select Type
          </option>
          <option value="regular">REGULAR</option>
          <option value="official">OFFICIAL</option>
          <option value="diplomatic">DIPLOMATIC</option>
          <option value="laissez-passer">LAISSEZ-PASSER</option>
          <option value="other">OTHER</option>
        </select>
      </div>
      <div className="md:flex items-center gap-5 mt-4">
        <label
          htmlFor="passportNumber"
          className="w-1/2 flex flex-row items-center mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          PASSPORT/TRAVEL DOCUMENT NUMBER
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
        <div className="flex flex-col w-1/2">
          <input
            type="text"
            id="passportNumber"
            value={passportNumber}
            onChange={(e) =>
              updateFields({ passportNumber: e.target.value })
            }
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-700"
            placeholder="Passport Number"
            required
          />
          <p className="text-xs sm:text-base text-justify text-[#2c3072]/70 dark:text-gray-400 font-light w-full tracking-wider mt-1">
            Enter the passport number exactly as it appears on the
            passport information page
          </p>
        </div>
      </div>
      <div className="md:flex items-center gap-5 mt-4">
        <label
          htmlFor="issuanceCountry"
          className="w-1/2 block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          COUNTRY/AUTHORITY THAT ISSUED THE PASSPORT/TRAVEL DOCUMENT
          <span className="text-red-400">*</span>
        </label>

        <select
          id="issuanceCountry"
          value={passportIssuanceCountry}
          onChange={(e) =>
            updateFields({ passportIssuanceCountry: e.target.value })
          }
          required
          placeholder="Select Country"
          className="bg-gray-50 border text-xs md:text-lg border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          htmlFor="issuanceCity"
          className="w-1/2 block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          City
          <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="issuanceCity"
          value={passportIssuanceCity}
          onChange={(e) =>
            updateFields({ passportIssuanceCity: e.target.value })
          }
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-700"
          placeholder="City"
          required
        />
      </div>
      <div className="md:flex items-center gap-5 mt-4">
        <label
          htmlFor="issuanceCountryTwo"
          className="w-1/2 block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          COUNTRY/REGION
          <span className="text-red-400">*</span>
        </label>

        <select
          id="issuanceCountryTwo"
          value={passportIssuanceCountryTwo}
          onChange={(e) =>
            updateFields({
              passportIssuanceCountryTwo: e.target.value,
            })
          }
          required
          placeholder="Select Country"
          className="bg-gray-50 border text-xs md:text-lg border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          htmlFor="issuanceDate"
          className="w-full block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          PASSPORT ISSUANCE DATE
          <span className="text-red-400">*</span>
        </label>
        <DatePicker
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-700"
          onChange={(date) => console.log(date)}
          selected={new Date()}
          id="issuanceDate"
        />
      </div>
      <div className="md:flex items-center gap-5 mt-4">
        <label
          htmlFor="expiryDate"
          className="w-full block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          PASSPORT EXPIRATION DATE
          <span className="text-red-400">*</span>
        </label>
        <DatePicker
          className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-700"
          onChange={(date) => console.log(date)}
          selected={new Date()}
          id="expiryDate"
        />
      </div>
      <div className="md:flex items-center gap-5 mt-4">
        <label
          htmlFor="nationality"
          className="w-1/2 block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          COUNTRY/REGION OF ORIGIN (NATIONALITY)
          <span className="text-red-400">*</span>
        </label>

        <select
          id="nationality"
          value={nationality}
          onChange={(e) =>
            updateFields({
              nationality: e.target.value,
            })
          }
          required
          placeholder="Select Country"
          className="bg-gray-50 border text-xs md:text-lg border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
