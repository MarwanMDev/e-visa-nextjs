'use client';

import { ApplicantInfo } from '@/components/ApplicantInfo';
import { ContactInfo } from '@/components/ContactInfo';
import { EgyptContact } from '@/components/EgyptContact';
import { PassportInfo } from '@/components/PassportInfo';
import { SecurityQuestions } from '@/components/SecurityQuestions';
import { TripDetails } from '@/components/TripDetails';
import { useMultistepForm } from '@/hooks/useMultistepForm';
import { Visa } from '@/typings';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

type Props = {
  params: {
    token: string;
  };
};

const initialValues: Visa = {
  email: '',
  firstName: '',
  lastName: '',
  fullName: '',
  gender: '',
  maritalStatus: '',
  dob: new Date(),
  cityOfBirth: '',
  countryOfBirth: '',
  passportType: '',
  passportNumber: '',
  passportIssuanceCountry: '',
  passportIssuanceCity: '',
  passportIssuanceCountryTwo: '',
  passportIssuanceDate: new Date(),
  passportExpiryDate: new Date(),
  nationality: '',
  streetAddressOne: '',
  streetAddressTwo: '',
  contactCity: '',
  contactPostalCode: '',
  contactCountry: '',
  primaryPhoneNumber: '',
  secondaryPhoneNumber: '',
  workPhoneNumber: '',
  applyingLocation: '',
  reasonForTrip: '',
  purposeOfTrip: '',
  tripSpecify: '',
  travelPlan: '',
  otherCompanions: '',
  withGroupOrOrganization: '',
  everBeenInEgypt: '',
  everIssuedVisa: '',
  personPayingTrip: '',
};

function VisaPage({ params: { token } }: Props) {
  const [data, setData] = useState(initialValues);
  const router = useRouter();
  function updateFields(fields: Partial<Visa>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    back,
    next,
  } = useMultistepForm([
    <ApplicantInfo
      key="Applicant Information"
      {...data}
      updateFields={updateFields}
    />,
    <PassportInfo
      {...data}
      updateFields={updateFields}
      key="Passport Information"
    />,
    <ContactInfo
      {...data}
      updateFields={updateFields}
      key="Contact Information"
    />,
    <TripDetails
      {...data}
      updateFields={updateFields}
      key="Trip Details"
    />,
    <EgyptContact key="Egypt Contact" />,
    <SecurityQuestions key="Security Questions" />,
  ]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(data);
    if (!isLastStep) return next();
    // const res = await fetch('https://mdev.cyclic.app')
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    router.push('visa/PkOvL59xXwh8vX3QK6yp/confirmation');
  }

  // };
  return (
    <div className="mb-auto w-full sm:w-[768px] lg:w-[900px] xl:w-[1240px] 2xl:w-[1600px] mx-auto p-5 text-white bg-white border border-gray-100 dark:bg-zinc-700 transition-all duration-700">
      <div className="flex flex-col justify-center items-center gap-3">
        <h2 className="text-center text-3xl lg:text-4xl xl:text-5xl tracking-widest text-black dark:text-white transition-all duration-100">
          EGYPT PERMIT AUTHORIZATION
        </h2>
        <p className="text-center text-lg md:text-2xl font-thin text-black dark:text-white transition-all duration-100">
          Welcome, you are entitled to a Visit Permit to EGYPT.
        </p>
        <p className="font-bold text-center text-sm md:text-lg text-black dark:text-white transition-all duration-100">
          If you apply, make sure:
        </p>
        <p className="flex flex-row justify-center items-center text-justify text-sm md:text-lg text-black dark:text-white transition-all duration-100">
          <CheckBadgeIcon className="h-6 text-green-600" />
          You’re visiting for a maximum of 6 months
        </p>
        <p className="flex flex-row justify-center items-center text-justify text-sm md:text-lg text-black dark:text-white transition-all duration-100">
          <CheckBadgeIcon className="h-6 text-green-600" />
          You’re traveling exclusively for business, transit or
          pleasure
        </p>
      </div>
      <div className="flex flex-row justify-center w-full mx-auto mt-10 mb-10">
        <ol className="flex flex-row justify-center items-center w-full space-x-2 sm:space-x-8">
          {steps.map((step, i) => (
            <li
              key={i}
              className="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 cursor-pointer"
            >
              <span
                className={`text-black dark:text-white flex items-center justify-center w-8 h-8 ${
                  currentStepIndex === i
                    ? 'border border-green-600 rounded-full shrink-0 dark:border-green-500 bg-green-500'
                    : currentStepIndex > i
                    ? 'border border-green-400 rounded-full shrink-0 dark:border-green-400 bg-green-400'
                    : 'border border-blue-600 rounded-full shrink-0 dark:border-blue-500'
                }`}
              >
                {i + 1}
              </span>
              <span>
                <h3
                  className={`hidden xl:inline text-base tracking-wider leading-tight text-black dark:text-white ${
                    currentStepIndex === i
                      ? 'font-semibold'
                      : currentStepIndex > i
                      ? 'font-normal'
                      : 'font-thin'
                  }`}
                >
                  {step.key}
                </h3>
              </span>
            </li>
          ))}
        </ol>
      </div>

      <form
        onSubmit={onSubmit}
        className="mt-5 w-full sm:w-[702px] lg:w-[800px] xl:w-[1200px] border border-gray-400 bg-transparent p-1 md:p-5 mx-auto flex flex-col"
      >
        {/* <div className="text-black dark:text-white rounded-full text-xs p-2 w-12 mx-auto">
          {currentStepIndex + 1} / {steps.length}
        </div> */}

        {step}
        <div className="m-8 flex flex-row gap-1 justify-between">
          {!isFirstStep && (
            <button
              type="button"
              onClick={back}
              className="text-white text-sm md:text-lg uppercase font-bold bg-gray-600 p-2 md:p-6 w-[100px] md:w-[200px]"
            >
              Previous Step
            </button>
          )}
          <button
            type="submit"
            className="text-white text-sm md:text-lg uppercase font-bold bg-red-600 p-2 md:p-6 w-[100px] md:w-[200px] float-right"
          >
            {isLastStep ? 'Finish' : 'Next Step'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default VisaPage;
