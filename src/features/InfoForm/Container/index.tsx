import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { InfoFormErrors, InfoFormProps, InfoFormValues } from '../@types';
import { InfoFormComponent } from '../Presentation';
import { validateFormValues } from '../utils';

export const InfoForm: FC<InfoFormProps> = ({ className }) => {
  const [errors, setErrors] = useState<InfoFormErrors>();
  const { submitInfoForm, submiting } = useSumbit();

  /** Validates the values, updates the errors and if no error found, submits values */
  const handleSumbit = useCallback(
    (values: InfoFormValues) => {
      const errors = validateFormValues(values);
      setErrors(errors);

      if (!errors) {
        submitInfoForm(values);
      }
    },
    [submitInfoForm]
  );

  return (
    <InfoFormComponent className={className} handleSumbit={handleSumbit} errors={errors} isSubmiting={submiting} />
  );
};

/**
 * Control submission API request and etc.
 */
const useSumbit = () => {
  const [submiting, setSubmiting] = useState<boolean>(false);
  const timerHandler = useRef<ReturnType<typeof setTimeout>>();

  const submitInfoForm = useCallback((values: InfoFormValues) => {
    setSubmiting(true);
    timerHandler.current = setTimeout(() => {
      timerHandler.current = undefined;
      setSubmiting(false);
    }, 2000);
  }, []);

  /** Cancels the timeout when unmounted */
  useEffect(() => {
    return () => {
      if (timerHandler.current) clearTimeout(timerHandler.current);
    };
  }, []);

  return {
    submitInfoForm,
    submiting,
  };
};
