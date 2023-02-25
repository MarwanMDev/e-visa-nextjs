import { TripDetailsData } from '@/typings';
import DatePicker from 'react-datepicker';
import React from 'react';
import { FormWrapper } from './FormWrapper';

type TripDetailsFormProps = TripDetailsData & {
  updateFields: (fields: Partial<TripDetailsData>) => void;
};

export const TripDetails = ({
  applyingLocation,
  reasonForTrip,
  purposeOfTrip,
  tripSpecify,
  travelPlan,
  otherCompanions,
  withGroupOrOrganization,
  everBeenInEgypt,
  everIssuedVisa,
  personPayingTrip,
  updateFields,
}: TripDetailsFormProps) => {
  const travelPlanChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    updateFields({ travelPlan: e.target.value });
  };

  const otherCompanionsChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    updateFields({ otherCompanions: e.target.value });
  };

  const withGroupOrOrganizationChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    updateFields({ withGroupOrOrganization: e.target.value });
  };

  return (
    <FormWrapper>
      <h2 className="text-lg sm:text-2xl lg:text-3xl text-[#2c3072] dark:text-white font-bold mb-4">
        Trip Details
      </h2>
      <hr />
      <div className="md:flex items-center gap-5 mt-4 mb-4">
        <label
          htmlFor="applyingLocation"
          className="w-full md:w-1/2 block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          SELECT A LOCATION WHERE YOU WILL BE APPLYING FOR THE VISA
          <span className="text-red-400">*</span>
        </label>

        <select
          id="applyingLocation"
          value={applyingLocation}
          onChange={(e) =>
            updateFields({ applyingLocation: e.target.value })
          }
          // required
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
      <hr />
      <div className="md:flex items-center gap-5 mt-4">
        <label
          htmlFor="reasonForTrip"
          className="w-full md:w-1/2 flex flex-row items-center mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          REASON FOR THE TRIP
          <span className="text-red-400"> * </span>
        </label>
        <div className="flex flex-col w-full md:w-1/2">
          <input
            type="text"
            id="reasonForTrip"
            value={reasonForTrip}
            onChange={(e) =>
              updateFields({ reasonForTrip: e.target.value })
            }
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-700"
            placeholder="Reson for the trip"
            // required
          />
        </div>
      </div>
      <div className="border border-[#2c3072] mt-5 p-5">
        <h2 className="text-base sm:text-xl lg:text-2xl text-[#2c3072] dark:text-white font-bold">
          Purpose of Trip to EGYPT. #1
        </h2>

        <div className="md:flex items-center gap-5 mt-4">
          <label
            htmlFor="purposeOfTrip"
            className="w-full md:w-1/2 block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
          >
            PURPOSE OF TRIP TO EGYPT
            <span className="text-red-400">*</span>
          </label>

          <select
            id="purposeOfTrip"
            value={purposeOfTrip}
            onChange={(e) =>
              updateFields({ purposeOfTrip: e.target.value })
            }
            // required
            placeholder="Select Country"
            className="w-full md:w-1/2 bg-gray-50 border text-xs md:text-lg border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500 block p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="" disabled>
              Select Purpose of trip
            </option>
            <option value="united states">
              TEMP. BUSINESS PLEASURE VISITOR (B)
            </option>
            <option value="canada">ALIEN IN TRANSIT (C)</option>
          </select>
        </div>

        <div className="md:flex items-center gap-5 mt-4">
          <label
            htmlFor="tripSpecify"
            className="w-full md:w-1/2 block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
          >
            SPECIFY
            <span className="text-red-400">*</span>
          </label>

          <select
            id="tripSpecify"
            value={tripSpecify}
            onChange={(e) =>
              updateFields({ tripSpecify: e.target.value })
            }
            // required
            placeholder="Select Country"
            className="w-full md:w-1/2 bg-gray-50 border text-xs md:text-lg border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500 block p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="" disabled>
              Select Country
            </option>
            <option value="united states">
              BUSINESS & TOURISM (TEMPRORAY VISITOR) (B1/B2)
            </option>
            <option value="canada">BUSINESS/CONFERANCE (B1)</option>
            <option value="france">
              TOURISM/MEDICAL TREATMENT (B2)
            </option>
          </select>
        </div>
      </div>

      <div className="md:flex items-center gap-5 mt-4">
        <label
          htmlFor="travelPlan"
          className="w-full md:w-1/2 block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          HAVE YOU MADE SPECIFIC TRAVEL PLANS?
          <span className="text-red-400">*</span>
        </label>

        <div className="flex">
          <div className="flex items-center mr-4">
            <input
              id="travelPlan-radio"
              type="radio"
              value="yes"
              onChange={travelPlanChangeHandler}
              name="travelPlan-radio-group"
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="travelPlan-radio"
              className="ml-2 text-lg text-gray-900 dark:text-gray-300"
            >
              Yes
            </label>
          </div>
          <div className="flex items-center mr-4">
            <input
              id="travelPlan-radio-2"
              type="radio"
              value="no"
              onChange={travelPlanChangeHandler}
              name="travelPlan-radio-group"
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="travelPlan-radio-2"
              className="ml-2 text-lg text-gray-900 dark:text-gray-300"
            >
              No
            </label>
          </div>
          <div className="flex items-center mr-4">
            <input
              id="travelPlan-radio-3"
              type="radio"
              value="not sure"
              onChange={travelPlanChangeHandler}
              name="inline-radio-group"
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="travelPlan-radio-3"
              className="ml-2 text-lg text-gray-900 dark:text-gray-300"
            >
              Not Sure
            </label>
          </div>
        </div>
      </div>

      {travelPlan === 'yes' && (
        <>
          <div className="md:flex items-center gap-5 mt-4">
            <label
              htmlFor="arrivalDate"
              className="w-full block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
            >
              DATE OF ARRIVAL IN EGYPT
              <span className="text-red-400">*</span>
            </label>
            <DatePicker
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-700"
              onChange={(date) => console.log(date)}
              selected={new Date()}
              id="arrivalDate"
            />
          </div>
          <div className="md:flex items-center gap-5 mt-4">
            <label
              htmlFor="arrivalFlight"
              className="w-full md:w-1/2 flex flex-row items-center mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
            >
              ARRIVAL FLIGHT (IF KNOWN)
            </label>
            <div className="flex flex-col w-full md:w-1/2">
              <input
                type="text"
                id="arrivalFlight"
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-700"
                placeholder="ARRIVAL FLIGHT (IF KNOWN)"
              />
            </div>
          </div>
          <div className="md:flex items-center gap-5 mt-4">
            <label
              htmlFor="arrivalCity"
              className="w-full md:w-1/2 flex flex-row items-center mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
            >
              ARRIVAL CITY
              <span className="text-red-400"> * </span>
            </label>
            <div className="flex flex-col w-full md:w-1/2">
              <input
                type="text"
                id="arrivalCity"
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-700"
                placeholder="ARRIVAL CITY"
              />
            </div>
          </div>
          <div className="md:flex items-center gap-5 mt-4">
            <label
              htmlFor="dateOfDepartureFromEgypt"
              className="w-full block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
            >
              DATE OF DEPARTURE FROM EGYPT
              <span className="text-red-400">*</span>
            </label>
            <DatePicker
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-700"
              onChange={(date) => console.log(date)}
              selected={new Date()}
              id="dateOfDepartureFromEgypt"
            />
          </div>
          <div className="md:flex items-center gap-5 mt-4">
            <label
              htmlFor="departureFlight"
              className="w-full md:w-1/2 flex flex-row items-center mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
            >
              DEPARTURE FLIGHT (IF KNOWN)
            </label>
            <div className="flex flex-col w-full md:w-1/2">
              <input
                type="text"
                id="departureFlight"
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-700"
                placeholder="DEPARTURE FLIGHT (IF KNOWN)"
              />
            </div>
          </div>
          <div className="md:flex items-center gap-5 mt-4">
            <label
              htmlFor="departureCity"
              className="w-full md:w-1/2 flex flex-row items-center mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
            >
              DEPARTURE CITY <span className="text-red-400"> * </span>
            </label>
            <div className="flex flex-col w-full md:w-1/2">
              <input
                type="text"
                id="departureCity"
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-700"
                placeholder="ARRIVAL CITY"
              />
            </div>
          </div>
          <div className="md:flex items-center gap-5 mt-4">
            <label
              htmlFor="location"
              className="w-full md:w-1/2 flex flex-row items-center mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
            >
              LOCATION <span className="text-red-400"> * </span>
            </label>
            <div className="flex flex-col w-full md:w-1/2">
              <input
                type="text"
                id="location"
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-700"
                placeholder="Location"
              />
            </div>
          </div>
          <div className="md:flex items-center gap-5 mt-4">
            <label
              htmlFor="tripStreetAddressOne"
              className="w-full md:w-1/2 flex flex-row items-center mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
            >
              STREET ADDRESS (LINE 1)
              <span className="text-red-400"> * </span>
            </label>
            <div className="flex flex-col w-full md:w-1/2">
              <input
                type="text"
                id="tripStreetAddressOne"
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-700"
                placeholder="STREET ADDRESS (LINE 1)"
              />
            </div>
          </div>
          <div className="md:flex items-center gap-5 mt-4">
            <label
              htmlFor="tripStreetAddressOne"
              className="w-full md:w-1/2 flex flex-row items-center mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
            >
              STREET ADDRESS (LINE 2)
            </label>
            <div className="flex flex-col w-full md:w-1/2">
              <input
                type="text"
                id="tripStreetAddressOne"
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-700"
                placeholder="STREET ADDRESS (LINE 2)"
              />
            </div>
          </div>
          <div className="md:flex items-center gap-5 mt-4">
            <label
              htmlFor="tripCity"
              className="w-full md:w-1/2 flex flex-row items-center mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
            >
              CITY
            </label>
            <div className="flex flex-col w-full md:w-1/2">
              <input
                type="text"
                id="tripCity"
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-700"
                placeholder="STREET ADDRESS (LINE 2)"
              />
            </div>
          </div>
        </>
      )}

      {travelPlan === 'no' && (
        <>
          <div className="md:flex items-center gap-5 mt-4">
            <label
              htmlFor="intendedDate"
              className="w-full block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
            >
              INTENDED DATE OF ARRIVAL
              <span className="text-red-400">*</span>
            </label>
            <DatePicker
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-700"
              onChange={(date) => console.log(date)}
              selected={new Date()}
              id="intendedDate"
            />
          </div>
          <div className="md:flex items-center gap-5 mt-4">
            <label
              htmlFor="intendedLengthOfStay"
              className="w-full md:w-1/2 flex flex-row items-center mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
            >
              INTENDED LENGTH OF STAY IN EGYPT.
              <span className="text-red-400"> * </span>
            </label>
            <div className="flex flex-row w-full md:w-1/2">
              <input
                type="text"
                id="intendedLengthOfStay"
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-lg focus:ring-blue-500 focus:border-blue-500 block p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-700"
                placeholder="INTENDED LENGTH OF STAY IN EGYPT."
              />
              <select
                id="tripSpecify"
                value={tripSpecify}
                onChange={(e) =>
                  updateFields({ tripSpecify: e.target.value })
                }
                // required
                placeholder="Select Country"
                className="w-full md:w-1/2 bg-gray-50 border text-xs md:text-lg border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500 block p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="" disabled>
                  Select Period
                </option>
                <option value="years">Year(s)</option>
                <option value="months">Month(s)</option>
                <option value="weeks">Week(s)</option>
                <option value="days">Day(s)</option>
              </select>
            </div>
          </div>
        </>
      )}

      <div className="md:flex items-center gap-5 mt-4">
        <label
          htmlFor="otherCompanions"
          className="w-full md:w-1/2 block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          ARE THERE OTHER PERSONS TRAVELING WITH YOU?
          <span className="text-red-400">*</span>
        </label>

        <div className="flex">
          <div className="flex items-center mr-4">
            <input
              id="otherCompanions-radio"
              type="radio"
              value="yes"
              onChange={otherCompanionsChangeHandler}
              name="otherCompanions-radio-group"
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="inline-radio"
              className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300"
            >
              Yes
            </label>
          </div>
          <div className="flex items-center mr-4">
            <input
              id="otherCompanions-radio-2"
              type="radio"
              value="no"
              onChange={otherCompanionsChangeHandler}
              name="otherCompanions-radio-group"
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="inline-2-radio"
              className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300"
            >
              No
            </label>
          </div>
        </div>
      </div>

      {otherCompanions === 'yes' && (
        <>
          <div className="md:flex items-center gap-5 mt-4">
            <label
              htmlFor="withGroupOrOrganization"
              className="w-full md:w-1/2 block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
            >
              ARE YOU TRAVELING AS PART OF A GROUP OR ORGANIZATION
              <span className="text-red-400">*</span>
            </label>

            <div className="flex">
              <div className="flex items-center mr-4">
                <input
                  id="withGroupOrOrganization-radio"
                  type="radio"
                  value="yes"
                  onChange={withGroupOrOrganizationChangeHandler}
                  name="withGroupOrOrganization-radio-group"
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="group-organization-radio"
                  className="ml-2 text-lg text-gray-900 dark:text-gray-300"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center mr-4">
                <input
                  id="withGroupOrOrganization-radio-2"
                  type="radio"
                  value="no"
                  onChange={withGroupOrOrganizationChangeHandler}
                  name="withGroupOrOrganization-radio-group"
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="group-organization-radio-2"
                  className="ml-2 text-lg text-gray-900 dark:text-gray-300"
                >
                  No
                </label>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="md:flex items-center gap-5 mt-4">
        <label
          htmlFor="contactCountry"
          className="w-full md:w-1/2 block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          HAVE YOU EVER BEEN IN EGYPT?
          <span className="text-red-400">*</span>
        </label>

        <div className="flex">
          <div className="flex items-center mr-4">
            <input
              id="inline-radio"
              type="radio"
              value=""
              name="inline-radio-group"
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="inline-radio"
              className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300"
            >
              Yes
            </label>
          </div>
          <div className="flex items-center mr-4">
            <input
              id="inline-2-radio"
              type="radio"
              value=""
              name="inline-radio-group"
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="inline-2-radio"
              className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300"
            >
              No
            </label>
          </div>
        </div>
      </div>

      <div className="md:flex items-center gap-5 mt-4">
        <label
          htmlFor="contactCountry"
          className="w-full md:w-1/2 block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          HAVE YOU EVER BEEN ISSUED A U.S. VISA?
          <span className="text-red-400">*</span>
        </label>

        <div className="flex">
          <div className="flex items-center mr-4">
            <input
              id="inline-radio"
              type="radio"
              value=""
              name="inline-radio-group"
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="inline-radio"
              className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300"
            >
              Yes
            </label>
          </div>
          <div className="flex items-center mr-4">
            <input
              id="inline-2-radio"
              type="radio"
              value=""
              name="inline-radio-group"
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="inline-2-radio"
              className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300"
            >
              No
            </label>
          </div>
        </div>
      </div>

      <div className="md:flex items-center gap-5 mt-4">
        <label
          htmlFor="personPayingTrip"
          className="w-full md:w-1/2 block mb-2 font-bold text-sm md:text-lg text-[#2c3072] dark:text-white uppercase"
        >
          PERSON PAYING FOR TRIP
          <span className="text-red-400">*</span>
        </label>

        <select
          id="personPayingTrip"
          value={personPayingTrip}
          onChange={(e) =>
            updateFields({ personPayingTrip: e.target.value })
          }
          // required
          placeholder="Select Country"
          className="w-full md:w-1/2 bg-gray-50 border text-xs md:text-lg border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500 block p-2 md:p-5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="" disabled>
            Select Country
          </option>
          <option value="united states">
            Other Company/Organisation
          </option>
          <option value="canada">Other Person</option>
          <option value="canada">Present Employer</option>
          <option value="france">Slef</option>
          <option value="germany">Employer in Egypt</option>
        </select>
      </div>
    </FormWrapper>
  );
};
