'use client';

import { ApplicantInfo } from '@/components/ApplicantInfo';
import { useMultistepForm } from '@/hooks/useMultistepForm';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import React, { FormEvent, useState } from 'react';

type Props = {
  params: {
    token: string;
  };
};

type FormData = {
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  gender: string;
  maritalStatus: string;
  dob: Date;
  cityOfBirth: string;
  countryOfBirth: string;
};

const INITIAL_DATA: FormData = {
  email: '',
  firstName: '',
  lastName: '',
  fullName: '',
  gender: '',
  maritalStatus: '',
  dob: new Date(),
  cityOfBirth: '',
  countryOfBirth: '',
};

function VisaPage({ params: { token } }: Props) {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
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
    <ApplicantInfo
      key="Applicant Information"
      {...data}
      updateFields={updateFields}
    />,
  ]);
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert('Successful Account Creation');
  }
  return (
    <div className="mb-auto text-white w-[900px] xl:w-[1660px] mx-auto bg-white p-5">
      <div className="flex flex-col justify-center items-center gap-3 text-black">
        <h2 className="mt-10 text-center text-5xl tracking-widest">
          EGYPT PERMIT AUTHORIZATION
        </h2>
        <p className="text-center text-2xl font-thin">
          Welcome, you are entitled to a Visit Permit to EGYPT.
        </p>
        <p className="font-bold text-center text-lg">
          If you apply, make sure:
        </p>
        <p className="flex flex-row justify-center items-center text-lg">
          <CheckBadgeIcon className="h-6 text-green-600" />
          You’re visiting for a maximum of 6 months
        </p>
        <p className="flex flex-row justify-center items-center text-lg">
          <CheckBadgeIcon className="h-6 text-green-600" />
          You’re traveling exclusively for business, transit or
          pleasure
        </p>
        {/* <p>
          <span className="font-bold">Please Note:</span> Embassy
          Visit is Required for Interview. Once approved, your permit
          is valid for up to 10 years.
        </p> */}
      </div>
      <div className="flex flex-row ju text-black justify-center gap-3 items-center mt-5">
        {steps.map((step, i) => (
          <div
            key={i}
            className="p-5 text-center text-md bg-gray-100 max-w-[140px] border-y shadow-md border-y-transparent border-l-8 border-l-[#2c3072]"
          >
            {step.key}
          </div>
        ))}
      </div>

      <form
        onSubmit={onSubmit}
        className="mt-5 w-[800px] xl:w-[1360px] border border-gray-400 bg-gray-100 p-5 mx-auto flex flex-col"
      >
        <div className="text-black rounded-full p-2 w-12 mx-auto">
          {currentStepIndex + 1} / {steps.length}
        </div>

        {step}
        <div>
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button
            type="submit"
            className="text-white text-xl uppercase font-bold bg-red-600 p-6 w-[200px] float-right"
          >
            {isLastStep ? 'Finish' : 'Next'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default VisaPage;
