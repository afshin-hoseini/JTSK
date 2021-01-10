type RadioOptionItem = {
  label: string;
  value: string;
};

type RadioOptionsProps<T> = {
  options: RadioOptionItem[];
} & T;
