import { ComponentProps, FC, useMemo } from 'react';
import { RadioButton } from 'src/components/RadioButton';
import './style.css';

export const RadioOptions: FC<RadioOptionsProps<ComponentProps<'input'>>> = ({
  options,
  value,
  className = '',
  ...restProps
}) => {
  return useMemo(
    () => (
      <div className="radio-options radio-options__container">
        {(options || []).map((option) => {
          const id = 'item_' + option.value;
          const checkedAttr = value === undefined ? undefined : option.value === value;

          return (
            <RadioButton
              className={`${className} radio-options__item`}
              key={option.value}
              value={option.value}
              id={id}
              name={restProps.name}
              checked={checkedAttr}
              label={option.label}
              {...restProps}
            />
          );
        })}
      </div>
    ),
    [options, value, restProps, className]
  );
};
