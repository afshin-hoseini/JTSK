import { FC, useCallback, useState, useEffect } from 'react';
import { toDate, toElements, validateElement } from './utils';
import './style.css';

export const DateInput: FC<DateInputProps> = ({ className = '', onChange, value, name, children, ...placeholders }) => {
  const [dateElements, setDateElements] = useState<DateElements>({ day: '', month: '', year: '' });

  /**
   * Updates date elements once the prop value changes to a new Date
   */
  useEffect(() => {
    if (value) {
      setDateElements(toElements(value));
    }
  }, [value]);

  /**
   * Will be invoked when each date element input changes and updates the element state.
   * It also emits the date once the input creates a correct date.
   */
  const onInputChanged = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const elementName = e.currentTarget.name;
      const elementValue = e.currentTarget.value;

      setDateElements((prev) => {
        if (!validateElement(elementName as keyof DateElements, elementValue)) return prev;
        const elements = { ...prev, [elementName]: elementValue };
        const date = toDate(elements);

        setTimeout(() => onChange?.(date, name), 1);

        return elements;
      });
    },
    [name, onChange]
  );

  return (
    <article className="date-input date-input__container">
      <input
        className="text-input date-input__input"
        type="number"
        name="day"
        value={dateElements.day}
        onChange={onInputChanged}
        min={0}
        placeholder={placeholders.dayInputPlaceholder}
      />
      <input
        className="text-input date-input__input"
        type="number"
        name="month"
        value={dateElements.month}
        onChange={onInputChanged}
        min={0}
        placeholder={placeholders.monthInputPlaceholder}
      />
      <input
        className="text-input date-input__input"
        type="number"
        name="year"
        value={dateElements.year}
        onChange={onInputChanged}
        min={0}
        placeholder={placeholders.yearInputPlaceholder}
      />
    </article>
  );
};
