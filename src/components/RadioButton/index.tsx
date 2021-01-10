import { FC } from 'react';
import { RadioButtonProps } from './@types';
import './style.css';

export const RadioButton: FC<RadioButtonProps> = ({ id = '', label = '', className = '', ...props }) => {
  return (
    <label className={`lbl ${className} radio-button radio-button__container`} htmlFor={id}>
      <input {...props} id={id} type="radio" className="radio-button__input" />
      <span className="radio-button__checkmark"></span>
      <span className="radio-button__label">{label}</span>
    </label>
  );
};
