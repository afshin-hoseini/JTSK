import { ComponentProps } from 'react';

export type RadioButtonProps = ComponentProps<'input'> & {
  label?: string;
};
