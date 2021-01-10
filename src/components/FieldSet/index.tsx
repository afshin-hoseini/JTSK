import { FC } from 'react';
import { FieldSetProps } from './@types';
import { useExtractDataFromFields } from './utils';
import './style.css';

/**
 * Wrapps multiple Field components and sort them horizontaly based on their flex parameter.
 *
 * On large screens the Fields' labels won't be shown, instead they will be concatinated and will be shown on left side.
 */
export const FieldSet: FC<FieldSetProps> = ({ className = '', children }) => {
  const { title, required, errors } = useExtractDataFromFields(children);
  return (
    <fieldset className={`${className} fieldset`}>
      <label className={`lbl fieldset__title ${(errors?.length || 0) > 0 ? 'lbl--error' : ''}`}>
        {`${title}${required ? '*' : ''}`}
      </label>
      {children}
    </fieldset>
  );
};
