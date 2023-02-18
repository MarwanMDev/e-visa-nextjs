import { FormWrapper } from './FormWrapper';

type ApplicantInfoData = {
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  gender: string;
  dob: string;
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
    <FormWrapper title="Applicant Information">
      <h2 className="text-2xl text-blue-800 font-bold mb-4">
        General Information
      </h2>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 font-bold text-blue-900 uppercase"
        >
          Email address <span className="text-red-400">*</span>
        </label>
        <input
          autoFocus
          type="email"
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Email Address"
          required
        />
      </div>
      <hr className="mb-4" />

      <h2 className="text-2xl text-blue-800 font-bold mb-4">
        Applicant Information
      </h2>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="block mb-2 font-bold text-blue-900 uppercase"
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="FIRST (GIVEN) NAME(S)"
            required
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block mb-2 font-bold text-blue-900 uppercase"
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Doe"
            required
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="fullName"
          className="block mb-2 font-bold text-blue-900 uppercase"
        >
          FULL NAME IN NATIVE ALPHABET
          <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => updateFields({ fullName: e.target.value })}
          id="fullName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Doe"
          required
        />
      </div>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="gender"
            className="block mb-2 font-bold text-blue-900 uppercase"
          >
            Gender
            <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={gender}
            onChange={(e) => updateFields({ gender: e.target.value })}
            id="gender"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Gender"
            required
          />
        </div>
        <div>
          <label
            htmlFor="maritalStatus"
            className="block mb-2 font-bold text-blue-900 uppercase"
          >
            Marital Status
            <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={maritalStatus}
            onChange={(e) =>
              updateFields({ maritalStatus: e.target.value })
            }
            id="maritalStatus"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="maritalStatus"
            required
          />
        </div>
        <div>
          <label
            htmlFor="dob"
            className="block mb-2 font-bold text-blue-900 uppercase"
          >
            Date of Birth
            <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={dob}
            onChange={(e) => updateFields({ dob: e.target.value })}
            id="dob"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="dob"
            required
          />
        </div>
        <div>
          <label
            htmlFor="cityOfBirth"
            className="block mb-2 font-bold text-blue-900 uppercase"
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="cityOfBirth"
            required
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="countryOfBirth"
          className="block mb-2 font-bold text-blue-900 uppercase"
        >
          Country Of Birth
          <span className="text-red-400">*</span>
        </label>
        <input
          value={countryOfBirth}
          onChange={(e) =>
            updateFields({ countryOfBirth: e.target.value })
          }
          type="text"
          id="countryOfBirth"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="United States"
          required
        />
      </div>
    </FormWrapper>
  );
}
