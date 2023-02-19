'use client';

import { ApplicantInfo } from '@/components/ApplicantInfo';
import { useMultistepForm } from '@/hooks/useMultistepForm';
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
    <ApplicantInfo key={1} {...data} updateFields={updateFields} />,
  ]);
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert('Successful Account Creation');
  }
  return (
    <div className="mb-auto text-white w-[900px] xl:w-[1250px] mx-auto mt-5 bg-white p-5">
      <form
        onSubmit={onSubmit}
        className="w-[800px] xl:w-[1200px] bg-gray-100 p-5 rounded-sm mx-auto flex flex-col"
      >
        <div className="text-white float-right bg-slate-500 rounded-full p-2">
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
