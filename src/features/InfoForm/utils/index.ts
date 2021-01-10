import { InfoFormErrors, InfoFormValues } from '../@types';

export const GenderOptions = [
  { label: 'Herr', value: 'Mr' },
  { label: 'Frau', value: 'Mrs' },
];

export const validateFormValues = (values: InfoFormValues) => {
  const errors: InfoFormErrors = {};

  if (!values.birthDate) errors['birthDate'] = 'Required';
  if (!values.firstName) errors['firstName'] = 'Required';
  if (!values.lastName) errors['lastName'] = 'Required';
  if (!values.gender) errors['gender'] = 'Required';
  if (!values.no) errors['no'] = 'Required';
  if (!values.ort) errors['ort'] = 'Required';
  if (!values.plz) errors['plz'] = 'Required';
  if (!values.street) errors['street'] = 'Required';

  return Object.keys(errors).length === 0 ? undefined : errors;
};
