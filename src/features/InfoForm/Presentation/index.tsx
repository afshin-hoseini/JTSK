import { ChangeEvent, FC, FormEvent, useCallback, useState } from 'react';
import { Field } from 'src/components/Field';
import { FieldSet } from 'src/components/FieldSet';
import { DateInput } from 'src/components/inputs/DateInput';
import { RadioOptions } from 'src/components/inputs/RadioOptions';
import { TextInput } from 'src/components/inputs/TextInput';
import { InfoFormComponentProps, InfoFormValues } from '../@types';
import { GenderOptions } from '../utils';
import './style.css';

export const InfoFormComponent: FC<InfoFormComponentProps> = ({
  className = '',
  handleSumbit,
  errors,
  isSubmiting,
}) => {
  const [values, setValues] = useState<InfoFormValues>({});
  const [touched, setTouched] = useState<InfoFormValues>({});

  /** Handles form submission and overrides the default behavior. */
  const onFormSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      setTouched({});
      handleSumbit?.(values);
      e.preventDefault();
    },
    [values, handleSumbit]
  );

  /**
   * Retrieves error string corresponding to given name while
   * has not been touched after error report
   */
  const getError = useCallback(
    (key: keyof InfoFormValues) => {
      const error = !touched[key] && errors?.[key];
      return error || undefined;
    },
    [errors, touched]
  );

  /**
   * Updates the value and marks as touched if not set already.
   */
  const updateValue = useCallback((name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => {
      if (prev[name as keyof InfoFormValues]) return prev;
      return { ...prev, [name]: true };
    });
  }, []);

  /** updates the values state when a field changes. */
  const onInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const name = e.currentTarget.name;
      const value = e.currentTarget.value;
      updateValue(name, value);
    },
    [updateValue]
  );

  /** Updates date values when a DateInput component's value changes. */
  const onDateChanged = useCallback((date?: Date, name = 'birthdate') => updateValue(name, date), [updateValue]);

  return (
    <form className={`${className} info-form`} onSubmit={onFormSubmit}>
      <Field
        name="gender"
        title="Anrede"
        keepTitleInline
        Component={RadioOptions}
        options={GenderOptions}
        onChange={onInput}
        required
        error={getError('gender')}
      />
      <Field
        name="firstName"
        title="Vorname"
        placeholder="Vorname"
        required
        Component={TextInput}
        onChange={onInput}
        error={getError('firstName')}
      />
      <Field
        name="lastName"
        title="Nachname"
        placeholder="Nachname"
        required
        Component={TextInput}
        onChange={onInput}
        error={getError('lastName')}
      />

      <Field
        name="birthDate"
        title="Geburtsdatum"
        Component={DateInput}
        onChange={onDateChanged}
        dayInputPlaceholder="TT"
        monthInputPlaceholder="MM"
        yearInputPlaceholder="JJJJ"
        required
        error={getError('birthDate')}
      />

      <FieldSet>
        <Field
          name="street"
          title="Straße"
          placeholder="straße"
          Component={TextInput}
          onChange={onInput}
          flex={2}
          required
          error={getError('street')}
        />
        <Field
          name="no"
          title="Nr."
          placeholder="Nr."
          inputMode="numeric"
          Component={TextInput}
          onChange={onInput}
          flex={0.9}
          required
          error={getError('no')}
        />
      </FieldSet>

      <FieldSet>
        <Field
          name="plz"
          title="PLZ"
          placeholder="PLZ"
          Component={TextInput}
          onChange={onInput}
          flex={0.9}
          required
          error={getError('plz')}
        />
        <Field
          name="ort"
          title="Ort"
          placeholder="Ort"
          Component={TextInput}
          onChange={onInput}
          flex={2}
          required
          error={getError('ort')}
        />
      </FieldSet>

      <button disabled={isSubmiting} className="btn btn--submit info-form__submit">
        {isSubmiting ? 'Einreichen...' : 'Informationen speichern'}
      </button>
    </form>
  );
};
