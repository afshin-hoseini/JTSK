import { useMemo } from 'react';
import { FieldProps } from './@types';
import './style.css';

/**
 * Wraps a custom input component and is responsible to show the title and error message.
 *
 * On mobile devices the title would be shown on top of the component, whereas
 * on larger screens the title should be shown on left side.
 */
export function Field<T>(props: FieldProps<T>) {
  const { title, className = '', Component, error, flex, required, keepTitleInline, ...componentProps } = props;

  const FieldComponent = Component || 'input';
  const titleStr = useMemo(() => (required ? (title ?? '') + '*' : title), [required, title]);

  return (
    <div className={`field ${className} ${keepTitleInline ? 'field--keep-title-in-row' : ''}`} style={{ flex }}>
      <label className={`lbl field__title ${error ? 'lbl--error' : ''}`}> {titleStr} </label>
      {/* We don't care about rest props type, we just pass them as they are */}
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <FieldComponent className="field__component" {...(componentProps as any)} />
    </div>
  );
}
