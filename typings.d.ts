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
  streetAddressOne: string;
  streetAddressTwo: string;
  contactCity: string;
  contactPostalCode: string;
  contactCountry: string;
  primaryPhoneNumber: string;
  secondaryPhoneNumber: string;
  workPhoneNumber: string;
  applyingLocation: string;
  reasonForTrip: string;
  purposeOfTrip: string;
  tripSpecify: string;
  travelPlan: string;
  otherCompanions: string;
  withGroupOrOrganization: string;
  everBeenInEgypt: string;
  everIssuedVisa: string;
  personPayingTrip: string;
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

export type ContactInfoData = {
  streetAddressOne: string;
  streetAddressTwo: string;
  contactCity: string;
  contactPostalCode: string;
  contactCountry: string;
  primaryPhoneNumber: string;
  secondaryPhoneNumber: string;
  workPhoneNumber: string;
};

export type TripDetailsData = {
  applyingLocation: string;
  reasonForTrip: string;
  purposeOfTrip: string;
  tripSpecify: string;
  travelPlan: string;
  otherCompanions: string;
  withGroupOrOrganization: string;
  everBeenInEgypt: string;
  everIssuedVisa: string;
  personPayingTrip: string;
};
