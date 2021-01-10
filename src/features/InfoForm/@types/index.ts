export type InfoFormErrors = { [key in keyof InfoFormValues]: string };

export type InfoFormComponentProps = {
  className?: string;
  errors?: InfoFormErrors;
  handleSumbit?: (values: InfoFormValues) => void;
  isSubmiting?: boolean;
};

export type InfoFormProps = {
  className?: string;
};

export type InfoFormValues = {
  gender?: string;
  firstName?: string;
  lastName?: string;
  birthDate?: Date;
  street?: string;
  no?: string;
  plz?: string;
  ort?: string;
};
