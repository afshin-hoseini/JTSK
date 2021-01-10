import { FC, ComponentProps } from 'react';
import './style.css';
export const TextInput: FC<ComponentProps<'input'>> = (props) => {
  return <input {...props} className={`text-input-field text-input ${props.className || ''}`} />;
};
