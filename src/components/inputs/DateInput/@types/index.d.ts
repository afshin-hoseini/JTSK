type DateInputProps = {
  className?: string;
  value?: Date;
  name: string;
  onChange?: (value?: Date, name: string) => void;
  dayInputPlaceholder?: string;
  monthInputPlaceholder?: string;
  yearInputPlaceholder?: string;
};

type DateElements = {
  day: string;
  month: string;
  year: string;
};
