import { ComponentType } from 'react';

export type FieldProps<T> = {
  title?: string;
  Component?: ComponentType<T>;
  name: string;
  error?: string;
  required?: boolean;
  /**
   * If set, always keep the title in a row with input component.
   */
  keepTitleInline?: boolean;
  /**
   * The width spreading percentage
   * @default 1
   */
  flex?: number;
  className?: string;
} & T;
