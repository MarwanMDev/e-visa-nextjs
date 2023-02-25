export type Visa = {
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  gender: string;
  maritalStatus: string;
  dob: Date;
  cityOfBirth: string;
  countryOfBirth: string;
  passportType: string;
  passportNumber: string;
  passportIssuanceCountry: string;
  passportIssuanceCity: string;
  passportIssuanceCountryTwo: string;
  passportIssuanceDate: Date;
  passportExpiryDate: Date;
  nationality: string;
};

export type ApplicantInfoData = {
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

export type PassportInfoData = {
  passportType: string;
  passportNumber: string;
  passportIssuanceCountry: string;
  passportIssuanceCity: string;
  passportIssuanceCountryTwo: string;
  passportIssuanceDate: Date;
  passportExpiryDate: Date;
  nationality: string;
};
