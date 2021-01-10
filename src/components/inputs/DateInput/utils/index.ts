const ElementMaxValue: { [k in keyof DateElements]: number } = {
  day: 31,
  month: 12,
  year: 9999,
};
export const toDate = (elements: DateElements) => {
  if (elements.day === '0' || elements.month === '0' || elements.year === '0') return undefined;
  let year = +elements.year;
  year = year > 1000 ? year : 0;

  if (!elements.day || !elements.month || !year) return undefined;

  return new Date(year || 1, +elements.month - 1, +elements.day || 1);
};

export const toElements: (date: Date) => DateElements = (date) => {
  return {
    day: (date?.getDate() || '') + '',
    month: (date?.getMonth() + 1 || '') + '',
    year: (date?.getFullYear() || '') + '',
  };
};

export const validateElement = (name: keyof DateElements, value: string) => {
  if (!value || value?.trim() === '') return true;
  return Number(value) <= ElementMaxValue[name];
};
